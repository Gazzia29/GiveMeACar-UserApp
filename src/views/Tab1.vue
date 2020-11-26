<template>
	<ion-page>
		<!-- <ion-header> -->
		<WelcomeBack></WelcomeBack>
		<!-- </ion-header> -->
		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Tab 1</ion-title>
				</ion-toolbar>
			</ion-header>

			<!-- content -->
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
	import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from "@ionic/vue";
	import WelcomeBack from "@/components/WelcomeBack.vue";

	export default {
		name: "Tab1",
		components: {WelcomeBack, IonHeader, IonToolbar, IonTitle, IonContent, IonPage},
	};
</script>

<style scoped></style>
