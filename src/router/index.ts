import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Tabs from "../views/Tabs.vue";
import Accueil from "@/views/Accueil.vue";
import Recherche from "@/views/Recherche.vue";
import Voiture from "@/views/Voiture.vue";
import Compte from "@/views/Compte.vue";
import Contact from "@/views/Contact.vue";
import ModifierCompteClient from "@/views/ModifierCompteClient.vue";
import Inscription from "@/views/Inscription.vue";
import Monstre from "@/views/Monstre.vue";
import Plein from "@/views/Plein.vue";
import FAQ from "@/views/FAQ.vue";
import Observations from "@/views/Observations.vue";
import PageDeGarde from "@/views/PageDeGarde.vue";
import Selection from "@/views/Selection.vue";
import Facture from "@/views/Facture.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Tabs,
    children: [
      {
        path: "",
        redirect: "/home",
      },

      {
        name: "home",
        path: "home",
        component: Accueil,
      },

      {
        name: "recherche",
        path: "recherche",
        component: Recherche,
      },

      {
        name: "voiture",
        path: "voiture",
        redirect: "/voiture/1",
      },

      {
        path: "voiture/:id",
        component: Voiture,
        props: true,
      },

      {
        name: "compte",
        path: "compte",
        component: Compte,
      },

      {
        name: "contact",
        path: "contact",
        component: Contact,
      },
      {
        name: "compte/edit",
        path: "compte/edit",
        component: ModifierCompteClient,
      },

      {
        name: "inscription",
        path: "inscription",
        component: Inscription,
      },
      {
        name: "animaltotem",
        path: "animaltotem",
        component: Monstre,
      },

      {
        path: "finreservation",
        redirect: "/finreservation/plein",
      },

      {
        name: "finreservation/plein",
        path: "finreservation/plein",
        component: Plein,
      },

      {
        name: "contact/FAQ",
        path: "contact/FAQ",
        component: FAQ,
      },
      {
        name: "finreservation/observations",
        path: "finreservation/observations",
        component: Observations,
      },

      {
        name: "PageDeGarde",
        path: "PageDeGarde",
        component: PageDeGarde,
      },

      {
        name: "Selection",
        path: "Selection",
        component: Selection,
      },
      {
        name: "facture",
        path: "facture",
        component: Facture,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
