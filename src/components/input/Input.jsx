import classNames from 'classnames'
import React, { useState } from 'react'
import Icon from '@components/icon/Icon'
import styles from './Input.module.scss'

const Input = ({
  id,
  label,
  name = '',
  labelVisibility = true,
  icon,
  placeholder,
  readOnly,
  disabled,
  value,
  error: errorProp,
  className = '',
  onChange,
  ...restProps
}) => {
  const checkType = () => {
    if (name === 'email') {
      return 'email'
    }
    if (name === 'password') {
      return isPasswordVisible ? 'text' : 'password'
    }
    return 'text'
  }
  const [inputValue, setInputValue] = useState(value ? value : '')
  const handleChange = (e) => {
    setInputValue(e.target.value)
    onChange(e)
    console.log(e.target.name, e.target.value)
  }
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const iconType = isPasswordVisible ? 'show' : 'hide'
  const iconLabel = isPasswordVisible ? '표시' : '감춤'
  return (
    <div className={classNames(styles.formControl, className)}>
      <label
        htmlFor={id}
        className={classNames(
          styles.label,
          labelVisibility || styles.labelHidden,
        )}
      >
        {label}
      </label>
      <div
        className={classNames(
          styles.inputWrapper,
          errorProp && styles.inputWrapperError,
        )}
      >
        {icon && <Icon type={icon} />}
        <input
          id={id}
          type={checkType()}
          name={name}
          className={classNames(styles.input)}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
          value={value}
          onChange={handleChange}
          {...restProps}
        />
        {name === 'password' ? (
          <button
            type="button"
            className={styles.button}
            onClick={() => {
              setIsPasswordVisible((prev) => !prev)
            }}
            disabled={disabled}
          >
            <Icon type={iconType} alt={iconLabel} label={iconLabel} />
          </button>
        ) : null}
      </div>
      {errorProp && (
        <span role="alert" className={styles.error}>
          {errorProp.message}
        </span>
      )}
    </div>
  )
}

export default Input
