import styles from './Heading.module.scss'

const Heading = ({ title, subTitle, center }) => {
  return (
    <div className={styles.wrapper}>
      <div className={center ? styles.center : ''}>
        <div className={styles.center}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
      </div>
    </div>
  )
}

export default Heading
