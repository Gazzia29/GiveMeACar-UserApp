
<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="facture">
                <div class="titre">Votre Facture</div>
                    <div class="formulaire">
						<Champ label="Montant estimé" valeur="77,00€"></Champ>
						<Champ label="Supplément dépassement" valeur="0,00€"></Champ>
						<Champ label="Déduction carburant" valeur="12,00€"></Champ>	   
                        <Champ label="Total à payer" valeur="65,00€"></Champ>
                     </div>
                        <Bouton couleur="violet">Terminé</Bouton>
            </div>
    
        </ion-content>
    </ion-page>
</template>

<script>
    import {IonPage, IonContent} from "@ionic/vue";
	import Bouton from "@/components/Bouton.vue";
	import ChampsLabelFacture from "@/components/ChampsLabelFacture.vue";
    export default {
        name: "facture",
        props: [],
        components: {
            Bouton,
            Champ: ChampsLabelFacture, 
            IonPage, 
            IonContent,
	},
	};

</script>

<style scoped>   
.facture {
   background-color: #f1f1fa;
padding: 10px;
		display: flex;
		flex-direction: column;
		height: calc(100% + 1px);
		align-items: center;
        justify-content:space-around;
}
.titre {
   font-weight: bold;
		font-size: 19px;
		color: #161719;
		margin-top:20px;
	
		
}
.formulaire {
    gap:30px;
    display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px;
}
</style>
