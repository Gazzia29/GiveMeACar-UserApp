<template>
	<ion-page>
		<ion-content :fullscreen="true" class="pageContent">
			<div class="observations">
				<div class="bloc">
					<div class="avez-vous">Avez-vous des observations concernant le véhicule?</div>
					<div class="type">
						<IonItem color="white">
							<IonLabel>Type d'observation</IonLabel>
							<IonSelect multiple="true" color="white" cancel-text="Annuler" ok-text="Ok !">
								<IonSelectOption value="fzefz">fezfze</IonSelectOption>
								<IonSelectOption value="plaisir et volupté">plaisir et volupté</IonSelectOption>
								<IonSelectOption value="na voiture né cassée">na voiture né cassée</IonSelectOption>
							</IonSelect>
                        </IonItem>
						<Champ texte="Observations"></Champ>
					</div>
                    <div class="buttonWrapper">
						<TextBouton couleur="violet" class="boutonADroite">Suivant</TextBouton>
					</div>
				</div>
				
			</div>
		</ion-content>
	</ion-page>
</template>

<script>
import {IonSelect, IonSelectOption, IonLabel, IonItem} from "@ionic/vue"
	import ChampPlaceHolder from "@/components/ChampPlaceHolder.vue";
	import TextBouton from "@/components/TextBouton.vue";
    export default {
        name: "observations",
        components: {
			Champ: ChampPlaceHolder,
			TextBouton,
			IonSelect,
			IonSelectOption,
			IonLabel,
			IonItem
		},
    }
</script>

<style scoped>
.pageContent {
		--offset-bottom: 1px !important;
		overflow: auto;
}		
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
		gap: 7px;
		width: 100%;
		margin-bottom: 15px;
		display: flex;
		flex-direction: column;	
		
		flex-grow: 1;
	}

	.type {
		display:flex;
		gap:7px;
		flex-direction: column;
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
		align-items: flex-end;
		text-align: right;
		
		flex-grow: 1;
	}
	.boutonADroite{
		width: min-content;
	}
</style>
