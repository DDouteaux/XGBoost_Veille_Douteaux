var generate_nav_button = function(){
	if(questions.current_question == 'end'){
		return '<button class="nav-button quest-button" type="button" onclick="set_result_page()">' + _language_array.recycle_methods.retour_resultats + '</button>';
	} else {
		return '';
	}
};


function generate_methods_index(){
	//console.log('[INFO] Setting animal feed layout')
	_current_section = 'recycle_methods';
	load_section('recycle_methods', _language_array.headers.mode_recyclage.main, _language_array.headers.mode_recyclage.sub.recyclage_index, 
		_language_array.recycle_methods.index.explication + '<div id="all-recycling-methods">' + 
		create_list_item("recycling-method", _language_array.headers.mode_recyclage.sub.recyclage_methane, "set_methane_method()") +
		create_list_item("recycling-method", _language_array.headers.mode_recyclage.sub.recyclage_bioethanol1g, "set_bioethanol1g_method()") + 
		create_list_item("recycling-method", _language_array.headers.mode_recyclage.sub.recyclage_bioethanol2g, "set_bioethanol2g_method()") + 
		create_list_item("recycling-method", _language_array.headers.mode_recyclage.sub.recyclage_feed_animal, "set_animal_feed_method()") + 
		create_list_item("recycling-method", _language_array.headers.mode_recyclage.sub.recyclage_feed_homme, "set_human_feed_method()") + 
		create_list_item("recycling-method", _language_array.headers.mode_recyclage.sub.recyclage_combustion, "set_combustion_method()") +'</div>'
	);
	click_on_recycle_methods();
}