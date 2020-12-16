<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<div class="pageVoiture" v-if="car">
				<BackButton class="fullWidth" label="Détail réservation"></BackButton>
				<div class="image" v-bind:style="{backgroundImage: 'url(' + car.img + ')'}"></div>
				<div class="infosVoiture">
					<div class="voitureName">{{ car.name }}</div>
					<div class="badges">
						<Badge texte="diesel"></Badge>
						<Badge texte="4 places"></Badge>
					</div>
				</div>
				<div class="detail">
					<DetailReservationPassee v-if="!isEnCours(car)"></DetailReservationPassee>
					<DetailReservationEnCours v-if="isEnCours(car)"></DetailReservationEnCours>
				</div>
			</div>
		</ion-content>
	</ion-page>
</template>
<script>
	import {IonPage, IonContent} from "@ionic/vue";
	import BackButton from "@/components/BackButton.vue";

	import DetailReservationPassee from "@/components/DetailReservationPassee.vue";
	import DetailReservationEnCours from "@/components/DetailReservationEnCours.vue";
	import {cars} from "@/data.ts";
	import Badge from "@/components/Badge.vue";
	export default {
		name: "Reservation",
		props: ["id"],
		components: {
			IonContent,
			IonPage,
			BackButton,
			Badge,
			DetailReservationPassee,
			DetailReservationEnCours,
		},
		methods: {
			isEnCours: (car) => {
				return car.startDate && !car.realEndDate;
			},
		},
		data() {
			return {
				cars,
				car: cars.find((c) => c.id == this.id),
			};
		},
		unmounted() {
			console.log("bye bye 😀");
		},
	};
</script>

<style scoped>
	.pageContent {
		--offset-bottom: 0px !important;
		overflow: auto;
	}
	.pageVoiture {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	.fullWidth {
		width: 100%;
	}
	.image {
		width: 100%;
		height: 34vh;
		position: relative;
		overflow: hidden;
		background-color: white;
		background-size: cover;
		background-position: center;
	}
	.image img {
		width: 100%;
	}
	.infosVoiture {
		padding: 20px;
		width: 100%;
	}
	.voitureName {
		color: white;
		font-size: 27px;
		font-weight: bold;
		font-family: "Mukta", sans-serif;
	}
	.detail {
		padding: 20px;
		background-color: white;
		width: 100%;
		flex: 1 1 auto;
		box-sizing: border-box;
		border-radius: 30px 30px 0 0;
	}

	.telephone {
		color: #91919f;
		font-size: 14px;
	}

	.badges {
		display: flex;
		gap: 15px;
		text-transform: capitalize;
		font-size: 12px;
		font-weight: 500;
	}
</style>
