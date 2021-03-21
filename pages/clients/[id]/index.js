import Link from 'next/link' 
import {useRouter} from 'next/router'

const client = () => {

  return (
    <div>
      <h1>{useRouter().query.name}</h1>
      <ul>
        <Link href="/clients"> back </Link>
      </ul>
    </div>
  )
}

export default client