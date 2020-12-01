<template>
	<div class="cont">
		<div class="icon" :class="dateIsShort ? 'red' : ''">
			<img src="../assets/time.svg" />
		</div>
		<div class="text">
			<div class="title">{{ title }}</div>
			<div class="data">{{ data }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TimeIndicator",
		props: ["title", "data", "dateIsShort"],
		data() {
			return {};
		},
	};
</script>

<style scoped>
	.cont {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}
	.icon {
		background-color: #f1f1fa;
		border-radius: 10px;
		padding: 7.5px;
		flex: 0 0 auto;
		height: 40px;
		width: 40px;
	}
	.icon.red {
		background-color: red;
	}
	.text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-weight: normal;
	}
	.title {
		color: #91919f;
	}
</style>
