<template>
	<ion-page>
		<!-- <ion-header> -->
		<WelcomeBack></WelcomeBack>
		<!-- </ion-header> -->
		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Home</ion-title>
				</ion-toolbar>
			</ion-header>
			<div class="greyBox">
				<IonButton
					color="secondary"
					class="button"
					@click="
						() => {
							router.push('/tabs/recherche');
						}
					"
					><IonIcon :icon="search"></IonIcon>Trouver un véhicule</IonButton
				>
				<List label="Réservations passées" class="list">
					<Card>Fiat 130 Berlina <strong>13 janvier 2006</strong></Card>
				</List>
			</div>
			<!-- content -->
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
	import {useRouter} from "vue-router";
	import {
		IonPage,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonButton,
		IonIcon,
	} from "@ionic/vue";
	import WelcomeBack from "@/components/WelcomeBack.vue";
	import List from "@/components/List.vue";
	import Card from "@/components/Card.vue";

	import {search} from "ionicons/icons";

	export default {
		name: "Accueil",
		components: {
			IonHeader,
			IonToolbar,
			IonTitle,
			IonContent,
			IonPage,
			IonButton,
			IonIcon,
			WelcomeBack,
			List,
			Card,
		},
		setup() {
			const router = useRouter();
			return {
				router,
				search,
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
	.list {
		margin-top: 15px;
	}
</style>
