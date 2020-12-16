<template>
	<div class="cont">
		<div class="info">
			<div class="titre">Loué le</div>
			<div class="valeur">18 novembre 2020 à 15H</div>
		</div>
		<div class="info">
			<div class="titre">Durée</div>
			<div class="valeur">4 heures</div>
		</div>
		<div class="info">
			<div class="titre">Échanges avec mon agence</div>
			<div class="agence">
				<img src="../assets/equipeNantes.svg" alt="" />
				<div class="texte">
					<div class="nomAgence">Agence de Nantes</div>
					<div class="telephone">0634556677</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		props: [],
	};
</script>

<style scoped>
	.cont {
		width: 100%;
		gap: 7px;
		display: flex;
		flex-direction: column;
	}
	.info .titre {
		color: #91919f;
		font-size: 12px;
	}

	.info .valeur {
		color: #161719;
		font-size: 14px;
	}
	.agence {
		background: #f1f1fa;
		border-radius: 20px;
		display: flex;
		align-items: center;
		padding: 5px 12px;
		gap: 10px;
		box-sizing: border-box;
	}
	.agence .texte {
		display: flex;
		flex-direction: column;
	}
	.agence .avatar {
		position: static;
		width: 44px;
		height: 44px;
		left: 0px;
		top: 0px;

		flex: none;
		order: 0;
		flex-grow: 0;
	}
</style>
