<template>
	<ion-page>
		<ion-content :fullscreen="true">
        <div class="FAQ">
				<div class="bloc">
					<div class="Foire">FOIRE AUX QUESTIONS :</div>
						<div>
							<input type="radio" id="clé" name="drone" value="clé"
							checked><label for="clé"> Où trouver la clé?</label>
						</div>

						<div>
							<input type="radio" id="annuler" name="drone" value="annuler">
							<label for="annuler"> Comment annuler ma réservation?</label>
							</div>

						<div>
							<input type="radio" id="prolongation" name="drone" value="prolongation">
							<label for="prolongation"> Puis-je prolonger ma réservation?</label>
						</div>

						<div>
							<input type="radio" id="autreVehicule" name="drone" value="autreVehicule">
							<label for="autreVehicule"> Puis-je réserver un autre véhicule?</label>
						</div>

						<div>
							<input type="radio" id="avance" name="drone" value="avance">
							<label for="avance"> Puis-je réserver un véhicule à l'avance?</label>
						</div>

						<div>
							<input type="radio" id="autres" name="drone" value="autres">
							<label for="autres"> Autres</label>
						</div>
					</div>
				
		</div>
		</ion-content>
	</ion-page>
</template>

<script>
import {IonPage, IonContent} from "@ionic/vue";
    export default {
        name: "FAQ",
        components: {
			IonPage,
			IonContent,
		},
		
	}
</script>
<style scoped>
	.FAQ {
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

.Foire {
	color: #7D54F2;
}
	input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 50%;
  width: 16px;
  height: 16px;

  border: 2px solid #999;
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  top: 4px;
}

input:checked {
  border: 6px solid #7d54f2;
}
    </style>
