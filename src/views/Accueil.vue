<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<WelcomeBack></WelcomeBack>
			<div class="greyBox" :class="location ? 'hasLocation' : ''">
				<Bouton v-if="!location" couleur="vert" route="/recherche" icone="search">
					Trouver un véhicule
				</Bouton>
				<LocationCard v-if="location" :location="location"></LocationCard>
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
		height: calc(100% - 60px);
		margin-top: 60px;
	}

	.list {
		margin-top: 15px;
	}
</style>
