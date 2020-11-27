<template>
	<ion-page>
		<ion-tabs>
			<ion-tab-bar slot="bottom">
				<ion-tab-button tab="home" href="/tabs/home">
					<ion-icon :icon="home" />
				</ion-tab-button>

				<ion-tab-button tab="recherche" href="/tabs/recherche">
					<ion-icon :icon="search" />
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-page>
</template>

<script lang="ts">
	import {IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage} from "@ionic/vue";
	import {home, search} from "ionicons/icons";

	export default {
		name: "Tabs",
		components: {IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage},
		setup() {
			return {
				home,
				search,
			};
		},
	};
</script>
