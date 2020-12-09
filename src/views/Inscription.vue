<template>
	<div class="inscription">
		<Champ texte="email"></Champ>
		<Champ texte="mot de passe"></Champ>
		<Champ texte="date de naissance"></Champ>
		<Champ texte="code postal"></Champ>
		<Champ texte="téléphone"></Champ>
		<Champ texte="numéro de permis"></Champ>
		<Champ texte="transmettre mon numéro de permis"></Champ>
		<Champ texte="Transmettre ma pièce d'identité"></Champ>
		<Champ texte="Méthodes de paiement"></Champ>

		<Bouton couleur="vert">Envoyer</Bouton>
	</div>
</template>
<script>
	import ChampPlaceHolder from "@/components/ChampPlaceHolder.vue";
	import Bouton from "@/components/Bouton.vue";

	export default {
		name: "Inscription",
		components: {
			Champ: ChampPlaceHolder,
			Bouton,
		},
	};
</script>

<style scoped></style>
