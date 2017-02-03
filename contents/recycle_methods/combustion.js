function set_combustion_method(reinit){
	//console.log('[INFO] Setting combustion layout');
	_current_section = 'combustion';
	load_section('combustion', _language_array.headers.mode_recyclage.main, _language_array.headers.mode_recyclage.sub.recyclage_combustion,
		create_subtitle(_language_array.recycle_methods.headers.description) + _language_array.recycle_methods.combustion.description +
		create_subtitle(_language_array.recycle_methods.headers.avantage) + _language_array.recycle_methods.combustion.avantage +
		create_subtitle(_language_array.recycle_methods.headers.inconvenient) + _language_array.recycle_methods.combustion.inconvenient +
		create_subtitle(_language_array.recycle_methods.headers.infrastructures) + _language_array.recycle_methods.combustion.infrastructures +
		generate_nav_button());
	reinit ? answers.reset() : '';
}