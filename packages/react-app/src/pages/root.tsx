import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { generateRoutePath, RoutePath } from '../app/router-config'

export default function Root() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(generateRoutePath(RoutePath.PLAYOFF, {}))
  }, [])

  return <></>
}
