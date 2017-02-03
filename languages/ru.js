var ru_strings = {
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
				recyclage_combustion: 'Combustion'
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
		detail_methodes: 'Un descriptif complet de chaque méthodes de recyclage vous présentant ses enjeux, ses contraintes et ses besoins en infrastructure',
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
			description: 'L\'utilisation des drèches dans la nourriture animale peut permettre de nourrir des bovins, des ovins,...Le point important est la richesse des drèches en protéines, ce qui permet d\'avoir un ingrédient nutritif qui améliore la qualité du lait.<br>Les drêches peuvent alors être vendues fraîches ou pour de l\'encillage et seront alors moins chères que les autres solutions actuellement disponibles (soja en particulier).<br>.../...',
			avantage: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Créer un tissu local</div><div class="liste-item"><i class="icon fa fa-beer"></i>Peu d\'utilisation d\'eau</div><div class="liste-item"><i class="icon fa fa-beer"></i>Pas d\'investissements d\'infrastructure</div></div>',
			inconvenient: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Peu de bénéfice (voir négatif)</div><div class="liste-item"><i class="icon fa fa-beer"></i>Faible volume en général</div><div class="liste-item"><i class="icon fa fa-beer"></i>.../...</div></div>',
			centre_interet: '<div class="liste"><div class="liste-item"><i class="icon fa fa-beer"></i>Écologique</div></div>',
			infrastructures: 'Aucune (le stockage des drèches à la suite du brassin est censé être déjà présent sur l\'exploitation)'
		},
		feed_homme: {
			description: '',
			avantage: '',
			inconvenient: '',
			centre_interet: '',
			infrastructures: ''
		},
		bioethanol1g: {
			description: '',
			avantage: '',
			inconvenient: '',
			centre_interet: '',
			infrastructures: ''
		},
		bioethanol2g: {
			description: '',
			avantage: '',
			inconvenient: '',
			centre_interet: '',
			infrastructures: ''
		},
		combustion: {
			description: '',
			avantage: '',
			inconvenient: '',
			centre_interet: '',
			infrastructures: ''
		},
		methane: {
			description: '',
			avantage: '',
			inconvenient: '',
			centre_interet: '',
			infrastructures: ''
		}
	},
	aide_decision: {
		bouton_suivant: 'Suivant',
		bouton_precedent: 'Précédent',
		bouton_recommencer: 'Nouvelle simulation',
		misc: {
			annees: 'années',
			tonnes: 'tonnes',
			choix: 'Vos choix'
		},
		result_page: {
			phrase_introductive: 'Suite aux différents critères que vous avez fourni, nous pouvons vous proposer les solutions suivantes pour le recyclage des drèches : ',
			quick_methane: 'Détails rapides sur la solution du méthane.',
			quick_bioethanol1g: 'Détails rapides sur la solution de bioéthanol de première génération.',
			quick_bioethanol2g: 'Détails rapides sur la solution du bioéthanol de deuxième génération.',
			quick_feed_animal: 'Cette solution vous permet de recycler vos drêches en les fournissants aux agriculteurs locaux afin de nourrir leur bétail.',
			quick_feed_homme: 'Détails rapides sur la solution de nourriture humaine.',
			quick_combustion: 'Détails rapides sur la solution de combustion.',
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
			payback_percent_mise_en_commun: 'Part revenus communs : '			
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
			facturation_deplacement: 'Prix déplacements agricoles : ',
			volume_ecoulable: 'Volume écoulable : ',
			mise_en_commun_infra: 'Mise en commun de l\'infrastructure : ',
			invest_percent_mise_en_commun: 'Votre part dans le financement : ',
			payback_percent_mise_en_commun: 'Votre part dans les revenus de l\'infrastructure : '
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
		presentation: 'Vous pourrez trouver ici les différentes ressources relatives à chaque mode de recyclage. Ces ressources sont principalement issue de recherches ou fournissent des regards critiques sur ces solutions.'
	}
}