var form_for_focus =  function () {
	return generate_radio_buttons_group({economique: _language_array.aide_decision.focus.economique, environnement: _language_array.aide_decision.focus.environnement, mise_en_place: _language_array.aide_decision.focus.mise_en_place, indiff: _language_array.aide_decision.focus.indiff}, 'focus', 'form_focus', default_or_former('focus','economique'));
}

var set_focus_question = function () {
	init_common_divs(_language_array.headers.aide_decision.main, _language_array.headers.aide_decision.sub.focus, generate_progress_bar() + generate_form_label(_language_array.aide_decision.form_labels.focus) + form_for_focus() + generate_buttons());
}