'use client'
import styles from './RegisterClient.module.scss'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import LogoPath from '@assets/colorful.svg'
import Input from '@components/input/Input'
import Image from 'next/image'
import Button from '@components/button/Button'
import Divider from '@components/divider/Divider'
import Link from 'next/link'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@firebase/index'
import { toast } from 'react-toastify'
import Loader from '@components/loader/Loader'

const RegisterClient = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const [values, setValues] = useState({
    email: '',
    password: '',
    c_password: '',
  })

  // EMAIL LOGIN
  const signUpUser = async (e) => {
    e.preventDefault()
    const { email, password, c_password } = values
    if (password !== c_password) {
      return toast.error('비밀번호가 일치하지 않습니다.')
    }
    try {
      console.log(email, password)
      await createUserWithEmailAndPassword(auth, email, password).then(
        (user) => {
          toast.success(`${user.displayName}님 환영합니다.`)
          redirectUser()
        },
      )
    } catch (error) {}
  }

  //   GOOGLE SIGNIN
  const signUpWithGoogle = async (e) => {}

  //   REDIRECT
  const redirectUser = () => {
    router.push('/')
  }

  // 자동로그인
  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image src={LogoPath} alt="logo" width={247} priority />
          </h1>

          <form className={styles.form} onSubmit={signUpUser}>
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
            <Input
              icon="lock"
              id="c_password"
              name="c_password"
              label="비밀번호 확인"
              placeholder="확인비밀번호를 입력해주세요."
              className={styles.control}
              value={values.c_password}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <div className={styles.links}>
              <Link href="/login">이미 계정이 있으신가요?</Link>
            </div>
            <div className={styles.buttonGroup}>
              <Button type="submit">회원가입</Button>
              <Divider />
              <Button secondary onClick={signUpWithGoogle}>
                구글회원가입
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
export default RegisterClient
