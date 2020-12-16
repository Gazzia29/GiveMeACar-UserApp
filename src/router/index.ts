import {createRouter, createWebHistory} from "@ionic/vue-router";
import {RouteRecordRaw} from "vue-router";
import Tabs from "../views/Tabs.vue";
import Accueil from "@/views/Accueil.vue";
import Recherche from "@/views/Recherche.vue";
import Reservation from "@/views/Reservation.vue";
import Compte from "@/views/Compte.vue";
import Contact from "@/views/Contact.vue";
import ModifierCompteClient from "@/views/ModifierCompteClient.vue";
import Inscription from "@/views/Inscription.vue";
import Monstre from "@/views/Monstre.vue";
import Plein from "@/views/Plein.vue";
import FAQ from "@/views/FAQ.vue";
import Observations from "@/views/Observations.vue";
import Authentication from "@/views/Authentication.vue";
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
				name: "map",
				path: "map",
				component: Recherche,
			},

			{
				name: "reservation",
				path: "reservation",
				redirect: "/reservation/1",
			},

			{
				path: "reservation/:id",
				component: Reservation,
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
				name: "Authentication",
				path: "authentification",
				component: Authentication,
			},
			{
				name: "Selection",
				path: "map/selection/:id",
				component: Selection,
				props: true,
			},
			{
				name: "facture",
				path: "finreservation/facture",
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
