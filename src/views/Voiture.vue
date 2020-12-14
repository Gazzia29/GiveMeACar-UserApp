<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<BackButton label="Détail réservation"></BackButton>
			<div class="cont" v-if="car">
				<div class="image" v-bind:style="{backgroundImage: 'url(' + car.img + ')'}"></div>
				<div class="content">
					<div class="voitureName">{{ car.name }}</div>
					
					
				</div>
	
			<div class="bloc2">
		
			<div class="blocTitle">Loué le</div>
			<div class="blocItems">
				<Item>18 novembre 2020 à 15H</Item>	
			</div>
<div class="blocTitle">Durée</div>
			<div class="blocItems">
				<Item>4 heures</Item>	
			</div>
			<div  class="blocTitle">Échanges avec mon agence</div>
			<div class="conteneur">
				
				<Avatar class="avatar"></Avatar>
				<div class="blocItems">
				<Item>Agence de Nantes</Item>	
			</div>
			<div class="blocTitle">0634556677</div>

</div>
</div>
</div>

			
		</ion-content>
	</ion-page>
</template>
<script>
	import {IonPage, IonContent} from "@ionic/vue";
	import BackButton from "@/components/BackButton.vue";
	import {cars} from "@/data.ts";
import Avatar from "@/components/Avatar.vue";

	export default {
		name: "Voiture",
		props: ["id"],
		components: {
			IonContent,
			IonPage,
			BackButton,
			Avatar,
		
		},
		methods: {},
		data() {
			return {
				cars,
				car: cars.find((c) => c.id == this.id),
				agences: [],
			};
		},
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
	.bloc2 {
			background-color: #f1f1fa;
		
	}
	.blocTitle {

		color: #91919F;
		font-size: 12px;
	}
	.blocItems {
		color: #161719;
		font-size: 14px;
	}
	.conteneur {
		background: #F1F1FA;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
padding: 15px 8px;

position: absolute;
width: 325px;
height: 74px;
left: 25px;
top: 572px;

	}
	.avatar {


position: static;
width: 44px;
height: 44px;
left: 0px;
top: 0px;

flex: none;
order: 0;
flex-grow: 0;
margin: 14px 0px;
	}
</style>
