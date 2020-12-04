<template>
	<div class="champEdit">
		<div class="etiquette">{{ label }}</div>
		<input type="text" :value="valeur" />
	</div>
</template>

<script>
	export default {
		name: "ChampEdit",
		props: ["valeur", "label"],
	};
</script>

<style scoped>
	.labels {
		font: size 16px;
		color: #34313a;
	}
</style>
