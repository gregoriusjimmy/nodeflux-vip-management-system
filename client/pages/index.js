import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { API_URL } from '../constants'
import { TextField, Button, Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(
        API_URL + 'login',
        { username, password },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.ok) {
          router.push('/vips')
        }
      })
      .catch((e) => console.error(e))
  }

  return (
    <Layout>
      <div className={styles.container}>
        <div>
          <Typography align='center' variant='h2' component='h2' gutterBottom>
            Vip Management System <br /> <strong>Nodeflux</strong>
          </Typography>
        </div>
        <div>
          <form className={styles.formContainer}>
            <TextField
              id='username'
              name='username'
              label='Username'
              variant='outlined'
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              className={styles.inputField}
              id='password'
              email='password'
              type='password'
              label='Password'
              variant='outlined'
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              fullWidth
              variant='contained'
              color='primary'
              onClick={handleSubmit}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
