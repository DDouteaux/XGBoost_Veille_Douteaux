function set_accueil(){
	load_section('accueil', _language_array.headers.accueil.main, '', create_subtitle(_language_array.accueil.bienvenue_label) + _language_array.accueil.bienvenue +
					create_subtitle(_language_array.accueil.utilite_label) + _language_array.accueil.descriptif + 
					create_subtitle(_language_array.accueil.detail_label) + _language_array.accueil.detail + '<div id="all-ressources">' + 
					create_list_item("ressource", _language_array.accueil.detail_aide_decision, "load_aide_decision()") +
					create_list_item("ressource", _language_array.accueil.detail_methodes, "generate_methods_index()") + 
					create_list_item("ressource", _language_array.accueil.detail_autres, "set_ressources()") +'</div>');
}

set_accueil();