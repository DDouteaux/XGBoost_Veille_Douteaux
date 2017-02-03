var form_for_investments = function(){
	return generate_number_input('investments', 0, '', default_or_former('investments', 500000), '$')
}

var set_investments_question = function(){
	init_common_divs(_language_array.headers.aide_decision.main, _language_array.headers.aide_decision.sub.investments, generate_progress_bar() + generate_form_label(_language_array.aide_decision.form_labels.investments) + form_for_investments() + generate_buttons());
}