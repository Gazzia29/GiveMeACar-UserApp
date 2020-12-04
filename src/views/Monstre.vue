<template>
	<div class="cont">
		<div class="box">
			<div class="identity">
				<img src="../assets/monstre.jpg" alt="" />
				<div class="nom">{{ monstre.nom }} lvl.{{ monstre.niveau }}</div>
			</div>
			<LifeBar :vie="monstre.vie"></LifeBar>
			<LifeBar :vie="monstre2.vie"></LifeBar>
			<LifeBar :vie="{max: 10, actuel: 2}"></LifeBar>
		</div>
	</div>
</template>

<script>
	import LifeBar from "@/components/LifeBar.vue";
	const monstre = {
		nom: "Troufion",
		niveau: 5,
		vie: {
			actuel: 75,
			max: 100,
		},
	};
	const monstre2 = {
		nom: "Troufion",
		niveau: 5,
		vie: {
			actuel: 10,
			max: 100,
		},
	};

	export default {
		name: "",
		props: [],
		components: {LifeBar},
		data: () => {
			return {monstre, monstre2};
		},
	};
</script>

<style scoped>
	.cont {
		background-color: rgb(239, 239, 239);
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.box {
		box-sizing: border-box;
		width: 80%;
		padding: 20px;
		background-color: white;
		box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028),
			0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042),
			0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07);
		display: flex;
		flex-direction: column;
	}
	.identity {
		display: flex;
		width: 100%;
		justify-content: flex-between;
		align-items: center;
		gap: 10px;
	}
	.identity img {
		width: 100px;
		border-radius: 6px;
	}
</style>
