<template>
	<div class="ChampLabel">
		<div class="etiquette">{{ label }}</div>
		<input type="text" :value="valeur" />
	</div>
</template>

<script>
	export default {
		name: "ChampLabel",
		props: ["valeur", "label"],
	};
</script>

<style scoped>
	.etiquette {
		font-size: 12px;
		color: white;
		line-height: 17px;
	}
	input {
		background-color: white;
		border: none;
		border-radius: 9px;
		box-sizing: border-box;
		padding: 10px 21px;
		width: 100%;
	}
</style>
