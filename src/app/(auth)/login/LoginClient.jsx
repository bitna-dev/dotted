'use client'

import Loader from '@components/loader/Loader'
import { useState } from 'react'
import styles from './Auth.module.scss'
import Image from 'next/image'
import LogoPath from '@assets/colorful.svg'
import { useRouter } from 'next/navigation'
import Input from '@components/input/Input'
import AutoSignInCheckbox from '@components/autoSiginInCheckbox/AutoSignInCheckbox'
import Divider from '@components/divider/Divider'
import Button from '@components/button/Button'
import Link from 'next/link'
import { auth } from '@firebase/index'
import { toast } from 'react-toastify'
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'

const LoginClient = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  // EMAIL LOGIN
  const loginUser = async (e) => {
    e.preventDefault()
    const { email, password } = values
    console.log(email, password)
    try {
      await signInWithEmailAndPassword(auth, email, password).then((user) => {
        console.log(user)
        toast.success(`${user.displayName}님 환영합니다.`)
        redirectUser()
      })
    } catch (error) {
      console.log(error)
    }
  }

  //   GOOGLE LOGIN
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider).then((res) => {
        console.log(res)
        const user = GoogleAuthProvider.credentialFromResult(res)
        toast.success(`${user.displayName}님 환영합니다.`)
        redirectUser()
      })
    } catch (error) {
      console.log(error)
    }
  }

  //   REDIRECT
  const redirectUser = () => {
    router.push('/')
  }

  // 자동로그인
  const [isAutoLogin, setIsAutoLogin] = useState(false)
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
              label="이메일"
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
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              className={styles.control}
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <div className={styles.group}>
              <AutoSignInCheckbox
                checked={isAutoLogin}
                onChange={(e) => {
                  setIsAutoLogin(e.target.checked)
                }}
              />
              <div className={styles.linksWrapper}>
                <div className={styles.links}>
                  <Link href="/reset">비밀번호를 잊으셨나요?</Link>
                </div>
                <div className={styles.links}>
                  <Link href="/register">아직 계정이 없으신가요?</Link>
                </div>
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <Button type="submit">로그인</Button>
              <Divider />
              <Button secondary onClick={signInWithGoogle}>
                구글로그인
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default LoginClient
