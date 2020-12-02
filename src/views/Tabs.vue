<template>
	<ion-page>
		<ion-tabs>
			<ion-tab-bar slot="bottom">
				<ion-tab-button
					tab="home"
					href="/home"
					:class="selectedTab == 'home' ? 'active' : ''"
					v-on:click="selectedTab = 'home'"
				>
					<ion-icon :icon="home" />
				</ion-tab-button>
				<ion-tab-button
					tab="recherche"
					href="/recherche"
					:class="selectedTab == 'recherche' ? 'active' : ''"
					v-on:click="selectedTab = 'recherche'"
				>
					<ion-icon :icon="search" />
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-page>
</template>

<script lang="ts">
	import {IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage} from "@ionic/vue";
	import {home, search} from "ionicons/icons";

	let selectedTab: any;
	console.log("selectedTab :>> ", selectedTab);

	export default {
		name: "Tabs",
		components: {IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage},
		methods: {
			log: function() {
				console.log(selectedTab);
			},
		},
		setup() {
			return {
				home,
				search,
				selectedTab: selectedTab,
			};
		},
	};
</script>

<style scoped>
	.active {
		background-color: red;
	}
</style>
