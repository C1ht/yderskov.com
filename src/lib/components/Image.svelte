<script lang="ts">
	import { isOptimizable, variantSrc, srcSet } from '$lib/image-loader';

	interface Props {
		src: string;
		alt: string;
		fill?: boolean;
		width?: number;
		height?: number;
		sizes?: string;
		style?: string;
		priority?: boolean;
		class?: string;
		loading?: 'eager' | 'lazy';
	}

	let {
		src,
		alt,
		fill = false,
		width,
		height,
		sizes,
		style = '',
		priority = false,
		class: cls = '',
		loading
	}: Props = $props();

	const optimizable = isOptimizable(src);
	const resolvedSrc = $derived(optimizable ? variantSrc(src, 1200) : src);
	const resolvedSrcSet = $derived(srcSet(src));
	const loadingAttr = $derived(loading ?? (priority ? 'eager' : 'lazy'));
	const fillStyle = fill
		? "position:absolute;height:100%;width:100%;inset:0px;object-fit:cover;"
		: '';
</script>

<img
	src={resolvedSrc}
	srcset={resolvedSrcSet}
	{sizes}
	{alt}
	loading={loadingAttr}
	fetchpriority={priority ? 'high' : undefined}
	decoding={priority ? 'sync' : 'async'}
	class={cls}
	style="{fillStyle}{style}"
	width={fill ? undefined : width}
	height={fill ? undefined : height}
/>
