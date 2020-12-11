<template>
	<div></div>
	<ion-thumbnail class="rounded image">
		<ion-img class="rounded" :src="path"></ion-img>
	</ion-thumbnail>
</template>

<script>
	import {IonThumbnail, IonImg} from "@ionic/vue";
	export default {
		name: "CardImage",
		props: ["path"],
		components: [IonThumbnail, IonImg],
	};
</script>

<style scoped>
	.rounded {
		border-radius: 15px;
	}
</style>
