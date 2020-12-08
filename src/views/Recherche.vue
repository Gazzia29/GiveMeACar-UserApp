<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<div class="head">
				<IonButton color="white" class="button"
					><IonIcon :icon="filter" class="buttonIcon"></IonIcon>filtres</IonButton
				>
			</div>
			<div class="greyBox">
				<List label="Véhicules disponibles" class="list">
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
	import {IonPage, IonContent, IonButton, IonIcon} from "@ionic/vue";
	import {filter} from "ionicons/icons";
	import {cars} from "@/data.ts";

	import List from "@/components/List.vue";
	import Card from "@/components/Card.vue";
	import CardText from "@/components/CardText.vue";
	import CardImage from "@/components/CardImage.vue";

	export default {
		name: "Recherche",
		components: {
			IonContent,
			IonPage,
			IonButton,
			IonIcon,
			List,
			Card,
			CardText,
			CardImage,
		},
		setup() {
			return {filter};
		},
		data() {
			return {
				cars: cars.filter((c) => !c.realEndDate && !c.startDate),
			};
		},
	};
</script>

<style scoped>
	.head {
		padding: 10px 20px;
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
		/* justify-content: center; */
		align-items: center;
	}
	.button {
		--box-shadow: "none";
		width: 100%;
		box-sizing: content-box;
		height: 45px;
		border-radius: 10px;
		overflow: hidden;
	}
	.buttonIcon {
		margin-right: 10px;
	}
	.list {
		margin-top: 15px;
	}
</style>
