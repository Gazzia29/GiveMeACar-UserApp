<template>
	<div class="compteMenu">
		<div class="bloc">
			<div class="blocTitle">Paramètres du compte</div>
			<div class="blocItems">
				<Item texte="Editer mon profil" @click="() => router.push('/compte/edit')"></Item>
				<Item texte="Notifications mail"></Item>
				<Item texte="Rappels de location"></Item>
				<Item texte="Informations de paiement"></Item>
				<Item texte="Mes documents"></Item>
			</div>
		</div>
		<div class="bloc">
			<div class="blocTitle">Support</div>
			<div class="blocItems">
				<Item texte="A propos"></Item>
				<Item texte="Mes FAQ" @click="() => router.push('/contact/FAQ')"></Item>
			</div>
		</div>
	</div>
</template>

<script>
	import {useRouter} from "vue-router";
	import CompteMenuItem from "@/components/CompteMenuItem.vue";
	export default {
		name: "CompteMenu",
		components: {
			Item: CompteMenuItem,
		},
		setup() {
			return {
				router: useRouter(),
			};
		},
	};
</script>

<style scoped>
	.compteMenu {
		background-color: #fcfcff;
		padding: 32px 15px;
		border-radius: 30px 30px 0 0;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.blocTitle {
		color: #91919f;
		font-size: 12px;
	}
	.blocItems {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
