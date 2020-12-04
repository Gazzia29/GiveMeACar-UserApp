<template>
	<div class="cont">
		<Avatar></Avatar>
		<div class="bloc">
			<ChampEdit label="Nom" valeur="Jean-Marc"></ChampEdit>
			<ChampEdit label="Email" valeur="jpfoucault@gmail.com"></ChampEdit>
			<ChampEdit label="Téléphone" valeur="0679655"></ChampEdit>
		</div>
		<div class="adresse">
			<ChampEdit label="Numéro et rue" valeur="67 rue du marché"></ChampEdit>

			<ChampEdit label="Code Postal" valeur="44000"></ChampEdit>
			<ChampEdit label="Ville" valeur="Nantes"></ChampEdit>
		</div>
		<div class="permis">
			<ChampEdit label="Numéro de permis" valeur="*****98"></ChampEdit>

			<ChampEdit label="Date d'expiration" valeur="24/**/****"></ChampEdit>
			<ChampEdit label="Date de délivrance" valeur="24/**/****"></ChampEdit>
		</div>
	</div>
</template>

<script>
	import ChampEdit from "@/components/ChampEdit.vue";
	import Avatar from "@/components/Avatar.vue";
	export default {
		name: "ChampEdit",
		props: ["value"],
		components: {
			Avatar,
			ChampEdit,
		},
	};
</script>

<style scoped></style>
