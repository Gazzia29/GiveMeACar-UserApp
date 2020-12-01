<template>
	<Card class="currentLocationCard" :id="location.id" type="location">
		<div class="locationTop">
			<CardText>
				Réservation en cours
				<strong>{{ location.name }}</strong>
			</CardText>
			<CardImage :path="location.img"></CardImage>
		</div>
		<div class="locationBottom">
			<TimeIndicator title="Durée prévue" data="1h35"></TimeIndicator>
			<TimeIndicator title="Temps restant" data="1h23"></TimeIndicator>
		</div>
	</Card>
</template>

<script>
	import Card from "@/components/Card.vue";
	import CardText from "@/components/CardText.vue";
	import CardImage from "@/components/CardImage.vue";
	import TimeIndicator from "@/components/TimeIndicator.vue";

	export default {
		name: "LocationCard",
		props: ["location"],
		components: {TimeIndicator, Card, CardText, CardImage},
		data() {
			return {};
		},
	};
</script>

<style scoped>
	.currentLocationCard {
		margin-top: -80px;
	}
	.locationTop {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
	}
	.locationBottom {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
