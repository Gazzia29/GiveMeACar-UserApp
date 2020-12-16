<template>
	<ion-page>
		<ion-content :fullscreen="true" class="pageContent">
			<div class="page">
				<div class="logoCont">
					<Logo></Logo>
				</div>
				<div class="entreprise">GiveMeACar</div>
				<div class="slogan">Allez partout, d'où vous voulez</div>
				<div class="carte">
					<Bouton couleur="blanc" route="/map">Carte des véhicules</Bouton>
				</div>
				<div class="greyBox">
					<div class="bloc1">
						<Champ texte="Email" icone="enveloppe"></Champ>
						<Champ texte="Mot de passe" icone="cadenas"></Champ>
						<Bouton couleur="primary" route="/home">Connexion</Bouton>
						<Bouton couleur="vert">Connexion avec Google</Bouton>
						<Bouton couleur="vert">Connexion avec Minitel</Bouton>
					</div>
					<div class="inscription">Pas encore de compte?</div>
					<div class="buttonWrapper">
						<TextBouton couleur="violet" route="/inscription">Inscrivez-vous</TextBouton>
					</div>
				</div>
			</div>
		</ion-content>
	</ion-page>
</template>

<script>
	import {useRouter} from "vue-router";
	import ChampPlaceHolder from "@/components/ChampPlaceHolder.vue";
	import Logo from "@/components/Logo.vue";
	import Bouton from "@/components/Bouton.vue";
	import {IonPage, IonContent} from "@ionic/vue";
	import TextBouton from "@/components/TextBouton.vue";
	export default {
		name: "Authentication",
		props: [],
		components: {
			IonPage,
			IonContent,
			Logo,
			Bouton,
			Champ: ChampPlaceHolder,
			TextBouton,
		},
		setup() {
			return {
				router: useRouter(),
			};
		},
	};
</script>

<style scoped>
	.pageContent {
		--offset-bottom: 1px !important;
		overflow: auto;
	}
	.page {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: calc(100% + 1px);
	}
	.logoCont {
		margin: 10px;
		display: flex;
		justify-content: center;
	}
	.greyBox {
		margin-top: 30px;
		background-color: #f1f1fa;
		height: 100%;
		border-top-left-radius: 30px;
		border-top-right-radius: 30px;
		padding: 20px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
	.entreprise {
		font-size: 39px;
		font-weight: bold;
		color: #ececf5;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.slogan {
		color: #ececf5;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20px;
	}
	.bloc1 {
		margin-top: 20px;
		width: 100%;
		margin-bottom: 15px;
		display: flex;
		flex-direction: column;
		gap: 7px;
		justify-content: space;
	}
	.carte {
		width: 75%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 50px;
		margin-top: 20px;
	}
</style>
