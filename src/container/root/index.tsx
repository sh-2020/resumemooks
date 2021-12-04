import s from './style.module.scss'
import Logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";
import { ROUTER_ENTRY } from '../../routers'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';

const Root = () => {

  const navigate = useNavigate()

  const onRouterToLink = (url: string) => {
    navigate(url)
  }
  return (
    <div className={s.root}>
      <div className={s.container}>
        <img src={Logo} alt="log"  />
        <div className={s.title}>VisResumePlatform</div>
        <div className={s.tips}>一个模板简历制作平台,让你的简历更加出众 ~</div>
        <div className={s.action}>
          {
            ROUTER_ENTRY.map((item, index)=>{
              return (
                item.key !== 'root' ?
                <div key={index} className={s.item} onClick={() => onRouterToLink(item.url)}>
                  {item.text}
                </div>
                : null
              )
            })
          }
        </div>
        <div className={s.copyRight}>
          <div className={s.footer}>
            <div className={s.cont}>
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Root