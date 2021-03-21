import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
          <div>
            <ul>
              <li>
                <Link href="/clients">
                  clients
                </Link>
              </li>
            </ul>
          </div>
    </div>
  )
}

export default Home
