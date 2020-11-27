<template>
	<div class="card" :class="{hasImg: img && img.path}">
		<div class="content">
			<slot></slot>
		</div>
		<img v-if="img && img.path" src="{{img.path}}" alt="{{img.alt || ''}}" />
	</div>
</template>

<script>
	export default {
		name: "Card",
		props: ["img"],
		data() {
			return {};
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
	}
	.card.hasImg {
		justify-content: space-around;
	}
	.content {
		display: flex;
		flex-direction: column;
	}
</style>
