import {createRouter, createWebHistory} from "@ionic/vue-router";
import {RouteRecordRaw} from "vue-router";
import Tabs from "../views/Tabs.vue";
import Accueil from "@/views/Accueil.vue";
// import Recherche from "@/views/Recherche.vue";
// import Voiture from "@/views/Voiture.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		component: Tabs,
		children: [
			{
				path: "/",
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
				alias: "/",
				component: () => import("@/views/Recherche.vue"),
			},
			{
				name: "voiture",
				path: "voiture",
				redirect: "/voiture/1",
			},
			{
				path: "voiture/:id",
				component: () => import("@/views/Voiture.vue"),
				props: true,
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
