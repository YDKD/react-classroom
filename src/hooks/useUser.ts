import { getUserInfoApi } from '@/api/user'
import { useCookies } from 'react-cookie'

const useUser = () => {
  const [accessTokenCookie, setAccessTokenCookie] = useCookies(['accessToken'])
  const [refreshokenCookie, setRefreshTokenCookie] = useCookies([
    'refreshToken'
  ])

  const getUserInfo = () => {
    console.log('执行')
    if (accessTokenCookie.accessToken) {
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
