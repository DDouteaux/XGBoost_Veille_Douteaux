var set_credits = function(){
	//console.log('[INFO] Setting credits layout');
	load_section('credits', _language_array.headers.credits.main, '', create_subtitle(_language_array.credits.eleves_label) + _language_array.credits.eleves + create_subtitle(_language_array.credits.projet_label) + _language_array.credits.projet + create_subtitle(_language_array.credits.periode_de_realisation_label) + _language_array.credits.periode_de_realisation);
}