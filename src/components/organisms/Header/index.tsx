import { ComponentProps } from '@components/types';

import Logo from '../../molecules/Logo';
import Navigation from '../../molecules/Navigation';
import Options from '../../molecules/Options';

import './index.css';

export default function Header({
	className,
}: ComponentProps) {
	return (
		<header className={className}>
			<Logo />
			<Navigation />
			<Options />
		</header>
	);
}