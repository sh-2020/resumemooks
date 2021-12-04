import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigator = useNavigate()
  return (
    <div>
      <div>我是Info</div>
      <div onClick={() => navigator('/')}>退出</div>
    </div>
    
    
  )
}

export default Info
