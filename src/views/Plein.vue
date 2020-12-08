<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<div class="plein">
				<div class="bloc">
					<div class="penser">Avez-vous pensé à faire le plein?</div>
					<div class="somme">
						<Champ texte="Somme"></Champ>
					</div>
					<div class="button">
						<IonButton class="button" color="primary">Transmettre un justificatif</IonButton>
					</div>
					<div class="button2">
						<IonButton class="button2" fill="clear">Suivant</IonButton>
					</div>
				</div>
			</div>
		</ion-content>
	</ion-page>
</template>

<script>
	import {IonPage, IonContent, IonButton} from "@ionic/vue";
	import ChampPlaceHolder from "@/components/ChampPlaceHolder.vue";
	export default {
		name: "plein",
		components: {
			IonPage,
			IonContent,
			IonButton,
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
	}

	.penser {
		font-weight: bold;
		font-size: 19px;
		color: #161719;
		margin-bottom: 7px;
	}
	.button {
		--box-shadow: "none";
		width: 100%;
		box-sizing: content-box;
		height: 45px;
		border-radius: 10px;
		overflow: hidden;
	}
	.button2 {
		--box-shadow: "none";
		width: 100%;
		box-sizing: content-box;
		height: 45px;
		border-radius: 10px;
		color: #7d54f2;
		display: flex;
		gap: 60px;
		justify-content: right;
		align-items: right;
		text-align: right;
	}
	.somme {
		margin-bottom: 40px;
	}
</style>
