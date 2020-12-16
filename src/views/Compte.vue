<template>
	<ion-page>
		<ion-content :fullscreen="true" class="pageContent">
			<div class="compte">
				<BackButton label="Compte"></BackButton>
				<div class="avatarCont">
					<Avatar></Avatar>
				</div>
				<div class="email">jpfourcault@gmail.com</div>
				<CompteMenu></CompteMenu>
			</div>
		</ion-content>
	</ion-page>
</template>

<script>
	import {IonPage, IonContent} from "@ionic/vue";
	import CompteMenu from "@/components/CompteMenu.vue";
	import BackButton from "@/components/BackButton.vue";
	import Avatar from "@/components/Avatar.vue";
	export default {
		name: "Compte",
		components: {
			IonContent,
			IonPage,
			BackButton,
			CompteMenu,
			Avatar,
		},
	};
</script>

<style scoped>
	.pageContent {
		--offset-bottom: 1px !important;
		overflow: auto;
	}
	.compte {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.avatarCont {
		display: flex;
		justify-content: center;
	}
	.email {
		color: white;
		width: 100%;
		text-align: center;
		margin: 66px 0 20px 0;
	}
</style>
