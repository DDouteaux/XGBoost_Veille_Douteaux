var continent_form = function(){
	return generate_select_option_form(_language_array.aide_decision.continents, 'continent_form', 'continent', default_or_former('continent','europe'));
}

var european_country_form = function(){
	return generate_select_option_form(_language_array.aide_decision.pays_europe, 'country_form', 'country', default_or_former('country','allemagne'));
}

var asian_country_form = function(){
	return generate_select_option_form(_language_array.aide_decision.pays_asie, 'country_form', 'country', default_or_former('country','chine'));
}

var american_country_form = function(){
	return generate_select_option_form(_language_array.aide_decision.pays_amerique, 'country_form', 'country', default_or_former('country','usa'));
}

var african_country_form = function(){
	return generate_select_option_form(_language_array.aide_decision.pays_afrique, 'country_form', 'country', default_or_former('country','afrique_du_sud'));
}

var oceanian_country_form = function(){
	return generate_select_option_form(_language_array.aide_decision.pays_oceanie, 'country_form', 'country', default_or_former('country','australie'));
}

var generate_form_for_continent_countries = function(key){
	//console.log('[INFO] generate_form_for_continent_countries pour : ' + key);
	switch(key){
		case 'europe':
			return european_country_form();
			break;
		case 'asie':
			return asian_country_form();
			break;
		case 'amerique':
			return american_country_form();
			break;
		case 'afrique':
			return african_country_form();
			break;
		case 'oceanie':
			return oceanian_country_form();
			break;
	}
}

var adapt_country_form = function(val){
	$('#country_form').empty();
	$('#country_form').replaceWith($(generate_form_for_continent_countries(val)));
}

var set_area_question = function(){
	init_common_divs(_language_array.headers.aide_decision.main, _language_array.headers.aide_decision.sub.area, generate_progress_bar() + generate_form_label(_language_array.aide_decision.form_labels.continent) + continent_form() + generate_form_label(_language_array.aide_decision.form_labels.pays) + '<div id="country_form"></div>' + generate_buttons());
	adapt_country_form($('#continent_form').val());
	$('#continent_form').on('change', function(){
		adapt_country_form(this.value);
	})
}