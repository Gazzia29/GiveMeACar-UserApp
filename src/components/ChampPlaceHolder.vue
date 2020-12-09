<template>
	<input type="text" :placeholder="texte" />
</template>

<script>
	export default {
		name: "ChampPlaceHolder",
		props: ["texte"],
	};
</script>

<style scoped>
	.inscription {
		background-color: greyBox;
		border-radius: 10px;
		flex-direction: column;
	}
</style>
