import { IconName, ComponentProps } from '@components/types';

import cl from 'classnames';

import styles from './index.module.scss';

interface IconProps extends ComponentProps {
	iconName: IconName;
	size?: 'small' | 'medium' | 'large';
}

export default function Icon({
	iconName,
	size = 'medium',
	className,
}: IconProps) {
	return (
		<span
			className={cl(
				className,
				styles[iconName],
				styles.icon,
				styles[size]
			)}
		/>
	);
}