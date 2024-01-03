import cl from 'classnames';
import { ComponentProps } from '@components/types';

import styles from './index.module.scss'

const navigation = [
  { id: 1, url: '/', title: 'Home' },
  { id: 2, url: '/', title: 'Stories' },
  { id: 3, url: '/', title: 'Works' },
  { id: 4, url: '/', title: 'Pages' },
  { id: 5, url: '/', title: 'Contact' },
  { id: 6, url: '/', title: 'Shop' }
]

export default function Navigation({
  className
}: ComponentProps) {
  return (
    <ul className={cl(className, styles.navigation)}>
      {navigation.map(({id, url, title}) => (
        <li key={id} className={styles.navigationItem}>
          <a href={url} className={styles.navigationLink}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}