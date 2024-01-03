import { ComponentProps } from '@components/types';

import Container from '../../atoms/Container';
import Logo from '../../molecules/Logo';
import Navigation from '../../molecules/Navigation';
import Options from '../../molecules/Options';

import styles from './index.module.scss';

export default function Header({
	className,
}: ComponentProps) {
	return (
		<header className={styles.header}>
			<Container type="header" className={styles.headerContainer}>
				<Logo />
				<Navigation className={styles.headerNavigation} />
				<Options className={styles.headerOptions} />
			</Container>
		</header>
	);
}