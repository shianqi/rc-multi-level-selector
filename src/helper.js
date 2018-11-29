
/**
 * 将对象形式的 Options 转换为 Array，只转换第一层
 */
export const transformObjectToArray = ({ options, nullOption }) => {
  const { id: nullOptionKey, display } = nullOption
  const keys = Object.keys(options)
  return keys.filter((key) => {
    return display ? true : (nullOptionKey !== key)
  }).map((key) => {
    const { value, item, ...others } = options[key]
    return {
      id: key,
      value: options[key].value,
      ...others
    }
  })
}

/**
 * @param {*} options Array 形式的 options
 */
export const deepTransformArrayToObject = (arrayOptions, subOptionKey) => {
  const options = {}
  if (arrayOptions == null) {
    return null
  }
  for (const arrayOption of arrayOptions) {
    const { id, value, [subOptionKey]: item, ...others } = arrayOption
    const newOption = {
      value,
      ...others
    }
    const object = deepTransformArrayToObject(item, subOptionKey)
    if (object != null) {
      newOption[subOptionKey] = object
    }
    options[id] = newOption
  }
  return options
}

/**
 * 用 values 和 options 匹配，并返回合法的部分 legalValues 和剩余的 options
 * 如果完全匹配，则返回的 options 为 null
 */
export const matchOptionsAndValues = (options, values, subOptionKey) => {
  let opts = options
  const newValues = []
  for (const value of values) {
    const option = opts[value]
    if (option == null) {
      break
    }
    newValues.push(value)
    if (option[subOptionKey]) {
      opts = option[subOptionKey]
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
export const getValueObjects = (options, values, subOptionKey) => {
  let opts = options
  const newValues = []
  for (const value of values) {
    const option = opts[value]
    if (option == null) {
      break
    }
    const { [subOptionKey]: subOption, ...otherOption } = option
    newValues.push({
      id: value,
      ...otherOption
    })
    opts = option[subOptionKey]
  }
  return newValues
}

/**
 * 通过给定的 Options 返回 values
 * @param {*} options 给定的 Options
 * @returns {array} 默认匹配的 values
 */
export const getDefaultValuesByOptions = (options, subOptionKey, nullOption, autoSelect) => {
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
      opts = opts[key][subOptionKey]
    } else {
      break
    }
  }
  return values
}

// TODO: 自定义 NULLOPTION 的 key & value
/**
 * 为对象添加空值，并且空值在前
 * @param {*} options
 */
export const addNullOptions = ({ options, subOptionKey, nullOption }) => {
  if (options) {
    const newOptions = {}
    const keys = Object.keys(options)
    if (keys.length > 0) {
      for (const key of keys) {
        const item = options[key]
        const child = item[subOptionKey]
        const newChild = addNullOptions({ options: child, subOptionKey, nullOption })
        newOptions[key] = item

        if (newChild) {
          newOptions[key][subOptionKey] = newChild
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
