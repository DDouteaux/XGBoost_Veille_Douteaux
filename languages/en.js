var en_strings = {
	sections: {
		accueil: 'Home',
		aide_decision: 'Decision help',
		mode_recyclage: 'Recycling mode',
		recyclage_methane: 'Methane',
		recyclage_bioethanol1g: 'Bioethanol 1G',
		recyclage_bioethanol2g: 'Bioethanol 2G',
		recyclage_feed_animal: 'Cattle food',
		recyclage_feed_homme: 'Human food',
		recyclage_combustion: 'Combustion',
		ressources: 'Useful resources',
		credits: 'Credits'
	},
	headers: {
		accueil: {
			main: 'Home',
			sub: {}
		},
		aide_decision: {
			main: 'Desition-making quiz',
			sub: {
				area: 'Area',
				production_volume: 'Production volume',
				percent_crop: 'Cereal questions',
				focus: 'Mains focus',
				common_infra: 'Sharing infrastructure',
				payback: 'Payback',
				investments: 'Investments',
				cows_proximity: 'Cattle industry proximimty',
				result: 'Advices'
			}
		},
		mode_recyclage: {
			main: 'Ways of recycling',
			sub: {
				recyclage_index: 'Recycling methods index',
				recyclage_methane: 'Methane',
				recyclage_bioethanol1g: 'Bioethanol 1G',
				recyclage_bioethanol2g: 'Bioethanol 2G',
				recyclage_feed_animal: 'Cattle food',
				recyclage_feed_homme: 'Human food',
				recyclage_combustion: 'Combustion',
				general: 'Global'
			}
		},
		ressources: {
			main: 'Useful resources',
			sub: {
				entreprises: 'Firms and studies'
			}
		},
		credits: {
			main: 'Work credits',
			sub: {}
		}
	},
	accueil: {
		bienvenue_label: 'Welcome!',
		bienvenue: 'Welcome to our application to help you dertmining the best way to get rid of your spent grains.',
		utilite_label: 'Purpose',
		descriptif: 'This application will help you explore the different methods of spent grains recycling and therefor help you to choose the best suited solutions for your brewery.',
		detail_label: 'Resources',
		detail: 'You may find all these resources in this application :',
		detail_aide_decision: 'A decision-making quiz to automaticaly help you find the best suited solutions for your case.',
		detail_methodes: 'A detailed description of each recycling method to introduce its major issues, its constraints and its infrastructure needs',
		detail_autres: 'Some external resources about the recycling methods.'
	},	
	validation: {
		oui: 'Yes',
		non: 'No'
	},
	recycle_methods: {
		retour_resultats: 'Back to results',
		headers: {
			description: 'Description',
			avantage: 'Pros',
			inconvenient: 'Cons',
			centre_interet: 'Point of interest',
			infrastructures: 'Required infrastructure'
		},
		index: {
			explication: 'You may select a recycling method in the following list : '
		},
		feed_animal: {
			description: 'The oldest method of spent grain revalorisation consists in using in cattle feeding. The protein content makes it ideal for bovine milk production, and this aliment is interesting and cheaper than other kind of alimentation.',
			avantage: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Simple to install : no infrastructure necessary</div><div class="liste-item"><i class="icon fa fa-beer"></i>Already exists everywhere in the world</div></div>',
			inconvenient: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Not profitable</div><div class="liste-item"><i class="icon fa fa-beer"></i>Bad environnemental impact because of the transport</div></div>',
			infrastructures: 'Nothing more than the normally already existing storage area.'
		},
		feed_homme: {
			description: 'Compared to the other methods, this one is not meant for industrial uses. It consists more in anchoring the brewery inside local economy while giving a small amount of spent grains. These spent grains will be used in order to make bread or mushroom growing compost.',
			avantage: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>No cost</div><div class="liste-item"><i class="icon fa fa-beer"></i>Negligible impact on the environment</div><div class="liste-item"><i class="icon fa fa-beer"></i>Develop local economy network</div></div>',
			inconvenient: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Very few dispose of spent grains</div><div class="liste-item"><i class="icon fa fa-beer"></i>Almost no economic spin-off</div></div>',
			infrastructures: 'None'
		},
		bioethanol1g: {
			description: 'The fermentable sugars remaining in the spent grains are fermented to produce ethanol which is distilled to make it pure.',
			avantage: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Profitable solution if the price of energy increases.</div><div class="liste-item"><i class="icon fa fa-beer"></i>Bioethanol has strong potential as a renewable fuel.</div></div>',
			inconvenient: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Currently, the investment costs are too high to obtain a short-term profitability.</div><div class="liste-item"><i class="icon fa fa-beer"></i>Environmental impact is not negligible.</div></div>',
			infrastructures: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Cuves de fermentation.</div><div class="liste-item"><i class="icon fa fa-beer"></i>Équipements de fermentation.</div></div>'
		},
		bioethanol2g: {
			description: 'We use the cellulosic compounds in the spent grains. They are treated in order to obtain fermentable sugars, after that the process is roughly similar to first generation bioethanol.',
			avantage: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Profitable solution if the price of energy increases.</div><div class="liste-item"><i class="icon fa fa-beer"></i>Bioethanol has strong potential as a renewable fuel.</div></div>',
			inconvenient: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Currently, the investment costs are too high to obtain a short-term profitability.</div><div class="liste-item"><i class="icon fa fa-beer"></i>Environmental impact is not negligible.</div></div>',
			infrastructures: 'Only a few really established setups. The infrastructures need to be decided for each individual case.'
		},
		combustion: {
			description: 'In this method of spent grain revalorisation, the goal is to dry it after the filtration of the wort and then to burn it. The thermal energy obtained is then used in the brewing process.<br/>Thus, it is way to reduce the amount of fossil fuel currently used to get this thermal energy.',
			avantage: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Applicable in every area in the world</div><div class="liste-item"><i class="icon fa fa-beer"></i>Reduction of the fossil fuel thermal energy</div><div class="liste-item"><i class="icon fa fa-beer"></i>No water consumption</div></div>',
			inconvenient: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Investment cost</div><div class="liste-item"><i class="icon fa fa-beer"></i>The carbon dioxide emission per liter of beer produced is higher for spent grain combustion than for gas or oil combustion</div></div>',
			infrastructures: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>A burner</div><div class="liste-item"><i class="icon fa fa-beer"></i>A belt press in order to dry spent grains</div></div>'
		},
		methane: {
			description: 'This method of energetic valorisation of spent grains consists in producing biogas in an anaerobic digester, this biogas being used for heating applications during the process of beer brewery.',
			avantage: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Really good solution on an environmental point of view, with a negative carbon impact.</div><div class="liste-item"><i class="icon fa fa-beer"></i>Great interest for brand image..</div></div>',
			inconvenient: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Long payback, because of the important initial investment.</div></div>',
			infrastructures: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Anaerobic digester</div><div class="liste-item"><i class="icon fa fa-beer"></i>Gas heating system (if not already created)</div><div class="liste-item"><i class="icon fa fa-beer"></i>Gas power plant (if electricity production)</div></div>'
		}
	},	
	aide_decision: {
		bouton_suivant: 'Next',
		bouton_precedent: 'Previous',
		bouton_recommencer: 'New simulation',
		misc: {
			anne: 'year',
			annees: 'years',
			tonnes: 'tons',
			choix: 'Your choices',
			neg: 'Negligible',
			modere: 'Moderate',
			eleve: 'High',
			aucun: 'None'
		},
		result_page: {
			phrase_introductive: 'Following your different wishes, we may suggest you these different solutions for spent grains recycling : ',
			quick_methane: 'This solution aims at fermenting spent grains with bacteria in order to produce biogas that may be used for heating the brewery or drying grains.',
			quick_bioethanol1g: 'This solution aims at operate on the remaining sugars of spent grains in order to produce bioethanol.',
			quick_bioethanol2g: 'This solution aims at treating cellulosic compounds in the spent grains in order to obtain fermentable sugars for producing bioethanol.',
			quick_feed_animal: 'This solution aims at selling your spent grains to local farmers in ordre to feed their flocks.',
			quick_feed_homme: 'This solution aims at using spent grains in order to make bread or mushroom growing compost.',
			quick_combustion: 'This solution aims burning the spent grains in order to retrieve their energy for example for drying grains.',
			production_co2: 'CO<div class="sub-text">2</div> emissions : ',
			production_eau: 'Consumption of water : ',
			investissement: 'Investments : ',
			payback: 'Payback : ',
			explorer_solution: 'Explore the solution'
		},
		choix_labels: {
			continent: 'Continent : ',
			pays: 'Country : ',
			volume_production: 'Production volume : ',
			volume_production_tx: 'MhL/year',
			percent_crop: 'Barley and wheat : ',
			focus: 'Focus : ',
			payback: 'Payback : ',
			payback_tx: 'year',
			investments: 'Budget : ',
			proximite_agricole: 'Nearby farming business : ',
			distance_agricole: 'Farming business at : ',
			facturation_deplacement: 'Shipping price : ',
			volume_ecoulable: 'Total volume : ',
			volume_ecoulable_tx: 'tons',
			mise_en_commun_infra: 'Sharing infrastructure : ',
			invest_percent_mise_en_commun: 'Amount of founding : ',
			payback_percent_mise_en_commun: 'Share of revenues : ',		
			profile: 'Profile of spent grains : '
		},
		form_labels: {
			continent: 'Choose a continent : ',
			pays: 'Choose a country : ',
			volume_production: 'Production volume : ',
			percent_crop: 'Barley and wheat percent : ',
			focus: 'Most important aspect : ',
			payback: 'Project payback : ',
			investments: 'Planned budget : ',
			proximite_agricole: 'Nearby farming business : ',
			facturation_deplacement: 'Shipping price : ',
			volume_ecoulable: 'Total volume : ',
			mise_en_commun_infra: 'Sharing infrastructure : ',
			invest_percent_mise_en_commun: 'Your amount of founding : ',
			payback_percent_mise_en_commun: 'Your part in revenue : ',
			profile: 'Profile of spent grains :'
		},
		continents: {
			europe: 'Europe',
			asie: 'Asia',
			amerique: 'America',
			afrique: 'Africa',
			oceanie: 'Oceania'
		},
		pays_europe: {
			allemagne: 'Germany',
			russie: 'Russia',
			uk: 'Great Britain',
			pologne: 'Poland',
			espagne: 'Spain',
			ukraine: 'Ukrainia',
			pays_bas: 'The Netherlands',
			france: 'France',
			belgique: 'Belgium',
			rep_tcheque: 'Czech Republic'
		},
		pays_asie: {
			chine: 'China',
			japon: 'Japan',
			vietnam: 'Vietnam',
			thailand: 'Thaïland',
			coree_sud: 'South Corea',
			inde: 'India'
		},
		pays_amerique: {
			usa: 'United States of America',
			bresil: 'Brazil',
			mexique: 'Mexico',
			venezuela: 'Venezuela',
			colombie: 'Columbia',
			canada: 'Canada'
		},
		pays_oceanie: {
			australie: 'Australia'
		},
		pays_afrique: {
			afrique_sud: 'South Africa',
			nigeria: 'Nigeria'
		},
		focus: {
			economique: 'Economic',
			environnement: 'Environment',
			mise_en_place: 'Ease of installation',
			indiff: 'Indifferent'
		},
        profile: {
            sucre: 'Suggar',
            proteine: 'Proteins',
            indiff: 'Indifferent'
        }
	},
	credits:{
		eleves_label: 'Group members',
		eleves: 'This application was realized by third year students at <div style="font-style: italic; display: inline;">École Centrale de Lyon</div> :<div id="students"><div class="student"><i class="icon fa fa-beer"></i>Frédéric Allaire,</div><div class="student"><i class="icon fa fa-beer"></i>Roman Bohoslavets,</div><div class="student"><i class="icon fa fa-beer"></i>Benoît Colange,</div><div class="student"><i class="icon fa fa-beer"></i>Damien Douteaux,</div><div class="student"><i class="icon fa fa-beer"></i>Marie Miot,</div><div class="student"><i class="icon fa fa-beer"></i>Adrien Morel.</div></div>',
		projet_label: 'Project goals',
		projet: 'This study was commisioned by Vincent Gass during a research project for the IRD module. Its main goals where :<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>The study of ways to recycle spent grains.</div><div class="liste-item"><i class="icon fa fa-beer"></i>The creation of a decision-making tool in order to help breweries to know which recycling solution is more suited to their needs and expectations.</div></div>',
		periode_de_realisation_label: 'Implementation period',
		periode_de_realisation: 'This study was realized from Septembre to November 2016.'
	},
	ressources:{
		presentation: 'You will find there the different resources for each recycling mode. These resources are mainly part of research work and critical looks on theses solutions.',
		ressource_1: 'Spent grains descriptive sheet',
		ressource_2: 'Technical generalities',
		ressource_3: 'Comparing environmental impact',
		ressource_4: 'Economic impact samples', 
		ressource_5: 'A way to improve production',
		ressource_6: 'Fermentation tank',
		ressource_7: 'Overall process',
		ressource_8: 'Study of economic impacts',
		ressource_9: 'Study of environmental impact',
		ressource_10: 'Fermentation tank', 
		ressource_11: 'Storage silo',
		ressource_12: 'Economic interest',
		ressource_13: 'Opportunity cost',
		ressource_14: 'Spent grains bread',
		ressource_15: 'Mushroom production #1',
		ressource_16: 'Mushroom production #2',
		ressource_17: 'Study of environmental impact',
		ressource_18: 'Study of economic impacts'
	}
}