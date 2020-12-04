<template>
	<input type="text" :placeholder="texte" />
</template>

<script>
	export default {
		name: "Champ",
		props: ["texte"],
	};
</script>

<style scoped>
	.inscription {
		background-color: greyBox;
		border-radius: 10px;
	}
</style>
