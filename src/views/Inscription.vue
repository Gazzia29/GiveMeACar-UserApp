<template>
	<div class="inscription">
		<Champ texte="email"></Champ>
		<Champ texte="mot de passe"></Champ>
		<Champ texte="lol"></Champ>
		<Champ texte="chocolaid"></Champ>
		<Champ texte="zefze"></Champ>
	</div>
</template>

<script>
	import Champ from "@/components/Champ.vue";
	export default {
		name: "Inscription",
		components: {
			Champ,
		},
	};
</script>

<style scoped></style>
