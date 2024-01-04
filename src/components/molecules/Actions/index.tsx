import cl from 'classnames';
import { ComponentProps } from '@components/types';

import Icon from '../../atoms/Icon';

import styles from './index.module.scss';

interface ActionsProps extends ComponentProps {
  activeIndex: number;
  amount: number;
}

export default function Actions({
  activeIndex,
  amount,
  className
}: ActionsProps) {
  return (
    <div className={cl(styles.actions, className)}>
      <Icon
        size="small"
        iconName="arrow-left"
        className={styles.logoIcon}
      />

      <Icon
        size="small"
        iconName="arrow-right"
        className={styles.logoIcon}
      />  
    </div>
  );
}