import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { API_URL } from '../constants'
import { TextField, Button } from '@material-ui/core'
import Layout from '../components/Layout'

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
      .catch((e) => console.log(e))
  }

  return (
    <Layout>
      <div>
        <form>
          <TextField
            id='username'
            name='username'
            label='Username'
            variant='outlined'
            fullWidth
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id='password'
            email='password'
            type='password'
            label='Password'
            variant='outlined'
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant='contained' color='primary' onClick={handleSubmit}>
            Login
          </Button>
        </form>
      </div>
    </Layout>
  )
}
