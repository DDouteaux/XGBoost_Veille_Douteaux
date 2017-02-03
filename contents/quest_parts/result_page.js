var generate_solutions = function(key, co_deux, invest, eau, payback, color){
	var sol_div = '<div class="solution-div">';
	sol_div += '<div class="solution-title"' + (color ? 'style="color:red"' : '') + '>' + _language_array.headers.mode_recyclage.sub['recyclage_' + key] + '</div>';
	sol_div += '<div class="solution-body"' + (color ? 'style="border-color:red"' : '') + '>' + _language_array.aide_decision.result_page['quick_' + key] + '<br>';
	sol_div += '<div class="solution-details"><div class="solution-label">' + _language_array.aide_decision.result_page.production_co2 + '</div>' + co_deux + ' kg CO<div class="sub-text">2</div></div>';
	sol_div += '<div class="solution-details"><div class="solution-label">' + _language_array.aide_decision.result_page.investissement + '</div>' + invest + ' $</div>';
	sol_div += '<div class="solution-details"><div class="solution-label">' + _language_array.aide_decision.result_page.production_eau + '</div>' + (eau==0 ? _language_array.aide_decision.misc.neg : _language_array.aide_decision.misc.modere) + '</div>';
	sol_div += '<div class="solution-details"><div class="solution-label">' + _language_array.aide_decision.result_page.payback + '</div>' + payback + ' ' + (payback == _language_array.aide_decision.misc.aucun ? '' : (payback>1 ? _language_array.aide_decision.misc.annees : _language_array.aide_decision.misc.annee)) + '</div>';
	sol_div += '<br><div class="solution-go-to" data-sol="' + key + '">' + _language_array.aide_decision.result_page.explorer_solution	 + '<i class="icon-go-to fa fa-chevron-right"></i></div></div></div>';
	sol_div += '<div class="solution-after"' + (color ? 'style="border-color:red"' : '') + '></div>';
	return sol_div;
}
	
var set_result_page = function(){
	// Pour avoir les bonnes références quand on revient de visiter une page de solution.
	_current_section = 'main_quest';
	_current_subsection = '';
	load_section('main_quest');
	compute_solutions();
	//console.log(solutions_data);
	//console.log(solutions_in_order);
	init_common_divs(_language_array.headers.aide_decision.main, _language_array.headers.aide_decision.sub.result, 
		generate_progress_bar() + 
		compute_solutions_texts() + 
		generate_buttons('end'));
	$('.solution-go-to').on('click', function(){
		execute_setter_method(this.getAttribute('data-sol'), false);
	})
}

var compute_solutions_texts = function(){
	ret_string = "";
	for(i=0; i<solutions_in_order.length; i++){
		var data = solutions_data[solutions_in_order[i]];
		var quality = answers.payback<data.payback && answers.investments<data.cost;
		ret_string = ret_string + generate_solutions(solutions_in_order[i], data.carbon_dioxyde, data.cost, data.water, data.payback, quality);
	}
	return ret_string;
}

var get_energy_price =  function(country) {
	switch(country){
		case "allemagne": 
			return 0.1598;
		case "russie":
			return 0.0641;
		case "uk":
			return 0.1576;
		case "pologne":
			return 0.125;	
		case "espagne":
			return 0.1413;
		case "ukraine":
			return 0.088;
		case "pays_bas": 
			return 0.1837;
		case "france":
			return 0.1587;
		case "belgique":
			return 0.1587;
		case "rep_tcheque":
			return 0.1315;
		case "chine":
			return 0.1033;
		case "japon":
			return 0.1293;
		case "vietnam":
			return 0.0826;
		case "thailand":
			return 0.1011;
		case "coree_sud":
			return 0.1391;
		case "inde":
			return 0.1087;
		case "usa":
			return 0.0707;
		case "bresil":
			return 0.1217;
		case "mexique":
			return 0.0815;
		case "venezuela":
			return 0.0011;
		case "colombie":
			return 0.075;
		case "canada":
			return 0.0989;
		case "autralie":
			return 0.1011;
		case "afrique_sud":
			return 0.0946;
		case "nigeria":
			return 0.0489;
	}
}		

