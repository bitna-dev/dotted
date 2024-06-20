import React from 'react'

const Checkbox = ({ label, checked, disabled, onChange, ...restProps }) => {
  return (
    <div style={{ display: 'flex', gap: '4px', textAlign: 'center' }}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...restProps}
      />
      <label style={{ color: 'var(--dark-gray)' }}>{label}</label>
    </div>
  )
}

export default Checkbox
