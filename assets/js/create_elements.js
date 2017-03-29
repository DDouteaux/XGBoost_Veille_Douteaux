/*
 *
 *  Méthodes pour créer autmatiquement des éléments avec des styles donnés
 *
 */

// Génération d'un sous titre (bleu gras avec petit soulignement)
var create_subtitle = function(content){
	return '<div class="subtitle">' + content + '</div>';
}

var create_collapsable_box = function(title, content){
	return '<div class="collapsable_container"><div class="collapse_title">' + title + '<i class="icon fa fa-chevron-up collapse_arrow"></i></div><div class="collapse_content">' + content + '</div></div>';
}

var init_collapsable_box = function(){
	$('.collapse_title').on('click', function(e){
		$(e.target.parentNode).find('.collapse_content').toggle();
		var arrow = $(e.target).find('.collapse_arrow')[0];
		if(arrow.className.search('down') != -1){
			arrow.setAttribute('class', arrow.className.replace('down', 'up'));
		} else {
			arrow.setAttribute('class', arrow.className.replace('up', 'down'));
		}
	});
	$('.collapse_title').click();
}

var create_list_item = function(class_name, content, onclick_method){
	return '<div class="' + class_name + '" ' + (typeof onclick_method == 'undefined' ? '' : 'onclick="' + onclick_method + '"') + '><i class="icon fa fa-beer"></i>' + content + '</div>';
}

// Sélection de la section dans le panneau latéral, ie. on enlève la surbrillance sur toute section 
// précédemment sélectionnée, et on sélectionne la section mentionnée.
//
// Params :
//		- key : la clé de la section a sélectionner
var select_section = function(key){
	$('.sidebar-part, .sidebar-subpart').removeClass('selected')
	$('.sidebar-part, .sidebar-subpart').filter('[data-load="' + key + '"]').addClass('selected')
}

/*
 *
 * Méthodes et objets utilisés pour la gestion de la barre de
 * navigation de l'application.
 *
 */

// Gestion des zones de la barre de navigation qui contiennent des
// sous-parties. Pour cette gestion, au clic on récupère la var
// section_name qui est enregistrée dans le HTML pour dérouler la
// sous-section correspondante.
// L'intérêt de fonctionner par ce système de clé-valeur, est que 
// la div contenant les sous-sections n'est pas comprise dans la
// div du titre principal, et ainsi on éviter de ferme l'onglet au
// clic sur une sous-section. 
$('.sidebar-with-children').on('click', function(e){
	var section_name = this.getAttribute('data-section-name');
	var associated_sections = $('.sidebar-subpart-container[data-section="' + section_name + '"]');
	if(associated_sections.css('display') == 'none' || associated_sections.css('display') == ''){
		$(this).find('.icon')[0].className = 'icon fa fa-chevron-up';
		associated_sections.css('display', 'block');
	} else {
		$(this).find('.icon')[0].className = 'icon fa fa-chevron-down';
		associated_sections.css('display', 'none');
	}
});

$.each($('.sidebar-with-children'), function(index, value) {
	$(value).find('.icon')[0].className = 'icon fa fa-chevron-down';
});


/*
 *
 * Méthodes utilitaires
 *
 */

 // Méthode pour échanger les clés et les valeurs d'un objet JSON.
 //
 // Params: 
 //		- json : le JSON sur lequel exécuter l'opération.
var swap = function(json){
  var ret = {};
  for(var key in json){
    ret[json[key]] = key;
  }
  return ret;
}

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};
