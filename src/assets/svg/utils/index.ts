/**
 * @param {string} styleStr 字符串
 * @return {*}
 * @description: 将字符串转为对象
 * @author: YDKD
 */

interface IObj {
  [key: string]: any
}

function styleStrToObject(styleStr: string) {
  const obj: IObj = {}
  const s = styleStr
    .toLowerCase()
    .replace(/-(.)/g, function (m, g) {
      return g.toUpperCase()
    })
    .replace(/;\s?$/g, '')
    .split(/:|;/g)
  for (let i = 0; i < s.length; i += 2) {
    obj[s[i].replace(/\s/g, '')] = s[i + 1].replace(/^\s+|\s+$/g, '')
  }

  return obj
}

export default styleStrToObject
