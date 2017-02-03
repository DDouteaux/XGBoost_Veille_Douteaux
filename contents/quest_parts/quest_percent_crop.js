var input_percent_crop = function(){
	return generate_number_input('percent_crop', 0, 100, default_or_former('percent_crop', 70), '%');
}

var form_for_profile = function () {
    return generate_radio_buttons_group({sucre: _language_array.aide_decision.profile.sucre, proteine: _language_array.aide_decision.profile.proteine, indiff: _language_array.aide_decision.focus.indiff}, 'profile', 'form_profile', default_or_former('profile','sucre'));
}

var set_percent_crop_question = function(){
	init_common_divs(_language_array.headers.aide_decision.main, _language_array.headers.aide_decision.sub.percent_crop, generate_progress_bar() +generate_form_label(_language_array.aide_decision.form_labels.percent_crop) + input_percent_crop() + generate_form_label(_language_array.aide_decision.form_labels.profile) + form_for_profile() + generate_buttons());
}