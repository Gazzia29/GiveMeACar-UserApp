<template>
	<div class="badge">{{ texte }}</div>
</template>

<script>
	export default {
		name: "badge",
		props: ["texte"],
	};
</script>

<style scoped>
	.badge {
		background: #e6e6ff;
		border-radius: 30px;
		color: #7d54f2;
		padding: 3px 10px;
	}
</style>
