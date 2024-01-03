import { ComponentProps } from '@components/types';
import { h, ComponentChildren } from 'preact';
import cl from 'classnames';

import styles from './index.module.scss';

interface ContainerProps extends ComponentProps {
  type?: 'header' | 'container';
  children: ComponentChildren;
}

const Container = ({
	children,
  type,
  className,
}: ContainerProps) => (
  <div className={cl(styles[type], className)}>
    {children}
  </div>
);

export default Container;