<template>
	<ion-page>
		<ion-content :fullscreen="true" class="pageContent">
			<div class="observations">
				<div class="bloc">
					<div class="avez-vous">Avez-vous des observations concernant le véhicule?</div>
					<div class="type">
						<IonItem color="white">
							<IonLabel>Type d'observation</IonLabel>
							<IonSelect multiple="true" :interface-options="customBox" color="white" cancel-text="Annuler" ok-text="Ok !">
								<IonSelectOption value="Défaillance technique">Défaillance technique</IonSelectOption>
								<IonSelectOption value="Propreté">Propreté</IonSelectOption>
								<IonSelectOption value="Accident">Accident</IonSelectOption>
								<IonSelectOption value="Impact bris de glace">Impact bris de glace</IonSelectOption>
								<IonSelectOption value="Impact carrosserie">Impact carrosserie</IonSelectOption>
								<IonSelectOption value="Portes bloquées">Portes bloquées</IonSelectOption>
								<IonSelectOption value="Autres">Autres</IonSelectOption>
							</IonSelect>
                        </IonItem>
						<Champ texte="Observations"></Champ>
					</div>
                    <div class="buttonWrapper">
						<TextBouton couleur="violet" class="boutonADroite" route='/finreservation/facture'>Suivant</TextBouton>
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
		setup() {
			const customBox = {
				cssClass: 'customBox'
			};
			return {
				customBox
			}
		}
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

<style>
	.alert-wrapper.ion-overlay-wrapper {
		background: white !important;
	}
	.alert-checkbox-icon.sc-ion-alert-ios{
		background-color:white;
	}
	[aria-checked="true"].sc-ion-alert-ios .alert-checkbox-icon.sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{
		border-color:white;
	}
</style>