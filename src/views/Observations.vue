<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<div class="observations">
				<div class="bloc">
					<div class="avez-vous">Avez-vous des observations concernant le véhicule?</div>
					<div class="type">
						<Champ texte="Type d'observations"></Champ>
                        <Champ texte="Autres observations"></Champ>
					</div>
                    <div class="buttonWrapper">
					<TextBouton couleur="violet">Suivant</TextBouton>
				    </div>
				</div>
				
			</div>
		</ion-content>
	</ion-page>
</template>

<script>
import ChampPlaceHolder from "@/components/ChampPlaceHolder.vue";
	import TextBouton from "@/components/TextBouton.vue";
    export default {
        name: "observations",
        props: [],
        data() {
            return {};
        },
    };
</script>

<style scoped>
.observations {
		background-color: #f1f1fa;
		padding: 20px;
		display: flex;
		flex-direction: column;
		height: calc(100% + 1px);
		justify-content: space-between;
		align-items: flex-end;
	}

	.bloc {
		width: 100%;
	}

	.avez-vous {
		font-weight: bold;
		font-size: 19px;
		color: #161719;
		margin-bottom: 7px;
	}

	.buttonWrapper {
		display: flex;
		gap: 60px;
		justify-content: right;
		align-items: bottom;
		text-align: right;
	}
	
	</style>
