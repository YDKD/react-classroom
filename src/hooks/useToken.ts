import { Cookies } from 'react-cookie'

const cookie = new Cookies()

const useToken = () => {
  const getValue = (key: string) => {
    return cookie.get(key)
  }

  const getAllValue = () => {
    return cookie.getAll()
  }

  const removeValue = (keys: string | string[]) => {
    if (Array.isArray(keys)) {
      keys.forEach((key) => {
        cookie.remove(key)
      })
    } else {
      cookie.remove(keys)
    }
  }

  return {
    getValue,
    getAllValue,
    removeValue
  }
}

export default useToken
