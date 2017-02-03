var form_for_common_infra = function(){
	return generate_radio_buttons_group(_language_array.validation, 'common_infra', 'form_common_infra', default_or_former('common_infra','non'));
}

var form_for_invest_percent_in_common_infra = function(){
	return generate_number_input('common_infra_invest_percent', 0, 100, default_or_former('common_infra_invest_percent',50), '%');
}

var form_for_payback_percent_in_common_infra = function(){
	return generate_number_input('common_infra_payback_percent', 0, 100, default_or_former('common_infra_payback_percent',50), '%');
}

var adapt_common_infra_form = function(){
	if($('input[name=common_infra]:checked').val() == 'oui'){
		$('<div id="common_infra_yes">' + generate_form_label(_language_array.aide_decision.form_labels.invest_percent_mise_en_commun) + form_for_invest_percent_in_common_infra() + generate_form_label(_language_array.aide_decision.form_labels.payback_percent_mise_en_commun) + form_for_payback_percent_in_common_infra() + '</div>').insertAfter($('#form_common_infra'));
	} else {
		$('#common_infra_yes').remove();
	}
}

var set_common_infra_question = function(){
	init_common_divs(_language_array.headers.aide_decision.main, _language_array.headers.aide_decision.sub.common_infra, generate_progress_bar() + generate_form_label(_language_array.aide_decision.form_labels.mise_en_commun_infra) + form_for_common_infra() + generate_buttons());
	adapt_common_infra_form();
	$('input[name=common_infra]').on('change', function(){
		adapt_common_infra_form();
	})
}