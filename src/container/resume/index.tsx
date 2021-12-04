import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import {ROUTE} from '../../routers'
const Resume = () => {
  
  const clickHandle = () => {
    console.log(123)
  }
  return (
    <div>
      <div>我是Resume</div>
      <Button link to={ROUTE.info} onClick={clickHandle} size="middle">导出</Button>   
      <Button onClick={clickHandle} size="middle">导出</Button>  
    </div>
  )
}

export default Resume
