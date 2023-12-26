import { ComponentProps } from '@components/types';

import Logo from '../../molecules/Logo';

import './index.css';

export default function Header({
	className,
}: ComponentProps) {
	return (
		<header className={className}>
			<Logo />
		</header>
	);
}