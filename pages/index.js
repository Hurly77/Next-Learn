import styles from '../styles/Home.module.css'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/clients">
            clients
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
