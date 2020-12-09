<template>
	<IonButton :class="couleur ? couleur : ''" :router-link="route ? route : null" fill="clear">
		<slot></slot>
	</IonButton>
</template>

<script>
	import {IonButton} from "@ionic/vue";
	export default {
		name: "TextBouton",
		props: ["route", "couleur"],
		components: {IonButton},
	};
</script>

<style scoped>
	.button {
		--box-shadow: "none";
		width: 100%;
		box-sizing: content-box;
		height: 1rem;
		border-radius: 10px;
		overflow: hidden;
		text-transform: uppercase;
		letter-spacing: 0.13em;
		font-weight: 800;
		font-size: 14px;
	}
	.violet {
		color: #7d54f2;
	}
	.vert {
		color: #49cf86;
	}
</style>
