import React, { useEffect, useState } from "react"
import classes from 'classnames'
import s from './style.module.scss'

export interface InputProps {
  /**
   * @description 类型
   */
  type?: 'text' | 'textarea' | ''
  /**
   * @description 大小
   */
  size?: 'normal' | 'large'
  /**
   * @description 自动获取焦点
   */
  autoFocus?: boolean
  /**
   * @description 是否禁用
   */
  disabled?: boolean
  addonBefore?: React.ReactNode
  addonAfter?: React.ReactNode
  allowCount?: boolean
  allowClear?: boolean
  rows?: number
  style?: React.CSSProperties
  value?: string | number | undefined
  placeholder?: string
  id?: string
  maxLength?: number
  bgTransparent?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
const Input: React.FC<InputProps> = (props) => {
  let input: HTMLInputElement | HTMLTextAreaElement | undefined 
  const {
    value,
    style,
    bgTransparent,
    type,
    addonBefore,
    addonAfter,
    allowCount = true,
    allowClear,
    onChange
  } = props
  const [focus, setFocus] = useState<boolean>(false)
  const [text, setText] = useState<string | number | undefined>(value || '')
  useEffect(()=>{
    setText(value)
  }, [])

  useEffect(()=> {
    setText(props.value)
  }, [props])

  const actionChange = (e: any) => {
    const target = input as any
    const event = Object.create(e)
    // 如果是点击清除按钮，则改变target指向input， value清空
    if (e.type === 'click') {
      target.value = ''
      event.target = target
      event.currentTarget = target
    }
    onChange && onChange(event)
  }
  const focusEvent = () => {
    input && input.focus()
  }
  const blurEvent = () => {
    input && input.blur()
  }
  const onFocus = () => {
    setFocus(true)
  }
  const onBlur = () => {
    setFocus(false)
  }
  const onInput = (e: any) => {
    setText(e.target.value)
    actionChange(e)
  }
  /**
   * @description 保存input节点
   * @param inputs 
   */
  const saveInput = (inputs: HTMLInputElement | HTMLTextAreaElement) => {
    input = inputs
  }
  const onClear = (e: any) => {
    setText('')
    actionChange(e)
  }

  const renderBefore = () => {
    return !!addonBefore && <div className={s['my-input-center']}>{addonBefore}</div>
  }
  const renderAfter = () => {
    return !! addonAfter && <div className={s['my-input-center']}>{addonAfter}</div>
  }
  const renderClear = () => {
    return !!allowClear && !!text && <i className={s['my-input-clear']} onClick={onClear}></i>
  }
  const renderInput = () => {
    const { placeholder, size = 'normal', maxLength, id, disabled, autoFocus } = props
    return (
      <div className={classes(s[`my-input-input`], {
        [s[`${size}`]]: true
      })}>
        <input
          {...{placeholder, maxLength, id, disabled, autoFocus}}
          value={text}
          onFocus={onFocus}
          onBlur={onBlur}
          onInput={onInput}
          ref={saveInput as any}>
        </input>
        {renderClear()}
      </div>
    )
  }
  const renderTextarea = () => {
    const { 
      placeholder,
      maxLength = 1000, 
      id, 
      disabled, 
      autoFocus, 
      rows } = props
    const _rows = rows || 3
    const _text = text
    return (
      <div
        className={s['my-input-textarea']}
        style={{height: 24 *_rows}}>
        <textarea
          {...{placeholder, maxLength, id, disabled, autoFocus}}
          rows={_rows}
          value={_text}
          onFocus={onFocus}
          onBlur={onBlur}
          onInput={onInput}
          ref={saveInput as any}>
        </textarea>
        {renderClear()}
        {
          allowCount && (
            <div className={s['my-input-textarea-footer']}>
              <span
                className={classes({
                  [s['max-length-text']]: !!maxLength && text && String(text).length >= maxLength
                })}>
                {String(text).length}
              </span>
              {!!maxLength && (
                <>
                  <span>/</span>
                  <span>{maxLength}</span>
                </>
              )}
            </div>
          )
        }
      </div>
    )
  }
  return (
    <div
      style={style}
      className={classes(s['my-input'], {
        normal: !bgTransparent,
        focus: focus,
        [s['allow-clear']]: allowClear
      })}
    >
     {renderBefore()}
     {type === 'textarea' ? renderTextarea() : renderInput()}
     {renderAfter()}
    </div>
  )
}

export default Input
