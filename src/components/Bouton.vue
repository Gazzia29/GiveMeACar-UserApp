<template>
	<IonButton v-if="route" :color="realCouleur" :router-link="route ? route : null"
		><slot></slot
	></IonButton>
	<!-- <IonButton v-if="!route"><slot></slot></IonButton> -->
</template>

<script>
	import {IonButton} from "@ionic/vue";
	export default {
		name: "Bouton",
		props: ["couleur", "texte", "route"],
		components: {IonButton},
		methods: {
			getCouleur: (c) => {
				if (c == "vert") {
					return "secondary";
				} else return "primary";
			},
		},
		data() {
			return {
				realCouleur: this.getCouleur(this.couleur),
			};
		},
	};
</script>

<style scoped>
	.button {
		--box-shadow: "none";
		width: 100%;
		box-sizing: content-box;
		height: 45px;
		border-radius: 10px;
		overflow: hidden;
	}
</style>
