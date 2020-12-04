<template>
	<div class="compteMenu">
		<div class="bloc">
			<div class="blocTitle">Paramètres du compte</div>
			<div class="blocItems">
				<Item texte="Editer mon profil"></Item>
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
				<Item texte="Mes FAQ"></Item>
			</div>
		</div>
	</div>
</template>

<script>
	import CompteMenuItem from "@/components/CompteMenuItem.vue";
	export default {
		name: "CompteMenu",
		components: {
			Item: CompteMenuItem,
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
