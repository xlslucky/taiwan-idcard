import { REGION_MAP, REGION_NUMBER_MAP } from './constants'

function verify(code: string) {
  // 非字符串
  if (typeof code !== 'string') {
    return false
  }
  const codeArr = code.split('')
  // id长度不够
  if (codeArr.length !== 10) {
    return false
  }
  // 首位不是正确code
  if (!Object.keys(REGION_MAP).includes(codeArr[0])) {
    return false
  }
  const notAllNumber = codeArr.slice(1).reduce((flag, v) => {
    return flag || !/\d+/g.test(v)
  }, false)
  // 其中有项不是数字
  if (notAllNumber) {
    return false
  }
  const [X1, X2] = String(REGION_NUMBER_MAP[codeArr[0]]).split('').map(str => Number(str))
  const calcArr = codeArr.slice(0, 9)
  const checkCode = Number(codeArr[codeArr.length - 1])

  const sum = calcArr.reduce((prevNum, v, index) => {
    if (index === 0) {
      return X1
    }
    if (index === 1) {
      return prevNum + 9 * X2
    }
    return prevNum + (10 - index) * Number(v)
  }, 0)

  return (10 - sum % 10) === checkCode
}

export default verify