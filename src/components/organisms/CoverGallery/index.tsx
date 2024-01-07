import { ComponentChildren } from 'preact';
import { useState } from 'preact/hooks'
import cl from 'classnames';

import Container from '../../atoms/Container';
import Actions from '../../molecules/Actions';

import styles from './index.module.scss';

interface CoverGallerySlide {
  id: number;
  backgroundImageUrl: string;
  content: ComponentChildren;
}

interface CoverGalleryProps {
  slides: CoverGallerySlide[];
  startIndex?: number;
}

export default function CoverGallery({
  slides,
  startIndex = 0,
}: CoverGalleryProps) {
  if (slides.length > 10) {
    throw new Error("CoverGallery can't show over 10 slides");
  }

  const [ activeIndex, setActiveIndex ] = useState(startIndex);

	return (
    <main className={styles.gallery}>
      <Container className={styles.galleryContainer}>
        <div className={styles.content}>
          {slides.map(({id, content}, index) => (
            <div
              key={id}
              className={cl(index === activeIndex && styles.contentActive)}
            >
              {content}
            </div>
          ))}
        </div>
        <Actions
          activeIndex={activeIndex}
          amount={slides.length}
          onClickNext={() => 
            setActiveIndex(
              Math.min(activeIndex + 1, slides.length - 1)
            )
          }
          onClickPrev={() => {setActiveIndex(
            Math.max(activeIndex - 1, 0)
          )}}
        />
      </Container>
      <div className={styles.background}>
        {slides.map(({id, backgroundImageUrl}, index) => (
          <div
            key={id}
            className={
              cl(index === activeIndex && styles.backgroundActive)
            }
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
            }}
          />
        ))}
      </div>
    </main>
	);
}