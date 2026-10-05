<script lang="ts">
	import PrisResultDoc from './PrisResultDoc.svelte';

	const DEMO_RESULT = {
		min: 1560000,
		max: 2184000,
		snap: {
			grund: 'vandret',
			areal: '120',
			rum: '4',
			vinduer: '5',
			terrassedøre: '2',
			extVægge: 'Mur',
			tag: 'Tegl',
			intVægge: 'Gips',
			gulv: 'Trægulv',
			lofter: 'Gips',
			vådrum: 'Toilet/bad'
		}
	};
</script>

<PrisResultDoc result={DEMO_RESULT} onReset={null} />
