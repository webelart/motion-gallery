import { ComponentChildren } from 'preact';
import cl from 'classnames';

import { ComponentProps } from '@components/types';

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

export default function CoverGallery({
  className,
}: CoverGalleryProps) {
	return (
    <div
      className={cl(className, 'coverGallery')}
      style={{
        backgroundImage: `url(/gallery/parot.webp)`,
      }}
    >
      <div>
        CoverGallery
      </div>
    </div>
	);
}