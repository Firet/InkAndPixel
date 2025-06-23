'use client';

import { usePathname } from 'next/navigation';
import mangas from '@/app/constants/manga';
import Image from 'next/image';
import './MangaDetails.css';
import PageDisplayer from '@/components/PageDisplayer/PageDisplayer';

function MangaDetails() {
	const pathname = usePathname();
	const mangaId = pathname.split('/')[2];
	const manga = mangas.find((manga) => manga.id === parseInt(mangaId));

	if (!mangaId || isNaN(mangaId) || !manga) {
		return <div>We could not find this manga</div>;
	}

	return (
		<div className="manga-details-container">
			<h1>{manga.name}</h1>
			<Image
				src={manga.cover}
				alt={manga.alt}
				className="manga-cover"
				unoptimized
				width={300}
				height={500}
			/>
			<p>{manga.description}</p>

			<PageDisplayer />
		</div>
	);
}

export default MangaDetails;
