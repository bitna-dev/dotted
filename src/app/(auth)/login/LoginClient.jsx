'use client'

import Loader from '@/components/loader/Loader'
import { useState } from 'react'
import styles from './Auth.module.scss'
import Image from 'next/image'
import LogoPath from '@assets/colorful.svg'
import { useRouter } from 'next/navigation'

const LoginClient = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  // EMAIL LOGIN
  const loginUser = (e) => {
    e.preventDefault()
  }

  //   GOOGLE LOGIN
  const signInWithGoogle = (e) => {
    e.preventDefault()
  }

  //   REDIRECT
  const redirectUser = () => {
    router.push('/')
  }
  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image src={LogoPath} alt="logo" width={247} priority />
          </h1>

          <form className={styles.form} onSubmit={loginUser}>
            INPUT
            <div className={styles.group}>auto login</div>
            <div className={styles.buttonGroup}>
              <div>BUTTON</div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default LoginClient
