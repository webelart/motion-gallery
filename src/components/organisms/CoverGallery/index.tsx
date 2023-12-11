import { ComponentChildren } from 'preact';
import cl from 'classnames';

import { ComponentProps } from '../../types';

import './index.css';

interface CoverGallerySlide {
  id: number;
  imgSrc: string;
  content: ComponentChildren;
}

interface CoverGalleryProps extends ComponentProps {
  slides: CoverGallerySlide[];
  activeIndex?: number;
}

export function CoverGallery({
  slides,
  activeIndex = 0,
  className,
}: CoverGalleryProps) {
	return (
    <div
      className={cl(className, 'coverGallery')}
    >
      {slides.map(({ id, imgSrc, content }, index) => (
        <div
          key={id}
          className={cl(
            'coverGallery-slide',
            activeIndex === index && 'coverGallery-slideActive',
          )}
          style={{
            backgroundImage: `url(${imgSrc})`,
          }}
        >
          {content}
        </div>
      ))}
    </div>
	);
}