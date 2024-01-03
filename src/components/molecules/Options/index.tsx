import { ComponentProps } from '@components/types';
import cl from 'classnames';

import Icon from '../../atoms/Icon';

import styles from './index.module.scss';

export default function Options({
  className
}: ComponentProps) {
  return (
    <ul className={cl(styles.options, className)}>
      <li className={styles.optionsItem}>
        <a href="#" className={styles.optionsLink}>
          <Icon iconName="sun" />
        </a>
      </li>
      <li className={styles.optionsItem}>
        <a href="#" className={styles.optionsLink}>
          <Icon iconName="search" />
        </a>
      </li>
    </ul>
  );
}