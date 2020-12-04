<template>
	<div class="cont" @click="() => router.push('/home')">
		<img src="../assets/back.svg" alt="" />
		<div class="label">{{ label }}</div>
	</div>
</template>

<script>
	import {useRouter} from "vue-router";
	export default {
		name: "BackButton",
		props: ["label"],
		setup() {
			const router = useRouter();
			return {
				router,
			};
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
