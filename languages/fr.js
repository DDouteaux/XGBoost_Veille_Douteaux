var fr_strings = {
	sections: {
		accueil: 'Accueil',
		aide_decision: 'Aide à la décision',
		mode_recyclage: 'Modes de recyclage',
		recyclage_methane: 'Méthane',
		recyclage_bioethanol1g: 'Bioéthanol 1G',
		recyclage_bioethanol2g: 'Bioéthanol 2G',
		recyclage_feed_animal: 'Nourriture animale',
		recyclage_feed_homme: 'Nourriture humaine',
		recyclage_combustion: 'Combustion',
		ressources: 'Ressources utiles',
		credits: 'Crédits'
	},
	headers: {
		accueil: {
			main: 'Accueil',
			sub: {}
		},
		aide_decision: {
			main: 'Formulaire d\'aide à la décision',
			sub: {
				area: 'Région',
				production_volume: 'Volume de production',
				percent_crop: 'Pourcentage de céréales',
				focus: 'Intérêt',
				common_infra: 'Mise en commun de l\'infrastructure',
				payback: 'Retour sur investissement',
				investments: 'Investissements',
				cows_proximity: 'Proximité du bétail',
				result: 'Recommandations'
			}
		},
		mode_recyclage: {
			main: 'Modes de recyclage',
			sub: {
				recyclage_index: 'Index des méthodes',
				recyclage_methane: 'Méthane',
				recyclage_bioethanol1g: 'Bioéthanol 1G',
				recyclage_bioethanol2g: 'Bioéthanol 2G',
				recyclage_feed_animal: 'Nourriture animale',
				recyclage_feed_homme: 'Nourriture humaine',
				recyclage_combustion: 'Combustion',
				general: 'Général'
			}
		},
		ressources: {
			main: 'Ressources utiles',
			sub: {
				entreprises: 'Entreprises et études'
			}
		},
		credits: {
			main: 'Crédits',
			sub: {}
		}
	},
	accueil: {
		bienvenue_label: 'Bienvenue!',
		bienvenue: 'Bienvenue dans notre application d\'aide à la décision pour le recyclage des drèches.',
		utilite_label: 'Utilité',
		descriptif: 'Cette application vous permet d\'explorer les différentes méthodes de recyclage des drèches de brasserie et d\'établir la solution la plus adaptée à votre brasserie.',
		detail_label: 'Ressources',
		detail: 'Vous pourrez trouver les ressources suivantes dans cette application :',
		detail_aide_decision: 'Un questionnaire d\'aide à la décision pour déterminer de manière automatique les méthodes de recyclages les plus adaptées à votre situation.',
		detail_methodes: 'Un descriptif complet de chaque méthode de recyclage vous présentant ses enjeux, ses contraintes et ses besoins en infrastructure',
		detail_autres: 'Des ressources externes sur les procédés de recyclage.'
	},
	validation: {
		oui: 'Oui',
		non: 'Non'
	},
	recycle_methods: {
		retour_resultats: 'Retourner aux résultats',
		headers: {
			description: 'Description',
			avantage: 'Avantages',
			inconvenient: 'Inconvénients',
			centre_interet: 'Centre d\'intéret',
			infrastructures: 'Infrastructure nécessaire'
		},
		index: {
			explication: 'Vous pouvez sélectionner une méthode de recyclage dans la liste suivante : '
		},
		feed_animal: {
			description: 'La plus ancienne des méthodes de valorisation des drêches consiste à les réutiliser dans l\'agriculture pour nourrir le bétail. La teneur en protéine des drêches les rend particulièrement intéressante pour la production laitière des bovins, et constitue une nourriture riche et moins cher que les aliments traditionnels.',
			avantage: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Très simple à mettre en place : pas d\'infrastructure nécessaire.</div><div class="liste-item"><i class="icon fa fa-beer"></i>Déjà en place dans de nombreuses régions du monde</div></div>',
			inconvenient: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Peu rentable</div><div class="liste-item"><i class="icon fa fa-beer"></i>L\'impact environnemental peut vite devenir important suivant la distance de transport.</div><div class="liste-item"><i class="icon fa fa-beer"></i>Non disponible dans toutes les régions</div></div>',
			infrastructures: 'Aucune, autre qu\'une zone de stockage des drêches normalement déjà existante.'
		},
		feed_homme: {
			description: 'Cette méthode de revalorisation n\'est pas développable à échelle industrielle comme peuvent l\'être les autres méthodes présentées. Elle consiste plutôt à ancrer la brasserie dans des organisations locales en écoulant une (faible) partie des drêches produites pour de la production de pain en complément de la farine de blé, mais surtout pour la production de substrat pour de l\'élevage de champignons.',
			avantage: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Coûts nuls</div><div class="liste-item"><i class="icon fa fa-beer"></i>Impact environnemental négligeable</div><div class="liste-item"><i class="icon fa fa-beer"></i>Développement d\'un tissu avec des acteurs locaux</div></div>',
			inconvenient: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Volumes écoulables très faibles</div><div class="liste-item"><i class="icon fa fa-beer"></i>Aucun retour économique</div></div>',
			infrastructures: 'Aucune'
		},
		bioethanol1g: {
			description: 'On utilise les sucres fermentescibles résiduels des drêches. Avec ces sucres, on effectue une fermentation pour produire de l\'éthanol puis une distillation pour le purifier.',
			avantage: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Solution intéressante financièrement si les prix de l\'énergie augmentent.</div><div class="liste-item"><i class="icon fa fa-beer"></i>Fort potentiel du bioéthanol comme carburant renouvelable.</div></div>',
			inconvenient: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>À l\'heure actuelle, les coûts d\'investissement sont trop importants pour avoir une rentabilité suffisament rapide.</div><div class="liste-item"><i class="icon fa fa-beer"></i>Impact environnemental non négligeable.</div></div>',
			infrastructures: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Cuves de fermentation.</div><div class="liste-item"><i class="icon fa fa-beer"></i>Équipements de fermentation.</div></div>'
		},
		bioethanol2g: {
			description: 'On utilise les composés cellulosiques des drêches. Ils sont alors traité pour en extraire des sucres simples fermentescibles. Le déroulé est ensuite similaire à celui du bioéthanol de première génération.',
			avantage: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Solution intéressante financièrement si les prix de l\'énergie augmentent.</div><div class="liste-item"><i class="icon fa fa-beer"></i>Fort potentiel du bioéthanol comme carburant renouvelable.</div></div>',
			inconvenient: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>À l\'heure actuelle, les coûts d\'investissement sont trop importants pour avoir une rentabilité suffisament rapide.</div><div class="liste-item"><i class="icon fa fa-beer"></i>Impact environnemental non négligeable.</div></div>',
			infrastructures: 'Peu de situations réelles de déploiement. Les infrastructures sont donc à déterminer au cas par cas.'
		},
		combustion: {
			description: 'Cette méthode de revalorisation des drêches consiste à sécher les drêches après la filtration du moût puis à les brûler. L\'énergie thermique ainsi obtenue est utilisée lors du processus de brassage.<br/>Cela permet d\'économiser une partie des énergies fossiles habituellement utilisées pour obtenir cette énergie thermique.',
			avantage: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Applicable dans toutes les zones géographiques</div><div class="liste-item"><i class="icon fa fa-beer"></i>Economie d\'énergie thermique d\'origine fossile</div><div class="liste-item"><i class="icon fa fa-beer"></i>Pas de consommation d\'eau</div></div>',
			inconvenient: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Coût d\'investissement</div><div class="liste-item"><i class="icon fa fa-beer"></i>La combustion des drêches émet plus de CO2 que la combustion de pétrole ou de méthane pour un litre de bière produite</div></div>',
			infrastructures: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Un brûleur</div><div class="liste-item"><i class="icon fa fa-beer"></i>Une presse à bande pour sécher les drêches</div></div>'
		},
		methane: {
			description: 'Cette méthode de revalorisation énergétique des drêches, consiste à produire du biogaz dans un digesteur anaérobie, ce biogaz pouvant être utilisé le chauffage nécessaire au processus de fabrication de la bière.',
			avantage: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Solution très bonne du point de vue environnemental, avec un impact carbone négatif.</div><div class="liste-item"><i class="icon fa fa-beer"></i>Grand intérêt pour l\'image de marque.</div></div>',
			inconvenient: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Payback long en raison de l\'important investissement initial.</div></div>',
			infrastructures: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Digesteur anaérobie</div><div class="liste-item"><i class="icon fa fa-beer"></i>Système de chauffage au gaz (si non déjà présent)</div><div class="liste-item"><i class="icon fa fa-beer"></i>Centrale à gaz (si production électricité)</div></div>'
		}
	},
	aide_decision: {
		bouton_suivant: 'Suivant',
		bouton_precedent: 'Précédent',
		bouton_recommencer: 'Nouvelle simulation',
		misc: {
			annee: 'année',
			annees: 'années',
			tonnes: 'tonnes',
			choix: 'Vos choix',
			neg: 'Négligeable',
			modere: 'Modérée',
			eleve: 'Élevé',
			aucun: 'Aucun'
		},
		result_page: {
			phrase_introductive: 'Suite aux différents critères que vous avez fourni, nous pouvons vous proposer les solutions suivantes pour le recyclage des drèches : ',
			quick_methane: 'Cette solution propose de faire fermenter les drêches avec des bactéries pour produire du biogaz afin de chauffer la structure ou sécher les grains.',
			quick_bioethanol1g: 'Cette solution propose d\'exploiter les restants de sucre dans les drêches afin de produire du bioéthanol.',
			quick_bioethanol2g: 'Cette solution propose de décomposer les parois des grains restants dans les drêches pour en dégager des sucres simples afin de produire du bioéthanol.',
			quick_feed_animal: 'Cette solution vous permet de recycler vos drêches en les fournissants aux agriculteurs locaux afin de nourrir leur bétail.',
			quick_feed_homme: 'Cette solution propose d\'utiliser les drêches pour la production de pain ou de substrat à champignons.',
			quick_combustion: 'Cette solution propose de brûler les drêches afin de récupérer leur énergie notamment pour le séchage des grains.',
			production_co2: 'Production de CO<div class="sub-text">2</div> : ',
			production_eau: 'Consommation d\'eau : ',
			investissement: 'Investissement : ',
			payback: 'Payback : ',
			explorer_solution: 'Explorer la solution'
		},
		choix_labels: {
			continent: 'Continent : ',
			pays: 'Pays : ',
			volume_production: 'Volume de production : ',
			volume_production_tx: 'MhL/an',
			percent_crop: 'Orge et blé : ',
			focus: 'Focus : ',
			payback: 'Rentabilité : ',
			payback_tx: 'ans',
			investments: 'Budget : ',
			proximite_agricole: 'Proximité d\'exploitations : ',
			distance_agricole: 'Exploitations à ',
			facturation_deplacement: 'Prix acheminent : ',
			volume_ecoulable: 'Volume écoulable : ',
			volume_ecoulable_tx: 'tonnes',
			mise_en_commun_infra: 'Mise en commun : ',
			invest_percent_mise_en_commun: 'Part financement commun : ',
			payback_percent_mise_en_commun: 'Part revenus communs : ',
            profile: 'Profil des drêches : '
		},
		form_labels: {
			continent: 'Choisissez un continent : ',
			pays: 'Choisissez un pays : ',
			volume_production: 'Volume de production : ',
			percent_crop: 'Pourcentage d\'orge et de blé : ',
			focus: 'Aspect le plus important : ',
			payback: 'Temps de rentabilité du projet : ',
			investments: 'Budget prévu : ',
			proximite_agricole: 'Proximité d\'exploitation agricoles : ',
			facturation_deplacement: 'Distance exploitations agricoles : ',
			volume_ecoulable: 'Volume écoulable : ',
			mise_en_commun_infra: 'Mise en commun de l\'infrastructure : ',
			invest_percent_mise_en_commun: 'Votre part dans le financement : ',
			payback_percent_mise_en_commun: 'Votre part dans les revenus de l\'infrastructure : ',
            profile: 'Profil des drêches : '
		},
		continents: {
			europe: 'Europe',
			asie: 'Asie',
			amerique: 'Amérique',
			afrique: 'Afrique',
			oceanie: 'Océanie'
		},
		pays_europe: {
			allemagne: 'Allemagne',
			russie: 'Russie',
			uk: 'Grande Bretagne',
			pologne: 'Pologne',
			espagne: 'Espagne',
			ukraine: 'Ukraine',
			pays_bas: 'Pays Bas',
			france: 'France',
			belgique: 'Belgique',
			rep_tcheque: 'République tchèque'
		},
		pays_asie: {
			chine: 'Chine',
			japon: 'Japon',
			vietnam: 'Vietnam',
			thailand: 'Thaïlande',
			coree_sud: 'Corée du Sud',
			inde: 'Inde'
		},
		pays_amerique: {
			usa: 'États Unis',
			bresil: 'Brésil',
			mexique: 'Mexique',
			venezuela: 'Vénézuela',
			colombie: 'Colombie',
			canada: 'Canada'
		},
		pays_oceanie: {
			australie: 'Australie'
		},
		pays_afrique: {
			afrique_sud: 'Afrique du Sud',
			nigeria: 'Nigéria'
		},
		focus: {
			economique: 'Économique',
			environnement: 'Environnement',
			mise_en_place: 'Facilité d\'installation',
			indiff: 'Indifférent'
		},
        profile: {
            sucre: 'Sucre',
            proteine: 'Protéines',
            indiff: 'Indifférent'
        }
	},
	credits:{
		eleves_label: 'Membres du groupe',
		eleves: 'Cette application a été réalisée par des élèves de troisième année à l\'École Centrale de Lyon :<div id="students"><div class="student"><i class="icon fa fa-beer"></i>Frédéric Allaire,</div><div class="student"><i class="icon fa fa-beer"></i>Roman Bohoslavets,</div><div class="student"><i class="icon fa fa-beer"></i>Benoît Colange,</div><div class="student"><i class="icon fa fa-beer"></i>Damien Douteaux,</div><div class="student"><i class="icon fa fa-beer"></i>Marie Miot,</div><div class="student"><i class="icon fa fa-beer"></i>Adrien Morel.</div></div>',
		projet_label: 'Objectifs du projet',
		projet: 'Ce travail a été commandité par Vincent Gass dans le cadre d\'un projet de recherche pour le module IRD. Ses objectifs principaux étaient :<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>L\'étude des procédés de recyclage des drèches de brasserie.</div><div class="liste-item"><i class="icon fa fa-beer"></i>La réalisation d\'un outil d\'aide à la décision pour aider les brasseries à savoir quel mode de recyclage favoriser en fonction de leurs attentes et leurs critères.</div></div>',
		periode_de_realisation_label: 'Période de réalisation',
		periode_de_realisation: 'Ce projet réalisé de septembre à novembre 2016.'
	},
	ressources:{
		presentation: 'Vous pourrez trouver ici les différentes ressources relatives à chaque mode de recyclage. Ces ressources sont principalement issue de recherches ou fournissent des regards critiques sur ces solutions.',
		ressource_1: 'Fiche descriptive des drêches',
		ressource_2: 'Généralités techniques',
		ressource_3: 'Comparaison d\'impacts environnementaux',
		ressource_4: 'Exemple de retombées économiques', 
		ressource_5: 'Une solution pour améliorer la production',
		ressource_6: 'Cuve de fermentation',
		ressource_7: 'Processus général',
		ressource_8: 'Étude des retombées économiques',
		ressource_9: 'Étude impact environnemental',
		ressource_10: 'Cuve de fermentation', 
		ressource_11: 'Silo métalique',
		ressource_12: 'Intérêt économique',
		ressource_13: 'Prix d\'opportunité',
		ressource_14: 'Pain de drêches',
		ressource_15: 'Production de champignons n°1',
		ressource_16: 'Production de champignons n°2',
		ressource_17: 'Impact environnemental',
		ressource_18: 'Impact économique'
	}
}