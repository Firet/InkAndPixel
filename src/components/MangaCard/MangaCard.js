'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './MangaCard.css';

export default function MangaCard({ mangaId, name, src, alt }) {
	const router = useRouter();

	return (
		<div
			className="manga-card-container"
			onClick={() => router.push(`/mangas/${mangaId}`)}
		>
			<p className="manga-main-title">{name}</p>
			<Image
				src={src}
				alt={alt}
				className="manga-cover"
				unoptimized
				width={176}
				height={224}
			/>
			<button className="readme-button">Read</button>
		</div>
	);
}
