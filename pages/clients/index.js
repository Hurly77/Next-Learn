import Link from 'next/link';
import styles from '../../styles/Home.module.css'

const clients = () => {
	const clients = [{ name: 'max', id: 1 }, { name: 'cam', id: 2 }];
  console.log(clients)
	return (
		<div className={styles.container}>
			<h1>Client List</h1>
			<ul>
				{clients.map((client) => {
					(<li key={client.id}>
						<Link href={{
              pathname: '/clients/[id]',
              query: {id: client.id}
            }} />{client.name}</li>);
				})}
			</ul>
		</div>
	);
};

export default clients