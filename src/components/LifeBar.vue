<template>
	<div class="comp">
		<div class="texte">{{ vie.actuel }}/{{ vie.max }}</div>
		<div class="lifeBar">
			<div class="lifeBarJauge" v-bind:style="{width: (vie.actuel / vie.max) * 100 + '%'}"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		props: ["vie"],
	};
</script>

<style scoped>
	.comp {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.lifeBar {
		height: 10px;
		width: 100%;
		background-color: grey;
		position: relative;
		border-radius: 5px;
		overflow: hidden;
	}
	.lifeBarJauge {
		height: 100%;
		background: linear-gradient(to right, rgb(135, 22, 50), rgb(250, 0, 62));
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
