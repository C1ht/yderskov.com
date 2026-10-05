<script lang="ts">
	import { page } from '$app/state';

	type Child = { href: string; label: string };
	type NavItem =
		| { href: string; label: string; children?: undefined }
		| { href?: undefined; label: string; children: Child[] };

	const navItems: NavItem[] = [
		{ href: '/', label: 'Hjem' },
		{
			label: 'Projekter',
			children: [
				{ href: '/villaer', label: 'Villaer' },
				{ href: '/sommerhuse', label: 'Sommerhuse' },
				{ href: '/tilbygninger', label: 'Om- og tilbygninger' },
				{ href: '/lejligheder', label: 'Lejligheder' },
				{ href: '/special', label: 'Special' },
				{ href: '/erhverv', label: 'Erhverv' },
				{ href: '/inspiration', label: 'Inspiration' }
			]
		},
		{
			label: 'Priser',
			children: [
				{ href: '/priser', label: 'Se priser' },
				{ href: '/prisberegner', label: 'Prisberegner' }
			]
		},
		{ href: '/blog', label: 'Blog' },
		{
			label: 'Om os',
			children: [
				{ href: '/om', label: 'Om tegnestuen' },
				{ href: '/arkitekt-aalborg', label: 'Arkitekt Aalborg' },
				{ href: '/arkitekt-sjaelland', label: 'Arkitekt Sjælland' }
			]
		},
		{ href: '/faq', label: 'FAQ' }
	];

	let open = $state(false);
	let activeDropdown = $state<string | null>(null);
	let dropdownLeft = $state(0);
	let innerRef: HTMLDivElement | null = $state(null);

	const pathname = $derived(page.url.pathname);

	$effect(() => {
		document.body.classList.toggle('menu-open', open);
		return () => document.body.classList.remove('menu-open');
	});

	// Close menus whenever the route changes
	$effect(() => {
		page.url.pathname;
		open = false;
		activeDropdown = null;
	});

	$effect(() => {
		if (!activeDropdown) return;
		const handler = (e: MouseEvent) => {
			if (innerRef && !innerRef.contains(e.target as Node)) {
				activeDropdown = null;
			}
		};
		document.addEventListener('mousedown', handler);
		return () => document.removeEventListener('mousedown', handler);
	});

	function isGroupActive(item: NavItem): boolean {
		return item.children?.some((c) => pathname === c.href) ?? false;
	}

	const activeItem = $derived(navItems.find((i) => i.label === activeDropdown));

	function toggle(label: string, e: MouseEvent) {
		if (activeDropdown === label) {
			activeDropdown = null;
			return;
		}
		const inner = innerRef;
		const btn = e.currentTarget as HTMLButtonElement;
		if (inner && btn) {
			const innerRect = inner.getBoundingClientRect();
			const btnRect = btn.getBoundingClientRect();
			dropdownLeft = btnRect.left - innerRect.left + btnRect.width / 2;
		}
		activeDropdown = label;
	}

	function handleLinkClick(e: MouseEvent, href?: string) {
		if (href === '/' && pathname === '/') {
			e.preventDefault();
			window.scrollTo(0, 0);
		}
		open = false;
	}
</script>

<nav>
	<div class="nav-inner" bind:this={innerRef}>
		<a href="/" class="nav-logo" aria-label="Yderskov Arkitekter — forside" onclick={(e) => handleLinkClick(e, '/')}>
			<img src="/images/logofiles/SVG/Arkitect 5icon.svg" alt="Arkitekttegnestuen Yderskov logo" width="30" height="30" />
		</a>

		<ul class="nav-links">
			{#each navItems as item (item.label)}
				{#if item.children}
					<li class="nav-has-dropdown">
						<button
							class={`nav-dropdown-trigger${isGroupActive(item) ? ' nav-active' : ''}${activeDropdown === item.label ? ' nav-dropdown-open' : ''}`}
							onclick={(e) => toggle(item.label, e)}
						>
							{item.label}
							<svg class="nav-arrow" width="9" height="7" viewBox="0 0 9 7" aria-hidden="true">
								<path d="M0.5 1L4.5 5.5L8.5 1" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</button>
					</li>
				{:else}
					<li>
						<a
							href={item.href}
							class={pathname === item.href ? 'nav-active' : ''}
							onclick={(e) => handleLinkClick(e, item.href)}
						>
							{item.label}
						</a>
					</li>
				{/if}
			{/each}
		</ul>

		<div class="nav-actions">
			<a href="tel:29723427" class="nav-phone" aria-label="Ring 29 72 34 27">
				<span class="nav-phone-icon" aria-hidden="true">
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.93.37 1.84.72 2.71a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.37-1.29a2 2 0 0 1 2.11-.45c.87.35 1.78.59 2.71.72A2 2 0 0 1 22 16.92z"/></svg>
				</span>
				29 72 34 27
			</a>

			<a href="/kontakt#heroContactForm" class="nav-book-btn">Book gratis møde</a>
		</div>

		<button class={`hamburger${open ? ' active' : ''}`} onclick={() => (open = !open)} aria-label="Menu">
			<span /><span /><span />
		</button>

		{#if activeDropdown && activeItem?.children}
			<ul class="nav-dropdown" style={`left: ${dropdownLeft}px`}>
				{#each activeItem.children as c (c.href)}
					<li>
						<a
							href={c.href}
							class={pathname === c.href ? 'nav-active' : ''}
							onclick={(e) => handleLinkClick(e, c.href)}
						>
							{c.label}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>

	{#if open}
		<div class="nav-mobile-menu">
			<a href="/kontakt#heroContactForm" class="nav-mobile-book" onclick={(e) => handleLinkClick(e, '/kontakt#heroContactForm')}>
				Book gratis møde
			</a>
			<a href="/kontakt" class="nav-mobile-link" style="font-weight: 500; margin-top: 0.5rem; margin-bottom: 1rem;" onclick={(e) => handleLinkClick(e, '/kontakt')}>
				Kontakt
			</a>
			{#each navItems as item (item.label)}
				{#if item.children}
					<div class="nav-mobile-group">
						<span class="nav-mobile-group-label">{item.label}</span>
						{#each item.children.filter((c) => c.href !== '/arkitekt-aalborg' && c.href !== '/arkitekt-sjaelland') as c (c.href)}
							<a
								href={c.href}
								class={`nav-mobile-link${pathname === c.href ? ' nav-active' : ''}`}
								onclick={(e) => handleLinkClick(e, c.href)}
							>
								{c.label}
							</a>
						{/each}
					</div>
				{:else}
					<a
						href={item.href}
						class={`nav-mobile-link${pathname === item.href ? ' nav-active' : ''}`}
						onclick={(e) => handleLinkClick(e, item.href)}
					>
						{item.label}
					</a>
				{/if}
			{/each}
		</div>
	{/if}
</nav>
