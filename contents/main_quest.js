var generate_progress_bar = function(with_recalls = true){
	var progress_bar = '<div class="progress-bar clearfix">';
	var number_of_questions_done = answers.number_of_answered_questions;
	if(number_of_questions_done > 0){
		for(i=0; i<number_of_questions_done; i++){
			progress_bar += '<div class="progress-bar-part progress-bar-done"><span></span></div>' 
		}
	}
	if(number_of_questions_done != (questions.questions_order.length - 1)){
		progress_bar += questions.current_question != 'init' ? '<div class="progress-bar-part progress-bar-current" data-step=1></div>' : '<div class="progress-bar-part progress-bar-todo" data-step=1></div>';
	}
	for(i=0; i < (questions.questions_order.length - 2 - number_of_questions_done); i++){
		progress_bar += '<div class="progress-bar-part progress-bar-todo"></div>' 
	}
	return (progress_bar + '</div>' + (with_recalls ? generate_recall_div() : ''));
}

var generate_buttons = function(key = questions.current_question){
	return '<div class="decision-buttons">' +
	((key == 'init') ? '' : '<button class="quest-button previous-button" type="button" onclick="questions.previous_question()">' + _language_array.aide_decision.bouton_precedent + '</button>') +
	((key == 'end') ? '' : '<button class="quest-button next-button" type="button" onclick="questions.next_question()">' + _language_array.aide_decision.bouton_suivant + '</button>') +
	((key == 'end') ? '<button class="quest-button new-simulation" type="button" onclick="questions.reinit_questions()">' + _language_array.aide_decision.bouton_recommencer + '</button>' : '') + 
	'</div>';
}

var default_or_former = function(key, def_val){
	return (answers[key] == 'default') ? def_val : answers[key]
}

var generate_recall_div = function(){
	var recall_div = '<div id="recall_result_div"><div style="text-align:center"><b>' + _language_array.aide_decision.misc.choix + '</b></div><div id="recall_content">' + answers.compute_json_of_answers() + '</div></div>';
	return recall_div; 
}

var set_question_layout = function(with_recalls = true){
	//console.log('[INFO] Setting question layout');
	$('#main_header').append(_language_array.headers.aide_decision.main);
	$('#main_content').append(generate_progress_bar(with_recalls));
	$('#main_content').append(generate_buttons());
}

var save_question_answer = function(def_val = true){
	$.each($('input, select'), function(){
		if(($(this).is('input') && this.type == 'number') ||$(this).is('select')){
			answers.set_value(this.name, (def_val ? 'default' : this.value));
		} else {
			if(this.checked){
				answers.set_value(this.name, (def_val ? 'default' : this.value));
			}
		}
	});
}

var questions = {
	current_question: 'init',
	questions_order: ['init', 'area', 'production_volume', 'cow_proximity', 'percent_crop', 'focus', 'investments', 'payback'],
	reinit_questions: function(){
		this.current_question = 'init';
		answers.reset();
		this.next_question();
	},
	next_question: function(){
		//console.log('[INFO] Next question');
		var question_position = this.questions_order.indexOf(this.current_question);
		switch(question_position){
			case -1:
				// On revient à l'initialisation du formulaire.
				//console.log('[INFO] Chargement de la page d\'accueil.');
				answers.reset();
				this.load_question('init');
				break;
			case (this.questions_order.length - 1):
				// On a fini, on va charger la page avec les résultats.
				//console.log('[INFO] Chargement de la page de fin.');
				save_question_answer(false);
				answers.answer();
				this.current_question = 'end';
				set_result_page();
				break;
			default:
				// On passe à la question suivante.
				//console.log('[INFO] Chargement de la question suivante.');
				save_question_answer(false);
				this.current_question == 'init' ? '' : answers.answer();
				this.load_question(this.questions_order[this.questions_order.indexOf(this.current_question) + 1]);
				break;
		}
	},
	previous_question: function(){
		//console.log('[INFO] Previous question');
		var question_position = (this.current_question == 'end' ? -2 : this.questions_order.indexOf(this.current_question));
		switch(question_position){
			case 0:
			case -1:
				// On est à l'initialisation, on y reste.
				answers.reset();
				break;
			case -2:
				// On était au tableau récapitulatif et on recule d'un cran.
				answers.previous()
				this.load_question(this.questions_order[this.questions_order.length - 1]);
				break;
			case 1:
				save_question_answer(true);
				answers.previous();
				init_common_divs();
				this.load_question('init');
				break;
			default:
				// On recule d'une question.
				save_question_answer(true);
				answers.previous();
				this.load_question(this.questions_order[this.questions_order.indexOf(this.current_question) - 1]);
				break;
		}
	},
	load_question: function(key){
		//console.log('[INFO] Load question : ' + key);
		if(this.questions_order.indexOf(key) != -1){
			this.current_question = key
			switch(key){
				case 'init':
					set_question_layout(false);
					break;
				case 'area':
					set_area_question();
					break;	
				case 'production_volume':
					set_production_volume_question();
					break;
				case 'cow_proximity':
					set_cows_proximity_question();
					break;
				case 'percent_crop':
					set_percent_crop_question();
					break;
				case 'focus':
					set_focus_question();
					break;
				case 'common_infra':
					set_common_infra_question();
					break;
				case 'payback':
					set_payback_question();
					break;
				case 'investments':
					set_investments_question();
					break;
			}
		} else {
			// N'est pas censé arriver, c'est juste une sécurité...
			console.log('[WARNING] Un cas imprévu a eu lieu dans load_question');
			answers.reset();
			this.load_question('init');
		}
	}
}