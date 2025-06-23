import React from 'react';
import MangaCard from '../MangaCard/MangaCard';
import mangas from '@/app/constants/manga';
import './MangaCollection.css';

export default function MangaCollection() {
	return (
		<div className="manga-collection">
			{mangas.map((manga) => (
				<MangaCard
					key={manga.id}
					mangaId={manga.id}
					name={manga.name}
					src={manga.cover}
					alt={manga.alt}
				/>
			))}
		</div>
	);
}
