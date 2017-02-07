function set_accueil(){
	load_section('accueil', _language_array.headers.accueil.main, '', create_subtitle(_language_array.accueil.bienvenue_label) + _language_array.accueil.bienvenue +
					create_subtitle(_language_array.accueil.utilite_label) + _language_array.accueil.descriptif);
}

set_accueil();