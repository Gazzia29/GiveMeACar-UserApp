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
					<svg
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-home"
					>
						<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
						<polyline points="9 22 9 12 15 12 15 22"></polyline>
					</svg>
				</ion-tab-button>
				<ion-tab-button
					tab="compte"
					href="/compte"
					class="selectedTab == 'compte' ? 'active' : ''"
					v-on:click="selectedTab = 'compte'"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-user"
					>
						<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
						<circle cx="12" cy="7" r="4"></circle>
					</svg>
				</ion-tab-button>
				<ion-tab-button
					tab="recherche"
					href="/recherche"
					:class="selectedTab == 'recherche' ? 'active' : ''"
					v-on:click="selectedTab = 'recherche'"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-search"
					>
						<circle cx="11" cy="11" r="8"></circle>
						<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
					</svg>
				</ion-tab-button>
				<ion-tab-button
					tab="contact"
					href="/contact"
					:class="selectedTab == 'contact' ? 'active' : ''"
					v-on:click="selectedTab = 'contact'"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-help-circle"
					>
						<circle cx="12" cy="12" r="10"></circle>
						<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
						<line x1="12" y1="17" x2="12.01" y2="17"></line>
					</svg>
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-page>
</template>

<script lang="ts">
	import {IonTabBar, IonTabButton, IonTabs, IonPage} from "@ionic/vue";

	let selectedTab: any;
	console.log("selectedTab :>> ", selectedTab);

	export default {
		name: "Tabs",
		components: {IonTabs, IonTabBar, IonTabButton, IonPage},
		methods: {
			log: function() {
				console.log(selectedTab);
			},
		},
		setup() {
			return {
				selectedTab: selectedTab,
			};
		},
	};
</script>

<style scoped>
	svg {
		width: 20px;
	}
	.tab-selected svg {
		stroke: #7d54f2;
	}
	.icon {
		width: 20px;
	}
</style>
