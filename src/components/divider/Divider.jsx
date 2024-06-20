import classNames from 'classnames'
import styles from './Divider.module.scss'

const Divider = ({ space = 22, color, className = '', ...restProps }) => {
  const style = {
    marginTop: space,
    marginBottom: space,
    background: color,
  }
  return (
    <div
      role="presentation"
      className={classNames(styles.lines, className)}
      style={style}
      {...restProps}
    />
  )
}

export default Divider
