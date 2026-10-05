export type Segment =
	| { type: 'text'; value: string }
	| { type: 'link'; href: string; label: string; external: boolean };

/**
 * Parses [label](url) markdown-style links inside a paragraph string into
 * renderable segments — internal links become plain anchors handled by the
 * SvelteKit router, external links open in a new tab.
 */
export function parseParagraph(text: string): Segment[] {
	const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
	const parts: Segment[] = [];
	let lastIndex = 0;
	let match;

	while ((match = linkRegex.exec(text)) !== null) {
		const [fullMatch, label, url] = match;
		const matchIndex = match.index;

		if (matchIndex > lastIndex) {
			parts.push({ type: 'text', value: text.substring(lastIndex, matchIndex) });
		}

		const isExternal = url.startsWith('http');
		parts.push({ type: 'link', href: url, label, external: isExternal });

		lastIndex = linkRegex.lastIndex;
	}

	if (lastIndex < text.length) {
		parts.push({ type: 'text', value: text.substring(lastIndex) });
	}

	return parts.length > 0 ? parts : [{ type: 'text', value: text }];
}

export const categoryLinks: Record<string, { label: string; href: string }[]> = {
	villa: [
		{ label: 'Læs om Yderskov som arkitekt i Aalborg', href: '/arkitekt-aalborg' },
		{ label: 'Se vores villaprojekter med billeder', href: '/villaer' },
		{ label: 'Se om- og tilbygninger med billeder', href: '/tilbygninger' }
	],
	sommerhus: [
		{ label: 'Se vores sommerhusprojekter med billeder', href: '/sommerhuse' },
		{ label: 'Beregn prisen på dit sommerhus', href: '/prisberegner' }
	],
	arkitekt: [
		{ label: 'Læs om Yderskov som arkitekt i Aalborg', href: '/arkitekt-aalborg' },
		{ label: 'Beregn prisen på dit projekt', href: '/prisberegner' },
		{ label: 'Se vores priser', href: '/priser' }
	],
	grund: [
		{ label: 'Læs om Yderskov som arkitekt i Aalborg', href: '/arkitekt-aalborg' },
		{ label: 'Se vores villaprojekter med billeder', href: '/villaer' },
		{ label: 'Se vores sommerhusprojekter med billeder', href: '/sommerhuse' }
	],
	boligdetalje: [
		{ label: 'Læs om Yderskov som arkitekt i Aalborg', href: '/arkitekt-aalborg' },
		{ label: 'Se vores villaprojekter med billeder', href: '/villaer' },
		{ label: 'Se om- og tilbygninger med billeder', href: '/tilbygninger' }
	]
};
