
/**
 * 将对象形式的 Options 转换为 Array，只转换第一层
 */
export const transformObjectToArray = (objectOptions) => {
  const keys = Object.keys(objectOptions)
  return keys.map((key) => {
    const { value, item, ...others } = objectOptions[key]
    return {
      id: key,
      value: objectOptions[key].value,
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
    const { id, value, [subOptionKey]: item } = arrayOption
    const newOption = { value }
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
 * 用 values 和 options 匹配，并返回合法的部分 legalValues 和剩余的 options
 * 如果完全匹配，则返回的 options 为 null
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
export const getDefaultValuesByOptions = (options, subOptionKey) => {
  const values = []
  let opts = options
  while (opts) {
    const keys = Object.keys(opts)
    if (keys.length > 0) {
      const key = keys[0]
      values.push(key)
      opts = opts[key][subOptionKey]
    } else {
      break
    }
  }
  return values
}
