function set_human_feed_method(reinit){
	//console.log('[INFO] Setting human feed layout');
	_current_section = 'human_feed';
	load_section('human_feed', _language_array.headers.mode_recyclage.main, _language_array.headers.mode_recyclage.sub.recyclage_feed_homme,
		create_subtitle(_language_array.recycle_methods.headers.description) + _language_array.recycle_methods.feed_homme.description +
		create_subtitle(_language_array.recycle_methods.headers.avantage) + _language_array.recycle_methods.feed_homme.avantage +
		create_subtitle(_language_array.recycle_methods.headers.inconvenient) + _language_array.recycle_methods.feed_homme.inconvenient +
		create_subtitle(_language_array.recycle_methods.headers.infrastructures) + _language_array.recycle_methods.feed_homme.infrastructures +
		generate_nav_button());
	reinit ? answers.reset() : '';
}