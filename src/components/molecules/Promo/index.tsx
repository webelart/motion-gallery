import cl from 'classnames';
import { ComponentProps } from '@components/types';

import styles from './index.module.scss';

interface PromoProps extends ComponentProps {
  title,
  category,
  text
}

export default function Promo({
  title,
  category,
  text,
  className
}: PromoProps) {
  return (
    <div className={cl(styles.promo, className)}>
      <h2>{category}</h2>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}