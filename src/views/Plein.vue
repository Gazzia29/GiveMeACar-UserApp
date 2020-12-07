<template>
    <ion-page>
		<ion-content :fullscreen="true">
            <div class="plein">
                <div class="bloc">
                    <div class="penser">Avez-vous pensé à faire le plein?</div>
                        <div class="somme">
                        <Champ texte="Somme"></Champ></div>
                        <div class="bouton"></div>
                        <IonButton class="button" color="primary">Transmettre un justificatif</IonButton>    
                        </div>
                </div>
        </ion-content>
	</ion-page>
</template>

<script>
    import {IonPage, IonContent, IonButton} from "@ionic/vue";
    import Champ from "@/components/Champ.vue";
    export default {
        name: "plein",
        components: {
            IonPage,
            IonContent,
            IonButton,
            Champ,
        },
        };
    
</script>

<style scoped>
.plein {
        margin-top : 30px;
		background-color: #fcfcff;
		padding: 20px;
		border-radius: 30px 30px 0 0;
		display: flex;
		flex-direction: column;
        margin-bottom : 30px;
		
	}
    
.penser {
    font-weight: bold;
		font-size: 19px;
		color: #161719;
		margin-bottom: 7px;
    }
.button {
		--box-shadow: "none";
		width: 100%;
		box-sizing: content-box;
		height: 45px;
		border-radius: 10px;
		overflow: hidden;
	}

.somme {
margin-bottom : 40px;
    }
    </style>
