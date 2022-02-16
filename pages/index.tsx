import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Ashley Patricia</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Coming Soon{' '}
					<motion.div
						style={{ display: 'inline-block' }}
						animate={{ y: [-25, 25] }}
						transition={{
							type: 'spring',
							duration: 0.5,
							repeat: Infinity,
							repeatType: 'mirror',
						}}
					>
						:)
					</motion.div>
				</h1>
			</main>
		</div>
	);
};

export default Home;