var compute_solutions = function(){
	all_solutions = ['feed_animal', 'bioethanol1g', 'bioethanol2g','combustion', 'methane', 'feed_homme']
	/*
        Première partie
        -----
        Suppression de solutions pour certains critères
    */

    // Question pays
    if(['russie','japon','vietnam','espagne','thailand','ukraine','rep_tcheque','canada'].indexOf(answers.country) != -1){
		all_solutions.splice(all_solutions.indexOf('feed_animal'),1);
	}
    // Question proximité vaches
	if(answers.cows_proximity == 'non' && all_solutions.indexOf('feed_animal') != -1){
		all_solutions.splice(all_solutions.indexOf('feed_animal'),1);
	}
    if((answers.cows_distance == 'default' || answers.cows_distance > 300) && all_solutions.indexOf('feed_animal') != -1){
        all_solutions.splice(all_solutions.indexOf('feed_animal'),1);
    }
    // Question profil
	if(answers.profile == 'sucre' && all_solutions.indexOf('feed_animal') != -1){
        all_solutions.splice(all_solutions.indexOf('feed_animal'),1);
    } else if ( answers.profile == 'proteine') {
        all_solutions.splice(all_solutions.indexOf('bioethanol1g'),1);
    }
    // Question aspect important
    switch(answers.focus){
        case 'economique':
            all_solutions.splice(all_solutions.indexOf('feed_homme'),1);
            if(all_solutions.indexOf('bioethanol1g') != -1){
        	    all_solutions.splice(all_solutions.indexOf('bioethanol1g'),1);
        	}
            all_solutions.splice(all_solutions.indexOf('bioethanol2g'),1);
            break;
        case 'environnement':
            all_solutions.splice(all_solutions.indexOf('combustion'),1);
            break;
        case 'mise_en_place':
        	if(all_solutions.indexOf('feed_animal') != -1){
            	all_solutions = ['feed_animal', 'feed_homme'];
        	} else {
        		all_solutions = ['feed_homme'];
        	}
            break;
    }
    // Question budget
    if(answers.investments <= 500000){
        if(all_solutions.length > 2){
        	if(all_solutions.indexOf('feed_animal') != -1){
            	all_solutions = ['feed_animal', 'feed_homme'];
        	} else {
        		all_solutions = ['feed_homme'];
        	}
        }
    } else if(all_solutions.indexOf('feed_homme') != -1){
        all_solutions.splice(all_solutions.indexOf('feed_homme'),1);
    }

    console.log(all_solutions);

	solutions_data = {};
	answers.production_volume = answers.production_volume*1000000;
    for(i=0; i<all_solutions.length; i++){
        switch(all_solutions[i]){
            // cout : $
            // payback : ans
            // CO2 : kg
            // eau : 
            case 'feed_animal':
                cost = (answers.production_volume/365 - answers.production_volume/365%1)*70*0.02;
                gain = 50*answers.production_volume*20/1000;
                payback =  Math.ceil(cost/gain);
                carbon_dioxyde = (0.824 + (1.186-0.824)*(answers.production_volume*20/1000)/25)*answers.cows_distance;
                water = 1;
                break;
            case 'bioethanol1g':
                cost = 0.5*0.038*answers.production_volume;
                if(answers.profile == 'sucre'){
                    gain = 2.95*0.02*answers.production_volume;
                } else {
                    gain = 2.95*0.01*answers.production_volume;
                }
                payback = Math.ceil(cost/gain);
                carbon_dioxyde = '?';
                water = 0;
                break;
            case 'bioethanol2g':
                cost = _language_array.aide_decision.misc.eleve;
                gain = '?'
                payback = '>> 3 ' + _language_array.aide_decision.misc.annees;
                carbon_dioxyde = '?';
                water = 0;
                break;
            case 'combustion':
                cost = 2000000;
                gain = 11.5*answers.production_volume*get_energy_price(answers.country);
                payback = Math.ceil(cost/gain);
                carbon_dioxyde = 1.6*answers.production_volume;
                water = 0;
                break;
            case 'methane':
                cost = (answers.production_volume - answers.production_volume%1)*3;
                gain = 17*answers.production_volume*get_energy_price(answers.country);;
				payback = Math.ceil(cost/gain);
                carbon_dioxyde = -0.442*answers.production_volume;
                water = 1;
                break;
            case 'feed_homme':
                cost = 0;
                gain = 0;
                payback = _language_array.aide_decision.misc.aucun;
                carbon_dioxyde = 0;
                water = 0;
                break;
        }
        solutions_data[all_solutions[i]] = {'cost': cost, 'gain': gain, 'payback': payback, 'carbon_dioxyde': carbon_dioxyde, 'water': water};
    }

	answers.production_volume = answers.production_volume/1000000;
    
    console.log('Toutes les solutions possibles');
    console.log(solutions_data);
    /*
        Cinquième partie
        -----
        Décision
    */

    solutions_in_order = [];
    end = false;
    
    switch(answers.focus){
    	case 'mise_en_place':
		    // Si on privilégie la facilité de mise en place l'ordre est déterminé par avance.
		    easy_install_order = ['feed_animal', 'combustion', 'methane', 'bioethanol1g', 'bioethanol2g', 'feed_homme'];
		    for(i=0; i<easy_install_order.length; i++){
		    	if(all_solutions.indexOf(easy_install_order[i]) != -1){
		    		solutions_in_order.push(easy_install_order[i]);
		    	}
		    }
    		break;
    	case 'economique':
		    // Si on privilégie l'économie, on classe les solutions par payback.
		    for(i=0; i<Object.keys(solutions_data).length; i++){
		    	var data = solutions_data[Object.keys(solutions_data)[i]];
		    	for(j=0; j<solutions_in_order.length && !end; j++){
		    		var prov_data = solutions_data[solutions_in_order[j]];
		    		end = (prov_data.payback < data.payback);
		    	}
			    solutions_in_order.insert(j, Object.keys(solutions_data)[i]);
			    end = false;
		    }
    		break;
    	case 'environnement':
    	    // Si on privilégie l'environnement, on classe les solutions par water et carbon_dioxyde.
		    for(i=0; i<Object.keys(solutions_data).length; i++){
		    	var data = solutions_data[Object.keys(solutions_data)[i]];
		    	for(j=0; j<solutions_in_order.length && !end; j++){
		    		var prov_data = solutions_data[solutions_in_order[j]];
		    		end = (prov_data.water < data.water);
		    	}
		    	// On regarde si l'eau a permis de trier les solutions, si ce n'est pas le cas, on regarde le CO2
		    	if(!end){
			    	for(j=0; j<solutions_in_order.length && !end; j++){
			    		var prov_data = solutions_data[solutions_in_order[j]];
			    		end = (test_float(data.carbon_dioxyde) && test_float(prov_data.carbon_dioxyde) && prov_data.carbon_dioxyde < data.carbon_dioxyde);
			    	}
		    	}
			    solutions_in_order.insert(j, Object.keys(solutions_data)[i]);
			    end = false;
		    }    		
    		break;
    	case 'indiff':
    	    // Par défaut, on regarde le gain par années pour savoir qui sera rentable sur le long terme.
		    for(i=0; i<Object.keys(solutions_data).length; i++){
		    	var data = solutions_data[Object.keys(solutions_data)[i]];
		    	for(j=0; j<solutions_in_order.length && !end; j++){
		    		var prov_data = solutions_data[solutions_in_order[j]];
		    		end = (prov_data.gain > data.gain);
		    	}
			    solutions_in_order.insert(j, Object.keys(solutions_data)[i]);
			    end = false;
		    }
    		break;
    }
}

var test_float = function(data){
	return data === parseFloat(data, 10)
}