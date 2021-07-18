import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import axios from 'axios'
import { API_URL } from '../../../constants'
import { Switch, FormControlLabel } from '@material-ui/core'
import styles from '../../../styles/VipIndex.module.css'
import { Link } from '@material-ui/core'
import moment from 'moment-timezone'
import { useRouter } from 'next/router'

export const VipIndex = ({ vip }) => {
  const [isArrived, setIsArrived] = useState(vip.arrived)
  const { id } = useRouter().query
  const toggleIsArrived = () => {
    axios
      .patch(
        `${API_URL}vips/${id}/arrived`,
        { arrived: !isArrived },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.ok) {
          setIsArrived(!isArrived)
        }
      })
      .catch((e) => console.error(e))
  }
  return (
    <Layout>
      <Link className={styles.backButton} href='/vips'>
        &#x2B05; Back
      </Link>

      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.imageContainer}>
            <img
              className={styles.vipPhoto}
              src={vip.photo}
              alt='vip profile picture'
            />
          </div>
          <div className={styles.vipContent}>
            <h2 className={styles.vipName}>{vip.name}</h2>
            <h3 className={styles.vipCountry}>{vip.country_of_origin}</h3>
            <ul>
              {vip.attributes.map((attribute) => (
                <li key={attribute}>{attribute}</li>
              ))}
            </ul>
            <h3 className={styles.vipEta}>
              ETA : {moment(vip.eta).tz('Japan').format('DD-MM-YYYY h:mm:ss')}{' '}
            </h3>
            {isArrived ? (
              <h1 className={styles.vipArrived}>ARRIVED</h1>
            ) : (
              <h1 className={styles.vipNotArrived}>NOT ARRIVED</h1>
            )}
          </div>
        </div>
        <div className={styles.switchContainer}>
          <FormControlLabel
            control={
              <Switch
                checked={isArrived}
                onChange={toggleIsArrived}
                name='arrived'
              />
            }
            label='Arrived'
          />
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async ({ req, params }) => {
  const res = await axios.get(`${API_URL}vips/${params.id}`, {
    headers: { cookie: req.headers.cookie },
    withCredentials: true,
  })

  if (res.data.ok) {
    return {
      props: { vip: res.data.data },
    }
  }
}

export default VipIndex
