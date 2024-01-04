import cl from 'classnames';
import { ComponentProps } from '@components/types';

import Icon from '../../atoms/Icon';

import styles from './index.module.scss';

interface ActionsProps extends ComponentProps {
  activeIndex: number;
  amount: number;
  onClickNext: () => void;
  onClickPrev: () => void;
}

export default function Actions({
  onClickNext,
  onClickPrev,
  activeIndex,
  amount,
  className
}: ActionsProps) {
  return (
    <div className={cl(styles.actions, className)}>
      <button
        className={styles.actionsButton}
        onClick={onClickPrev}
      >
        <Icon
          size="small"
          iconName="arrow-left"
          className={styles.actionsIcon}
        />
      </button>
      <span className={styles.actionsLine}>
        {('0' + activeIndex).slice(-2)}
        <span className={styles.actionsSlide}><span
          style={{
            width: `${1 / amount * 100}%`,
            left: `${(activeIndex - 1)/amount * 100}%`
          }}
        /></span>
        {('0' + amount).slice(-2)}
      </span>
      <button
        className={styles.actionsButton}
        onClick={onClickNext}
      >
        <Icon
          size="small"
          iconName="arrow-right"
          className={styles.actionsIcon}
        />  
      </button>
    </div>
  );
}