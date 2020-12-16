<template>
	<ion-page>
		<ion-content :fullscreen="true" class="pageContent">
			<WelcomeBack class="marginVertical"></WelcomeBack>
			<div class="greyBox" :class="location ? 'hasLocation' : ''">
				<!-- Si y'a pas de réservation -->
				<Bouton v-if="!location" couleur="vert" route="/map" icone="search">
					Trouver un véhicule
				</Bouton>

				<!-- Si y'en a une-->
				<LocationCard v-if="location" :location="location"></LocationCard>

				<!-- Tout le temps, la liste des rés° passées -->
				<List label="Réservations passées" class="list">
					<Card v-for="car in cars" :key="car" :id="car.id">
						<CardText>
							{{ car.name }}
							<strong>{{ car.date }}</strong>
						</CardText>
						<CardImage :path="car.img"></CardImage>
					</Card>
				</List>
			</div>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
	import {IonPage, IonContent} from "@ionic/vue";
	import WelcomeBack from "@/components/WelcomeBack.vue";
	import List from "@/components/List.vue";
	import Card from "@/components/Card.vue";
	import CardText from "@/components/CardText.vue";
	import CardImage from "@/components/CardImage.vue";
	import LocationCard from "@/components/LocationCard.vue";
	import Bouton from "@/components/Bouton.vue";

	import {cars} from "@/data.ts";

	export default {
		name: "Accueil",
		components: {
			IonContent,
			WelcomeBack,
			IonPage,
			Bouton,
			List,
			Card,
			CardText,
			CardImage,
			LocationCard,
		},
		data() {
			return {
				cars: cars.filter((c) => c.realEndDate),
				location: cars.find((c) => c.startDate && !c.realEndDate),
			};
		},
	};
</script>

<style scoped>
	.pageContent {
		--offset-bottom: 1px !important;
		overflow: auto;
	}

	.marginVertical {
		margin: 10px 0;
	}
	.greyBox {
		background-color: #ececf5;
		height: 100%;
		border-top-left-radius: 30px;
		border-top-right-radius: 30px;
		padding: 20px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.greyBox.hasLocation {
		height: calc(100% - 70px);
		margin-top: 70px;
	}

	.list {
		margin-top: 15px;
	}
</style>
