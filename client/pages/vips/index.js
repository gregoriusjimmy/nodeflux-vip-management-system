import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import useSWR from 'swr'
import EtaFilter from '../../components/EtaFilter'
import VipsTable from '../../components/VipsTable'
import moment from 'moment-timezone'
import styles from '../../styles/VipsIndex.module.css'
import buildClient from '../api/build-client'

const fetcher = async (url) => {
  const res = await axios.get(url, {
    withCredentials: true,
  })
  return res.data.data
}

const VipsIndex = ({ vips }) => {
  const { data } = useSWR('api/vips', fetcher, { initialData: vips })
  const [filterTime, setFilterTime] = useState('')
  const [filteredVips, setFilteredVips] = useState(data)

  const handleFilterEta = () => {
    const currentTime = moment()
    let newFilteredVips
    if (!filterTime) {
      newFilteredVips = data
    } else {
      newFilteredVips = data.filter((vip) => {
        const diffTimeInMills = currentTime.diff(moment(vip.eta)) // return time in millisecond
        return diffTimeInMills < parseInt(filterTime) * 1000 * 60 // filterTime in millisecond
      })
    }
    setFilteredVips(newFilteredVips)
  }

  useEffect(() => {
    handleFilterEta()
  }, [filterTime, data])

  return (
    <Layout>
      <div className={styles.container}>
        <EtaFilter
          value={filterTime}
          handleChange={(e) => setFilterTime(e.target.value)}
        />
        <div className={styles.table}>
          <VipsTable vips={filteredVips} />
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const client = buildClient(context)
  const res = await client.get('/api/vips')
  if (res.data.ok) {
    return {
      props: { vips: res.data.data },
    }
  }
  return {
    props: { vips: [] },
  }
}

export default VipsIndex
