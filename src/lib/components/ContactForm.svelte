<script lang="ts">
	// Same form as the hero inline form (Next version re-exported HeroForm).
	import HeroForm from './HeroForm.svelte';

	interface Props {
		id?: string;
	}

	let { id = 'heroContactForm' }: Props = $props();
</script>

<HeroForm {id} />
