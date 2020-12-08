<template>
	<div class="inscription">
		<Champ texte="email"></Champ>
		<Champ texte="mot de passe"></Champ>
		<Champ texte="date de naissance"></Champ>
		<Champ texte="code postal"></Champ>
		<Champ texte="téléphone"></Champ>
		<Champ texte="num de permis"></Champ>
	</div>
</template>
<script>
	import ChampPlaceHolder from "@/components/ChampPlaceHolder.vue";
	export default {
		name: "Inscription",
		components: {
			Champ: ChampPlaceHolder,
		},
	};
</script>

<style scoped></style>
