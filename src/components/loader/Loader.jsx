import { PuffLoader } from 'react-spinners'
import styles from './Loader.module.scss'

const Loader = ({ basic }) => {
  // 해당되는 컴포넌트 안에서만
  if (basic) {
    return (
      <div className={styles.basicWrapper}>
        <PuffLoader color="#36d7b7" width="30" />
      </div>
    )
  }
  // 전체일경우
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <PuffLoader color="#36d7b7" width="30" />
      </div>
    </div>
  )
}

export default Loader
