var form_for_payback = function(){
	return generate_number_input('payback', 0, '', default_or_former('payback',3), _language_array.aide_decision.misc.annees)
}

var set_payback_question = function(){
	init_common_divs(_language_array.headers.aide_decision.main, _language_array.headers.aide_decision.sub.payback, generate_progress_bar() + generate_form_label(_language_array.aide_decision.form_labels.payback) + form_for_payback() + generate_buttons());
}