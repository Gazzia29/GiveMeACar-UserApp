<template>
	<div class="list">
		<div class="label">{{ label }}</div>
		<div class="listItems">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		props: ["label"],
		data() {
			return {};
		},
	};
</script>

<style scoped>
	.list {
		width: 100%;
	}
	.label {
		font-weight: bold;
		font-size: 14px;
		color: #161719;
		margin-bottom: 7px;
	}
	.listItems {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
