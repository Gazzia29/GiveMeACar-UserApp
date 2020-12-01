<template>
	<div class="card" @click="() => router.push('/voiture/' + id)">
		<div class="content" :class="type && type == 'location' ? 'location' : ''">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import {useRouter} from "vue-router";
	export default {
		name: "Card",
		props: ["id", "type"],
		data() {
			return {};
		},
		setup() {
			const router = useRouter();
			return {
				router,
			};
		},
	};
</script>

<style scoped>
	.card {
		background-color: white;
		width: 100%;
		padding: 15px;
		display: flex;
		justify-content: flex-start;
		font-size: 14px;
		border-radius: 10px;
		cursor: pointer;
	}
	.content {
		display: flex;
		justify-content: space-between;
		width: 100%;
		align-items: center;
	}
	.content.location {
		flex-direction: column;
		justify-content: center;
	}
</style>
