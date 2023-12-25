import { ComponentChildren } from 'preact';
import cl from 'classnames';

import { Header } from '../../molecules/Header';
import { ComponentProps } from '../../types';

import './index.css';

interface CoverGallerySlide {
  id: number;
  imgSrc: string;
  content: ComponentChildren;
}

interface CoverGalleryProps extends ComponentProps {
  // slides: CoverGallerySlide[];
  activeIndex?: number;
}

export function CoverGallery({
  className,
}: CoverGalleryProps) {
	return (
    <div
      className={cl(className, 'coverGallery')}
      style={{
        backgroundImage: `url(./public/gallery/parot.webp)`,
      }}
    >
      <Header />
      <div>

      </div>
    </div>
	);
}