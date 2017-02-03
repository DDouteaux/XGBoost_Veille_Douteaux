var form_for_cow_proximity = function(){
	return generate_radio_buttons_group({oui: 'Oui', non: 'Non'}, 'cows_proximity', 'form_cows_proximity', default_or_former('cows_proximity','non'));
}

var form_for_cow_price = function(){
	return generate_number_input('cow_distance', 0, '', default_or_former('cows_distance',100), 'km');
}

var form_for_cow_volume = function(){
	return generate_number_input('cow_volume', 0, '', default_or_former('cows_volume', 25*answers.production_volume*1000), _language_array.aide_decision.misc.tonnes);
}

var adapt_cow_proximity_form = function(){
	if(($('input[name=cows_proximity]:checked')).val() == 'oui'){
		$('<div id="cows_proximity_yes">' + generate_form_label(_language_array.aide_decision.form_labels.facturation_deplacement) + form_for_cow_price() + generate_form_label(_language_array.aide_decision.form_labels.volume_ecoulable) + form_for_cow_volume() + '</div>').insertAfter($('#form_cows_proximity'));
	} else {
		$('#cows_proximity_yes').remove();
	}
}

var set_cows_proximity_question = function(){
	init_common_divs(_language_array.headers.aide_decision.main, _language_array.headers.aide_decision.sub.cows_proximity, generate_progress_bar() + generate_form_label(_language_array.aide_decision.form_labels.proximite_agricole) + form_for_cow_proximity() + generate_buttons());
	adapt_cow_proximity_form()
	$('input[name=cows_proximity]').on('change', function(){
		adapt_cow_proximity_form();
	})
}