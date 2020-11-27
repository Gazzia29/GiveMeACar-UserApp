<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Recherche</ion-title>
				</ion-toolbar>
			</ion-header>
			<div class="head">
				<IonButton color="white" class="button"
					><IonIcon :icon="filter" class="buttonIcon"></IonIcon>filtres (2 actifs)</IonButton
				>
			</div>
			<div class="greyBox">
				<List label="Véhicules disponibles" class="list">
					<Card>Fiat 130 Berlina <strong>13 janvier 2006</strong></Card>
				</List>
			</div>
			<!-- content -->
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
	import {
		IonPage,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonButton,
		IonIcon,
	} from "@ionic/vue";
	import {filter} from "ionicons/icons";

	import List from "@/components/List.vue";
	import Card from "@/components/Card.vue";

	export default {
		name: "Recherche",
		components: {
			IonHeader,
			IonToolbar,
			IonTitle,
			IonContent,
			IonPage,
			IonButton,
			IonIcon,
			List,
			Card,
		},
		setup() {
			return {filter};
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
