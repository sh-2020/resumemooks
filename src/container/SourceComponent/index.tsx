import { useNavigate } from 'react-router-dom'

const SourceComponent = () => {
  const navigator = useNavigate()
  return (
    <div>
      <div>SourceComponent</div>
      <div onClick={() => navigator('/')}>退出</div>
    </div>
    
  )
}

export default SourceComponent
