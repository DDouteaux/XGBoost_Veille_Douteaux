var set_ressources = function(){
	load_section('ressources', _language_array.headers.ressources.main, '', 
		_language_array.ressources.presentation +
		'<div id="left_col">' + references.print_ref('apply_planetary') + references.print_ref('intro_boost_trees') +
		'</div><div id="right_col">' + references.print_ref('origin_paper') + references.print_ref('list_ml_algo') + '</div>');

	$('.ref_value').hover(function(e){
		if(references.refs[e.target.dataset.key].link == ''){
			$(e.target).append('<div class="ref_details">' + references.refs[e.target.dataset.key].title + '</div>');
		} else {
			console.log(references.refs[e.target.dataset.key].link)
			$(e.target).append('<a class="ref_details" href="' + references.refs[e.target.dataset.key].link + '">' + references.refs[e.target.dataset.key].title + '</div>');
		}
	}, function(e){
		$('div.ref_details').remove();
		$('a.ref_details').remove();
	});
}

var references = {
	refs : {},
	count : 0,
	add_ref : function(key, title, author, date, link, other) {
		this.count++;
		this.refs[key] = {id: this.count, title: title, author: author, date: date, link: link, other: other};
	},
	print_ref : function(key) {
		return '<div class="ref"><div data-key="' + key + '" class="ref_value">[' + this.refs[key].id + ']</div></div>';
	}
}

references.add_ref('apply_planetary', 'A machine learns to predict the stability of tightly packed planetary systems', 'D. Tamayo, A. Silburt et al.', '22 novembre 2016', 'https://arxiv.org/pdf/1610.05359.pdf', '');
references.add_ref('intro_boost_trees', 'Introduction to Boosted Trees', 'Read the doc', 'Consulté le 15 février 2017', 'http://xgboost.readthedocs.io/en/latest/model.html', 'Issu de la documentation des packages XGBoost');
references.add_ref('origin_paper', 'XGBoost: Reliable Large-scale Tree Boosting System', 'T. Chen et C. Guestrin','Consulté le 15 février 2017', 'http://learningsys.org/papers/LearningSys_2015_paper_32.pdf', '');
references.add_ref('list_ml_algo', 'A Tour of Machine Learning Algorithms', 'J. Brownlee', 'Consulté le 15 février 2017', 'http://machinelearningmastery.com/a-tour-of-machine-learning-algorithms/', '')