import { ComponentChildren } from 'preact';
import cl from 'classnames';

import { ComponentProps } from '../types';

import './style.css';

interface CoverGallerySlide {
  id: number;
  imgSrc: string;
  content: ComponentChildren;
}

interface CoverGalleryProps extends ComponentProps {
  slides: CoverGallerySlide[];
}

export function CoverGallery({
  slides,
  className,
}: CoverGalleryProps) {
	return (
    <div className={cl(className, 'coverGallery')}>
      {slides.map(({ id, imgSrc, content }) => (
        <div
          key={id}
          className='coverGallery-slide'
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