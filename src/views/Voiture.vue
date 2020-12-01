<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<BackButton label="Détail réservation"></BackButton>
			<div class="cont" v-if="car">
				<div class="image" v-bind:style="{backgroundImage: 'url(' + car.img + ')'}"></div>
				<div class="content">
					<div class="voitureName">{{ car.name }}</div>
				</div>
			</div>
		</ion-content>
	</ion-page>
</template>
<script>
	import {IonPage, IonContent} from "@ionic/vue";
	import BackButton from "@/components/BackButton.vue";
	import {cars} from "@/cars.ts";

	// function transformToJson(response) {
	// 	if (response.ok) {
	// 		return response.json();
	// 	}

	// 	throw Error("Content not loaded");
	// }

	export default {
		name: "Voiture",
		props: ["id"],
		components: {
			IonContent,
			IonPage,
			BackButton,
		},
		methods: {
			// fillList: function(json) {
			// 	console.log("json :>> ", json);
			// 	json
			// 		.filter((p) => p.name != null)
			// 		.forEach((p) => {
			// 			this.agences.push(p);
			// 		});
			// },
		},
		data() {
			return {
				cars,
				car: cars.find((c) => c.id == this.id),
				agences: [],
			};
		},
		// mounted() {
		// 	fetch("http://localhost:8080/")
		// 		.then(transformToJson)
		// 		.then(this.fillList);
		// },
		unmounted() {
			console.log("bye bye 😀");
		},
	};
</script>

<style scoped>
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
	.content {
		padding: 20px;
	}
	.voitureName {
		color: white;
		font-size: 27px;
		font-weight: bold;
		font-family: "Mukta", sans-serif;
	}
</style>
