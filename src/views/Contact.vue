<template>
	<ion-page>
		<ion-content :fullscreen="true" class="pageContent">
			<div class="contact">
				<div class="bloc">
					<div class="questions">Des questions?</div>
					<div class="faq">
						<Item texte="Avez-vous consulté notre F.A.Q?" @click="() => router.push('/contact/FAQ')"></Item>
					</div>
					<div class="sinon">Sinon contactez nous :</div>
				</div>

				<div class="bloc equipe">
					<div class="infosHaut">
						<img src="../assets/equipeNantes.svg" alt="" />
						<div class="identite">
							<div class="agenceNom">Agence de Nantes</div>
							<div class="adresse">
								<div class="rue">3 rue Boileau</div>
								<div class="ville">44000 Nantes</div>
								<div class="telephone">02 40 56 90 78</div>
							</div>
						</div>
					</div>
					<div class="mail">
						<img src="../assets/icons/mail.svg" alt="" />
						<a href="mailto: contact.agencenantes@givemeacar.fr"
							>contact.agencenantes@givemeacar.fr</a
						>
					</div>
				</div>
				<img class="map" src="../assets/mapAgenceNantes.svg" alt="" />

				<Bouton couleur="vert">Appeler l'agence</Bouton>
			</div>
		</ion-content>
	</ion-page>
</template>

<script>
	import {IonPage, IonContent} from "@ionic/vue";
	import Bouton from "@/components/Bouton.vue";
	import {useRouter} from "vue-router";
	import CompteMenuItem from "@/components/CompteMenuItem.vue";
	export default {
		name: "Contact",
		components: {
			IonPage,
			IonContent,
			Bouton,
			Item: CompteMenuItem,
		},
		setup() { 
			return {
				router: useRouter(),
			}
		},
	};
</script>

<style scoped>
	.pageContent {
		--offset-bottom: 0px !important;
		overflow: auto;
	}
	.contact {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px;

		background-color: #f1f1fa;
		gap: 10px;
		/* align-items: flex-end; */
	}
	.bloc {
		display: flex;
		flex-direction: column;
		background-color: white;
		border-radius: 10px;
		padding: 17px;
		width: 100%;
	}
	.bloc.equipe {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}
	.bloc.equipe .infosHaut {
		display: flex;
		gap: 10px;
		flex-direction: row;
		align-items: center;
	}
	.bloc.equipe .infosHaut .identite {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	.agenceNom {
		font-weight: 600;
		font-size: 14px;
		line-height: 90%;
	}
	.adresse {
		font-size: 14px;
		line-height: 108.5%;
	}

	.mail {
		color: #7d54f2;
	}
	.mail a {
		margin-left: 8px;
	}
	.map {
		flex: 0 0 auto;
		width: 100%;
	}
</style>
