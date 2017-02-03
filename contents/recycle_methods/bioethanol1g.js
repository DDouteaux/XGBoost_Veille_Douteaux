function set_bioethanol1g_method(reinit){
	//console.log('[INFO] Setting bioethanol 1G layout');
	_current_section = 'bioethanol1g';
	load_section('bioethanol1g', _language_array.headers.mode_recyclage.main, _language_array.headers.mode_recyclage.sub.recyclage_bioethanol1g, 
		create_subtitle(_language_array.recycle_methods.headers.description) + _language_array.recycle_methods.bioethanol1g.description +
		create_subtitle(_language_array.recycle_methods.headers.avantage) + _language_array.recycle_methods.bioethanol1g.avantage +
		create_subtitle(_language_array.recycle_methods.headers.inconvenient) + _language_array.recycle_methods.bioethanol1g.inconvenient +
		create_subtitle(_language_array.recycle_methods.headers.infrastructures) + _language_array.recycle_methods.bioethanol1g.infrastructures +
		generate_nav_button());
	reinit ? answers.reset() : '';
}