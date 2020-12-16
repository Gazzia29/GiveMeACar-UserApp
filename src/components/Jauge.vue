<template>
	<div class="jauge">
		<div class="jaugeProgress" v-bind:style="{width: pourcentage + '%'}"></div>
	</div>
</template>

<script>
	export default {
		name: "Jauge",
		props: ["pourcentage"],
	};
</script>

<style scoped>
	.jauge {
		height: 10px;
		width: 100%;
		background-color: grey;
		position: relative;
		border-radius: 5px;
		overflow: hidden;
	}
	.jaugeProgress {
		height: 100%;
		background: linear-gradient(to right, rgb(135, 22, 50), rgb(250, 0, 62));
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
