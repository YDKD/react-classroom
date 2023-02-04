import { Cookies } from 'react-cookie'

const cookie = new Cookies()

const useToken = () => {
  const getValue = (key: string) => {
    return cookie.get(key)
  }

  const getAllValue = () => {
    return cookie.getAll()
  }

  return {
    getValue,
    getAllValue
  }
}

export default useToken
