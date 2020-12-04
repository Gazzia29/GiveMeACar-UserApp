<template>
	<div class="item">
		<div class="texte">{{ texte }}</div>
		<img src="../assets/arrowRight.svg" alt="" />
	</div>
</template>

<script>
	import {useRouter} from "vue-router";
	export default {
		name: "CompteMenuItem",
		props: ["texte"],
		setup() {
			const router = useRouter();
			return {
				router,
			};
		},
	};
</script>

<style scoped>
	.item {
		display: flex;
		justify-content: space-between;
		cursor: pointer;
	}

	.texte {
		font-size: 16px;
		color: #161719;
	}
</style>
