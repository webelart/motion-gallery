import { ComponentChildren } from 'preact';
import cl from 'classnames';

import Container from '../../atoms/Container';
import Promo from '../../molecules/Promo';

import { ComponentProps } from '@components/types';

import styles from './index.module.scss';

interface CoverGallerySlide {
  id: number;
  imgSrc: string;
  content: ComponentChildren;
}

interface CoverGalleryProps extends ComponentProps {
  // slides: CoverGallerySlide[];
  activeIndex?: number;
}

export default function CoverGallery({
  className,
}: CoverGalleryProps) {
	return (
    <div
      className={cl(className, styles.gallery)}
      style={{
        backgroundImage: `url(/gallery/parot.webp)`,
      }}
    >
      <Container className={styles.galleryContainer}>
        <Promo />
      </Container>
    </div>
	);
}