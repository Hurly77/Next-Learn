import styles from '../../styles/Home.module.css'
import Link from 'next/link'


const about = () => {
  return (
    <div className={styles.container}>
      <h1>About</h1>
            <Link href="/">
              Home
            </Link>
    </div>
  )
}

export default about