<template>
	<div class="groupe">
		<div class="titre">{{ titre }}</div>
		<div class="bloc_blanc">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		props: ["titre"],
	};
</script>

<style scoped>
	.groupe {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.titre {
		font-weight: bold;
		font-size: 12px;

		line-height: 17px;
		color: #ffffff;
		text-transform: uppercase;
	}

	.bloc_blanc {
		background: rgba(243, 240, 255, 0.16);
		border-radius: 5px;
		padding: 14px 21px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
</style>
