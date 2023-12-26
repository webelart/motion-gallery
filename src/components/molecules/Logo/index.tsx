import cl from 'classnames';
import { ComponentProps } from '@components/types';

import Icon from '../../atoms/Icon';

import styles from './index.module.scss';

export default function Logo({
  className
}: ComponentProps) {
	return (
		<a href="/" className={cl(styles.logo, className)}>
      <Icon
        size="large"
        iconName="logo"
        className={styles.logoIcon}
      />
      <div className={styles.logoTitle}>Future</div>
      <div className={styles.logoSubtitle}>Today - Tomorrow</div>
    </a>
	);
}