'use client'
import AutoSignInCheckbox from '@components/autoSiginInCheckbox/AutoSignInCheckbox'
import Button from '@components/button/Button'
import Divider from '@components/divider/Divider'
import Input from '@components/input/Input'
import Loader from '@components/loader/Loader'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import styles from './ResetClient.module.scss'
import LogoPath from '@assets/colorful.svg'
import { sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '@firebase/index'
import { toast } from 'react-toastify'

const ResetClient = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const [values, setValues] = useState({
    email: '',
  })

  //   PASSWORD RESET EMAIL
  const handleReset = async (e) => {
    e.preventDefault()
    const { email } = values

    try {
      await sendPasswordResetEmail(auth, email).then(() => {
        e.preventDefault()
        setValues({ email: '' })
        toast.success('이메일이 발송되었습니다.')
      })
    } catch (error) {
      console.log(error)
    }
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

          <form className={styles.form} onSubmit={handleReset}>
            {/* INPUT */}
            <Input
              icon="letter"
              id="email"
              name="email"
              label="이메일"
              placeholder="이메일을 입력해주세요."
              className={styles.control}
              value={values.email}
              onChange={(e) => {
                setValues({ [e.target.name]: e.target.value })
              }}
            />

            <div className={styles.buttonGroup}>
              <Button type="submit">재설정하기</Button>
            </div>

            <div className={styles.linksWrapper}>
              <div className={styles.links}>
                <Link href="/register">아직 계정이 없으신가요?</Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default ResetClient
