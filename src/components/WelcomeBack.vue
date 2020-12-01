<template>
	<div class="flex-container">
		<ion-item lines="none">
			<ionAvatar slot="start">
				<img src="../assets/avatar.jpg" />
			</ionAvatar>
			<ion-label color="white">
				<p class="text text1">Vous êtes de retour</p>
				<p class="text text2">Visiteur</p>
			</ion-label>
		</ion-item>
	</div>
</template>

<script>
	import {IonAvatar, IonItem, IonLabel} from "@ionic/vue";

	export default {
		name: "WelcomeBack",
		components: {IonAvatar, IonItem, IonLabel},
	};
</script>

<style>
	.flex-container {
		display: flex;
		gap: 20px;
	}
	.text {
		font-weight: bold;
		line-height: 1.1rem !important;
	}
	.text1 {
		font-size: 12px !important;
	}
	.text2 {
		font-size: 14px !important;
	}
</style>
