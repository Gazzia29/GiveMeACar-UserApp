import {createRouter, createWebHistory} from "@ionic/vue-router";
import {RouteRecordRaw} from "vue-router";
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
				name: "plein",
				path: "plein",
				component: Plein,
			},
			{
				name:"contact/FAQ",
				path:"contact/FAQ",
				component: FAQ,
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
