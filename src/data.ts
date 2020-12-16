export const reservation: any[] = [];

export const cars: any[] = [
	{
		id: 1,
		name: "Fiat 130",
		startDate: new Date("2015-03-24T13:12:00"),
		estimatedEndDate: new Date("2015-03-24T15:12:00"),
		realEndDate: new Date("2015-03-24T15:28:00"),
		img:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Fiat_130_CH.JPG/1200px-Fiat_130_CH.JPG",
	},
	{
		id: 2,
		name: "Peugeot 306",
		startDate: new Date("2017-11-03T08:47:00"),
		estimatedEndDate: new Date("2017-11-03T09:17:00"),
		realEndDate: new Date("2017-11-03T09:17:00"),
		img:
			"https://upload.wikimedia.org/wikipedia/commons/a/a8/Peugeot_306_%28rear_left%29%2C_Denpasar.jpg",
	},
	{
		//en cours de location
		id: 3,
		name: "Renault Clio",
		startDate: new Date(),
		estimatedEndDate: new Date(),
		realEndDate: null,
		img:
			"https://img-4.linternaute.com/rp4-HkgdRmV9N9YeB0iEW3xg3nE=/1240x/smart/3ade6a5e0e414104854d3c521ec0e2bc/ccmcms-linternaute/12866343.jpg",
	},
	{
		id: 4,
		name: "C4 Picasso",
		startDate: null,
		estimatedEndDate: null,
		realEndDate: null,
		img:
			"https://images.caradisiac.com/logos-ref/modele/modele--citroen-c4-picasso/S0-modele--citroen-c4-picasso.jpg",
	},
	{
		id: 5,
		name: "Ford fiesta",
		startDate: null,
		estimatedEndDate: null,
		realEndDate: null,
		img: "https://www.largus.fr/images/images/ford-fiesta_11.jpg",
	},
	{
		id: 6,
		name: "Bateau",
		startDate: null,
		estimatedEndDate: null,
		realEndDate: null,
		img:
			"https://img.leboncoin.fr/api/v1/tenants/9a6387a1-6259-4f2c-a887-7e67f23dd4cb/domains/20bda58f-d650-462e-a72a-a5a7ecf2bf88/buckets/24265337-e7cc-489d-80fc-0c564d62a63b/images/83/46/01/8346016ba0ff8c3fa62a18580fc2b6f8630dca8d.jpg?rule=ad-large",
	},
];
