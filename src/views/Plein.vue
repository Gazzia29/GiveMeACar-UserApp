<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<div class="plein">
				<div class="bloc">
					<div class="penser">Avez-vous pensé à faire le plein?</div>
					<div class="somme">
						<Champ texte="Somme"></Champ>
					</div>
					<Bouton couleur="violet">Envoyer un justificatif</Bouton>
				</div>
				<div class="buttonWrapper">
					<TextBouton couleur="violet">Suivant</TextBouton>
				</div>
			</div>
		</ion-content>
	</ion-page>
</template>

<script>
	import TextBouton from "@/components/TextBouton.vue";
	import Bouton from "@/components/Bouton.vue";

	import {IonPage, IonContent} from "@ionic/vue";
	import ChampPlaceHolder from "@/components/ChampPlaceHolder.vue";
	export default {
		name: "plein",
		components: {
			IonPage,
			IonContent,
			Bouton,
			TextBouton,
			Champ: ChampPlaceHolder,
		},
	};
</script>

<style scoped>
	.plein {
		background-color: #f1f1fa;
		padding: 20px;
		display: flex;
		flex-direction: column;
		height: calc(100% + 1px);
		justify-content: space-between;
		align-items: flex-end;
	}

	.bloc {
		width: 100%;
	}

	.penser {
		font-weight: bold;
		font-size: 19px;
		color: #161719;
		margin-bottom: 7px;
	}

	.buttonWrapper {
		display: flex;
		gap: 60px;
		justify-content: right;
		align-items: bottom;
		text-align: right;
	}
	.somme {
		margin-bottom: 40px;
	}
</style>
