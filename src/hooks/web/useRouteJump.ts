import { useNavigate } from 'react-router-dom'

const useRouteJump = (path: string) => {
  const navigate = useNavigate()
  navigate(path)
}

export default useRouteJump
