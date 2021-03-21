import Link from 'next/link'

const ClientsPage = () => {
  const clients = [
    {id: "cam", name: "Cameron"},
    {id: "max", name: "Maximilian"},
    {id: 'ty', name: "Tyler"}
  ]
  return (
    <div>
      <h1>Clients Page</h1>
        <li><Link href="/">Home</Link></li>
      <ul>
        {clients.map(client => <li key={client.id}>
          <Link href={{
          pathname: 'clients/[id]',
          query: client
          }}>{client.name}</Link>
        </li>)}
      </ul>
    </div>
  )
}

export default ClientsPage