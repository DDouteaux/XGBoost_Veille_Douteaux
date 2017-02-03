var input_production_volume = function(){
	return generate_number_input('production_volume', 0, '', default_or_former('production_volume', 2), _language_array.aide_decision.choix_labels.volume_production_tx);
}

var set_production_volume_question = function(){
	init_common_divs(_language_array.headers.aide_decision.main, _language_array.headers.aide_decision.sub.production_volume, generate_progress_bar() + generate_form_label(_language_array.aide_decision.form_labels.volume_production) + input_production_volume() + generate_buttons());
}