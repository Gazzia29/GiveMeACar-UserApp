<template>
	<div class="text"><slot></slot></div>
</template>

<script>
	export default {
		name: "CardText",
	};
</script>

<style scoped>
	.text {
		display: flex;
		flex-direction: column;
		font-weight: 400;
	}
</style>
