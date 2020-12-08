<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<div class="contact">
				<div class="bloc">
					<div class="questions">Des questions?</div>
					<div class="faq">
						<Item texte="Avez-vous pensé à consulter notre F.A.Q?"></Item>
					</div>
					<div class="sinon">Sinon contactez nous :</div>
				</div>

				<div class="bloc2">
					<img src="../assets/equipeNantes.svg" alt="" />
					<div>
						<div class="">
							<div class="Agence">Agence de Nantes</div>
							<div class="rue">3 rue Boileau</div>
							<div class="ville">44000 NANTES</div>
							<div class="telephone">02 40 56 90 78</div>
						</div>
					</div>
				</div>
				<div class="mail">
					<img src="../assets/icons/mail.svg" alt="" />
					<a href="mailto: contact.agencenantes@givemeacar.fr">
						contact.agencenantes@givemeacar.fr</a
					>
				</div>

				<div class="map">
					<img src="../assets/mapAgenceNantes.svg" alt="" />
				</div>

				<IonButton class="button" color="secondary">Appeler un conseiller</IonButton>
			</div>
		</ion-content>
	</ion-page>
</template>

<script>
	import Bouton from "@/components/Bouton.vue";
	import {IonPage, IonContent} from "@ionic/vue";
	import CompteMenuItem from "@/components/CompteMenuItem.vue";
	export default {
		name: "Contact",
		components: {
			IonPage,
			IonContent,
			IonButton,
			Item: CompteMenuItem,
		},
	};
</script>

<style scoped>
	.contact {
		padding-top: 20px;
		background-color: #f1f1fa;
		padding: 32px 15px;
		height: calc(100% + 1px);
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.bloc {
		display: flex;
		flex-direction: column;
	}
	.bloc2 {
		display: flex;
		justify-content: space-between;
	}

	.mail {
		color: #7d54f2;
		gap: 10px;
	}
	.button {
		--box-shadow: "none";
		width: 100%;
		box-sizing: content-box;
		height: 45px;
		border-radius: 10px;
		overflow: hidden;
	}
</style>
