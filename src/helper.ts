import {
  ObjectOptionsType,
  ObjectOptionType,
  NullOption,
  OptionFormateType
} from './type'

/**
 * 将对象形式的 Options 转换为 Array，只转换第一层
 */
export const transformObjectToArray = (options: ObjectOptionsType, nullOption: NullOption) => {
  const { id: nullOptionKey, display } = nullOption
  const keys = Object.keys(options)
  return keys.filter((key) => {
    return display ? true : (nullOptionKey !== key)
  }).map((key) => {
    const { value, items, ...others } = options[key]
    return {
      id: key,
      value: options[key].value,
      ...others
    }
  })
}

/**
 * 格式化 Object 类型 Options
 * @param objectOptions
 * @param objectOptionFormate
 */
export const deepFormatObjectOptions = (objectOptions: {[key: string]: any}, optionFormat: OptionFormateType) => {
  if (objectOptions) {
    const newOptions: ObjectOptionsType = {}
    const keys = Object.keys(objectOptions)
    if (keys.length > 0) {
      for (const key of keys) {
        const item = objectOptions[key]
        const formatedItem = optionFormat(item)
        const { items } = formatedItem

        const newItems = deepFormatObjectOptions(items, optionFormat)
        newOptions[key] = formatedItem

        if (newItems) {
          newOptions[key].items = newItems
        }
      }
      return newOptions
    }
  }
  return null
}

/**
 * 将 Array 类型的 Options 格式化，并且转换成 Object 类型
 * @param {*} options Array 形式的 options
 */
export const deepTransformArrayToObject = (arrayOptions: any[], optionFormat: OptionFormateType) => {
  const options: ObjectOptionsType = {}
  if (arrayOptions) {
    for (const arrayOption of arrayOptions) {
      const { id, items, ...others } = optionFormat(arrayOption)
      const newOption: ObjectOptionType = others
      const object = deepTransformArrayToObject(items, optionFormat)
      if (object != null) {
        newOption.items = object
      }
      options[id] = newOption
    }
    return options
  }
  return null
}

/**
 * 用 values 和 options 匹配，并返回合法的部分 legalValues 和剩余的 options
 * 如果完全匹配，则返回的 options 为 null
 */
export const matchOptionsAndValues = (options: ObjectOptionsType, values: string[]) => {
  let opts = options
  const newValues = []
  for (const value of values) {
    const option = opts[value]
    if (option == null) {
      break
    }
    newValues.push(value)
    if (option.items) {
      opts = option.items
    } else {
      opts = null
    }
  }
  return {
    options: opts,
    values: newValues
  }
}

/**
 * 通过 keys 获取对象形式的 values
 */
export const getValueObjects = (options: ObjectOptionsType, values: string[]) => {
  let opts = options
  const newValues = []
  for (const value of values) {
    const option = opts[value]
    if (option == null) {
      break
    }
    const { items: subOption, ...otherOption } = option
    newValues.push({
      id: value,
      ...otherOption
    })
    opts = option.items
  }
  return newValues
}

/**
 * 通过给定的 Options 返回 values
 * @param {*} options 给定的 Options
 * @returns {array} 默认匹配的 values
 */
export const getDefaultValuesByOptions = (options: ObjectOptionsType, nullOption: NullOption, autoSelect: boolean) => {
  const { id } = nullOption

  const values = []
  let opts = options
  while (opts) {
    const keys = Object.keys(opts)
    if (keys.length > 0) {
      // 如果不开启自动选择，则优先选空值
      let key
      if (!autoSelect && opts[id]) {
        key = id
      } else {
        key = keys[0]
      }
      values.push(key)
      opts = opts[key].items
    } else {
      break
    }
  }
  return values
}

/**
 * 为对象添加空值，并且空值在前
 * @param {*} options
 */
export const addNullOptions = (options: ObjectOptionsType, nullOption: NullOption) => {
  if (options) {
    const newOptions: ObjectOptionsType = {}
    const keys = Object.keys(options)
    if (keys.length > 0) {
      for (const key of keys) {
        const item = options[key]
        const child = item.items
        const newChild = addNullOptions(child, nullOption)
        newOptions[key] = item

        if (newChild) {
          newOptions[key].items = newChild
        }
      }

      const { id, value } = nullOption

      return {
        [id]: {
          value
        },
        ...newOptions
      }
    }
  }
  return null
}
