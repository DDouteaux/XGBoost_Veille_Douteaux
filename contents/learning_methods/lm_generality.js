var set_lm_generality = function(){
	load_section(
		_current_subsection, 
		_language_array.headers.learning_methods.main, 
		_language_array.headers.learning_methods.sub.lm_generality,
		'Avant de présenter plus en détail XGBoost et ses spécificités, nous vous proposons un petit tour d\'horizon des différentes méthodes de Machine Learning, regroupées par similarité dans les algorithmes.' + 
		create_collapsable_box('Régression', 'Moindres carrés, linéaire, logistique, MARS,...') +
		create_collapsable_box('À base d\'instances', 'KNN, LVQ, SOM, LWL, le gagnant raffle la mise.') +
		create_collapsable_box('Régression', 'Moindres carrés, linéaire, logistique, MARS,...') +
		create_collapsable_box('Régularisation', 'Extension des méthodes de régression, comme LASSO, Ridge, Elastic Net,...') +
		create_collapsable_box('Arbres de décision', 'CART, ID3, C4.5, CHAID, M5, Arbres conditionnels') +
		create_collapsable_box('Bayésiennes', 'Naive Bayes, Gaussian Naive Bayes, Multinomial Naive Bayes, BBN, BN,...') +
		create_collapsable_box('Clustering', 'K-means, K-medians, EM, hiérarchique') +
		create_collapsable_box('Règles d\'associations', 'APRIORI, ECLAT') +
		create_collapsable_box('Réseaux neuronaux', 'Perceptron, Adaline, Rétro-propagation, RBFN') +
		create_collapsable_box('Deep Learning', 'DBM, DBN, CNN,...') +
		create_collapsable_box('Réduction de dimension', 'PCA, PCR, PLSR, MDS,...') +
		create_collapsable_box('Méthodes ensemble', 'Boosting, RF, GBM,...')
	);

	init_collapsable_box();
	
	$('.collapsable_container').each(function(index, e){
		e.className = e.className + ' half_screen';
	})
}