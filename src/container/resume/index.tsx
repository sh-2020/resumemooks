import Button from "../../components/button";
import {ROUTE} from '../../routers'
import Input from "../../components/input/input";
const Resume = () => {
  
  const clickHandle = () => {
    console.log(123)
  }
  let username
  let hobby
  return (
    
    <div>
      <div>我是Resume</div>
      <Button link to={ROUTE.info} onClick={clickHandle} size="middle">导出</Button>   
      <Button onClick={clickHandle} size="middle">导出</Button>  
      <Input
        value={username}
        placeholder="请输入姓名" // 占位文本
        allowClear={true} // 是否显示清除icon
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        value={hobby || ''}
        placeholder="你有什么特长爱好呢" // 占位文本
        allowClear={true} // 是否显示清除icon
        onChange={(e) => console.log(e.target.value)}
        type="textarea" // 类型为多行文本
        rows={5} // 输入文本的行数
        maxLength={200} // 最多支持的文本长度
        allowCount={true} // 是否显示底部文本字数
      />
    </div>
  )
}

export default Resume
