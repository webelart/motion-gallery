import { ComponentProps } from '@components/types';
import cl from 'classnames';

import Icon from '../../atoms/Icon';

import styles from './index.module.scss';

export default function Promo({
  className
}: ComponentProps) {
  return (
    <div className={styles.promo}>
      <h2>Our vision</h2>
      <h1>Design</h1>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
    </div>
  );
}