function set_animal_feed_method(reinit){
	//console.log('[INFO] Setting animal feed layout')
	_current_section = 'animal_feed';
	load_section('animal_feed', _language_array.headers.mode_recyclage.main, _language_array.headers.mode_recyclage.sub.recyclage_feed_animal, 
		create_subtitle(_language_array.recycle_methods.headers.description) + _language_array.recycle_methods.feed_animal.description +
		create_subtitle(_language_array.recycle_methods.headers.avantage) + _language_array.recycle_methods.feed_animal.avantage +
		create_subtitle(_language_array.recycle_methods.headers.inconvenient) + _language_array.recycle_methods.feed_animal.inconvenient +
		create_subtitle(_language_array.recycle_methods.headers.infrastructures) + _language_array.recycle_methods.feed_animal.infrastructures +
		generate_nav_button());
	reinit ? answers.reset() : '';
}