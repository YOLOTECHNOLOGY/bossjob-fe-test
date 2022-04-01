import Header from '/components/Header';
import styles from '../styles/Home.module.css';
import Search from '../components/Search/Search';
import JobsList from '../components/Jobs/JobsList';

export default function Home() {
	return (
		<div className={styles.app}>
			<div className={styles.appWrapper}>
				<Header />
				<Search />
				<div style={{ padding: '10px 20px' }}>
					<JobsList />
				</div>
			</div>
		</div>
	);
}
