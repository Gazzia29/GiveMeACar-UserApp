<template>
	<div class="ChampsLabelFacture">
		<div class="etiquette">{{ label }}</div>
		<input type="text" :value="valeur" />
	</div>
</template>

<script>
	export default {
		name: "ChampsLabelFacture",
		props: ["valeur", "label"],
	};
</script>

<style scoped>
	.etiquette {
		font-size: 14px;
		color: #34313A;
		line-height: 17px;
		font-weight: 600;
		gap:10px;
	}
	input {
		background-color: white;
		border: none;
		border-radius: 9px;
		box-sizing: border-box;
		padding: 10px 21px;
		width: 100%;
		color: #7D54F2;
		
	}
</style>
