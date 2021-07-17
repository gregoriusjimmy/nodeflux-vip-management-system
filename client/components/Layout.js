import Head from 'next/head'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
      </Head>
      <div className={styles.container}>{children}</div>
    </>
  )
}
export default Layout
