import styles from './Tooltip.module.scss'
const Tooltip = ({
  color = '',
  bgColor = '',
  orientation,
  message,
  ...restProps
}) => {
  const style = {
    color,
    backgroundColor: bgColor,
  }

  return (
    <span
      role="tooltip"
      style={style}
      {...restProps}
      className={styles.tooltip}
    >
      {message}
    </span>
  )
}

export default Tooltip
