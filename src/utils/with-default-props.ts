import assignWith from 'lodash/assignWith'
export function mergeProps(...params: any[]) {
  function customizer(objValue: any, srcValue: any) {
    return srcValue === undefined ? objValue : srcValue
  }

  let result = { ...params[0] }
  for (let i = 1; i < params.length; i++) {
    // 将params[i]的属性复制到result，属性相同则覆盖
    result = assignWith(result, params[i], customizer)
  }

  return result
}