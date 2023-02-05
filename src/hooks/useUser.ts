import { getUserInfoApi } from '@/api/user'
import { useCookies } from 'react-cookie'

import useToken from '@/hooks/useToken'

const { getValue } = useToken()

const useUser = () => {
  const getUserInfo = () => {
    if (getValue('access_token')) {
      return getUserInfoApi().then((res) => {
        console.log('res', res)
      })
    } else {
      return Promise.reject('no token')
    }
  }

  return {
    getUserInfo
  }
}

export default useUser
