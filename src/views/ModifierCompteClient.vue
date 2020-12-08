<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<div class="cont">
				<Avatar></Avatar>
				<div class="formulaire">
					<GroupeDeChamps titre="Contact">
						<Champ label="Nom" valeur="Jean-Marc"></Champ>
						<Champ label="Email" valeur="jpfoucault@gmail.com"></Champ>
						<Champ label="Téléphone" valeur="0679655"></Champ>
					</GroupeDeChamps>

					<GroupeDeChamps titre="Adresse">
						<Champ label="Numéro et rue" valeur="67 rue du marché"></Champ>
						<Champ label="Code Postal" valeur="44000"></Champ>
						<Champ label="Ville" valeur="Nantes"></Champ>
					</GroupeDeChamps>

					<GroupeDeChamps titre="Permis">
						<Champ label="Numéro de permis" valeur="*****98"></Champ>
						<Champ label="Date d'expiration" valeur="24/**/****"></Champ>
						<Champ label="Date de délivrance" valeur="24/**/****"></Champ>
					</GroupeDeChamps>
				</div>
			</div>
		</ion-content>
	</ion-page>
</template>

<script>
	import {IonPage, IonContent} from "@ionic/vue";
	import ChampLabel from "@/components/ChampLabel.vue";
	import Avatar from "@/components/Avatar.vue";
	import GroupeDeChamps from "@/components/GroupeDeChamps.vue";
	import Bouton from "@/components/Bouton.vue";
	export default {
		name: "ChampLabel",
		components: {
			Avatar,
			Champ: ChampLabel,
			IonPage,
			IonContent,
			GroupeDeChamps,
			Bouton,
		},
	};
</script>

<style scoped></style>
