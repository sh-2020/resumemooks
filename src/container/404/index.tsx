import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
const FourToFour = () => {
  let navigate = useNavigate()
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/info')
    }, 3000)
  })
  return (
    <div>
      页面离家出走了
    </div>
  )
}

export default FourToFour