'use client'

import Loader from '@/components/loader/Loader'
import { useState } from 'react'
import styles from './Auth.module.scss'
import Image from 'next/image'
import LogoPath from '@assets/colorful.svg'
import { useRouter } from 'next/navigation'
import Input from '@components/input/Input'

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
            {/* INPUT */}
            <Input
              icon="letter"
              id="email"
              name="email"
              label="email"
              placeholder="이메일을 입력해주세요."
              className={styles.control}
              value={values.email}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <Input
              icon="lock"
              id="password"
              name="password"
              label="password"
              placeholder="비밀번호를 입력해주세요."
              className={styles.control}
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
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
