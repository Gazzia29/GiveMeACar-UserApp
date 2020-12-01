<template>
	<div class="cont">
		<img src="../assets/back.svg" alt="" />
		<div class="label">{{ label }}</div>
	</div>
</template>

<script>
	export default {
		name: "BackButton",
		props: ["label"],
		data() {
			return {};
		},
	};
</script>

<style scoped>
	.cont {
		display: flex;
		gap: 20px;
		align-items: center;
		color: white;
		padding: 10px;
	}
</style>
