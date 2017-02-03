function set_methane_method(reinit){
	//console.log('[INFO] Setting methane layout');
	_current_section = 'methane';
	load_section('methane', _language_array.headers.mode_recyclage.main, _language_array.headers.mode_recyclage.sub.recyclage_methane, 
		create_subtitle(_language_array.recycle_methods.headers.description) + _language_array.recycle_methods.methane.description +
		create_subtitle(_language_array.recycle_methods.headers.avantage) + _language_array.recycle_methods.methane.avantage +
		create_subtitle(_language_array.recycle_methods.headers.inconvenient) + _language_array.recycle_methods.methane.inconvenient +
		create_subtitle(_language_array.recycle_methods.headers.infrastructures) + _language_array.recycle_methods.methane.infrastructures +
		generate_nav_button());
	reinit ? answers.reset() : '';
}