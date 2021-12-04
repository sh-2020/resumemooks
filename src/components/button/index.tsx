import classes from 'classnames'
import s from './style.module.scss'
import { useNavigate } from "react-router-dom";

export interface ButtonProps {
  size?: 'small' | 'middle' | 'big'
  width?: number
  style?: React.CSSProperties
  children?: React.ReactNode | any
  disabled?: boolean
  className?: string
  onClick?: Function
  border?: boolean
  link?: boolean
  to?: string
}
const Button: React.FC<ButtonProps> = ({size = "small", width, style, children, disabled, className, onClick, border = true, link, to}) => {
  const navigator = useNavigate()
  const classNames = classes(className, s['es_button'],{
      [s[`es_button_${size}`]]: true,
      [s[`es_button_disabled`]]: disabled,
      [s[`es_button_border`]]: border
  })
  const styles = {
    ...style,
    width: width
  }
  const clickHandle = () => {
    onClick && onClick()
  } 
  return (
    !link ?
    <div
      style={styles}
      className={classNames}
      onClick={
        clickHandle
      }>
      { children }
    </div> 
    : 
    <a href={to} style={styles}
      className={classNames}
      onClick={
      (e) => {
        e.preventDefault()
        navigator(`${to}`)
      }}>
        {children}
    </a>
  ) 
}
export default Button
