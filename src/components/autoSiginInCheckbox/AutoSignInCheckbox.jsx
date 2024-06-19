import React from 'react'
import styles from './AutoSignInCheckbox.module.scss'
import Checkbox from '@components/checkbox/Checkbox'
import Tooltip from '../tooltip/Tooltip'
const AutoSignInCheckbox = ({
  label = '자동 로그인',
  checked,
  disabled,
  orientation = 'top',
  message = '개인정보 보호를 위해 본인 기기에서만 사용해주세요.',
  onChange,
  ...restProps
}) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.formControl}>
        <Checkbox
          label={label}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          {...restProps}
        />
        {checked ? (
          <Tooltip
            left={-5}
            top={24}
            orientation={orientation}
            message={message}
          />
        ) : (
          <div></div>
        )}
      </span>
    </div>
  )
}

export default AutoSignInCheckbox
