function set_bioethanol2g_method(reinit){
	//console.log('[INFO] Setting bioethanol 2G layout');
	_current_section = 'bioethanol2g';
	load_section('bioethanol2g', _language_array.headers.mode_recyclage.main, _language_array.headers.mode_recyclage.sub.recyclage_bioethanol2g,
		create_subtitle(_language_array.recycle_methods.headers.description) + _language_array.recycle_methods.bioethanol2g.description +
		create_subtitle(_language_array.recycle_methods.headers.avantage) + _language_array.recycle_methods.bioethanol2g.avantage +
		create_subtitle(_language_array.recycle_methods.headers.inconvenient) + _language_array.recycle_methods.bioethanol2g.inconvenient +
		create_subtitle(_language_array.recycle_methods.headers.infrastructures) + _language_array.recycle_methods.bioethanol2g.infrastructures +
		generate_nav_button());
	reinit ? answers.reset() : '';
}