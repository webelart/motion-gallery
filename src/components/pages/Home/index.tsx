import Promo from '../../molecules/Promo';
import CoverGallery from '../../organisms/CoverGallery';

export default function Home() {
	return (
		<CoverGallery
			slides={[
				{
					id: 1,
					backgroundImageUrl: '/gallery/parot.webp',
					content: (
						<Promo
							title="Design"
							category="Our vision"
							text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
						/>
					)
				},
				{
					id: 2,
					backgroundImageUrl: '/gallery/fox.webp',
					content: (
						<Promo
							title="Motion"
							category="Our vision"
							text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
						/>
					)
				},
				{
					id: 3,
					backgroundImageUrl: '/gallery/squirrel.webp',
					content: (
						<Promo
							title="Engine"
							category="Our vision"
							text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
						/>
					)
				},
			]}
		/>
	);
}
