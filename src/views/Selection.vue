<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<div class="head">
				<Bouton couleur="blanc" icone="filter">
					filtres
				</Bouton>
			</div>
			<div class="map">
				<Selection></Selection>
			</div>
			<div class="greyBox">
				<div class="bloc">
					<div class="choix">
						<div class="photo">
							<img src="../assets/C4.svg" alt="" />
						</div>
						<div class="voiture">
							<div class="Modele">Citroën C4 Picasso</div>
						</div>
						<div class="attributs">
							<div class="portes">5 portes</div>
							<div class="Boîte de vitesse">Manuelle</div>
							<div class="Carburant">Essence</div>
							<div class="Catégorie">Familiale</div>
							<div class="Prix">30€ tarif de base</div>
						</div>
						<Bouton couleur="vert" route="/authentication">Se connecter</Bouton>
					</div>
				</div>
			</div>
		</ion-content>
	</ion-page>
</template>

<script>
	import {IonPage, IonContent} from "@ionic/vue";
	import Selection from "@/components/Selection.vue";
	import Bouton from "@/components/Bouton.vue";
	import {useRouter} from "vue-router";
	export default {
		name: "Recherche",
		components: {
			IonContent,
			IonPage,
			Bouton,
			Selection,
		},
		setup() {
			return {
				router: useRouter(),
			};
		},
	};
</script>

<style scoped>
	.head {
		padding: 10px 20px;
	}
	.greyBox {
		z-index: 1;
		position: relative;
		background-color: #f1f1fa;
		height: 70%;
		border-top-left-radius: 30px;
		border-top-right-radius: 30px;
		padding: 20px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		margin-top: -25px;
	}
	.list {
		margin-top: 15px;
	}
	.map {
		display: flex;
		flex-direction: column;
		height: 50%;
	}
	.bouton {
		display: flex;
		flex-direction: column;
		margin-top: 15px;
	}
	.greybox .bloc .choix {
		background-color: #ececf5;
		border-top-left-radius: 30px;
		border-top-right-radius: 30px;
		padding: 20px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.greybox .bloc .choix .photo {
		display: flex;
		gap: 10px;
		flex-direction: row;
		align-items: center;
		border-radius: 30px;
	}

	.greybox .bloc .choix .voiture {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.Modele {
		font-weight: 600;
		font-size: 14px;
		line-height: 90%;
	}
</style>
