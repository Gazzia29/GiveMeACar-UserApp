<template>
	<ion-page>
		<ion-content :fullscreen="true" class="pageContent">
			<div class="inscription">
				<div class="titre">INSCRIPTION</div>
				<div class="bloc1">
					<Champ texte="Email" icone="enveloppe"></Champ>
					<Champ texte="Mot de passe" icone="cadenas"></Champ>
					<Champ texte="Confirmer mot de passe" icone="cadenas"></Champ>
				</div>
				<div class="bloc2">
					<Champ texte="Date de naissance"></Champ>
					<Champ texte="Adresse"></Champ>
					<Champ texte="Ville"></Champ>
					<Champ texte="Code postal"></Champ>
					<Champ texte="Téléphone"></Champ>
					<Champ texte="Numéro de permis"></Champ>
					<Champ texte="Transmettre mon numéro de permis"></Champ>
					<Champ texte="Transmettre ma pièce d'identité"></Champ>
				</div>
				<div class="methodePaiement">
					<div class="label">Méthode de paiement</div>
					<img class="iconePayment" src="../assets/icons/paiement.svg" alt=""/>
				</div>
				<Bouton couleur="vert">Envoyer</Bouton>
			</div>
		</ion-content>
	</ion-page>
</template>
<script>
	import ChampPlaceHolder from "@/components/ChampPlaceHolder.vue";
	import Bouton from "@/components/Bouton.vue";

	export default {
		name: "Inscription",
		components: {
			Champ: ChampPlaceHolder,
			Bouton,
		},
	}
</script>

<style scoped>
.pageContent {
		--offset-bottom: 0px !important;
		overflow: auto;
	}
	.inscription {
		background-color: #f1f1fa;
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	.bloc1 {
		gap: 7px;
		width: 100%;
		margin-bottom: 15px;
		display: flex;
		flex-direction: column;	
	}
	.bloc2 {
		gap: 7px;
		width: 100%;
		margin-bottom: 15px;
		display: flex;
		flex-direction: column;	
	}
	.methodePaiement {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	</style>
