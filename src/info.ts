import { REGION_MAP } from './constants'
import verify from './verify'

function info(code: string) {
  const valid = verify(code)
  if (!valid) {
    return {
      valid: false
    }
  }
  const areaCode = code.substr(0, 1)
  const genderNum = Number(code.substr(1, 1))
  const gender = genderNum === 1 ? 'M' : 'F' // M->男 F->女
  const area = REGION_MAP[areaCode]

  return {
    valid: true,
    gender,
    area,
  }
}

export default info