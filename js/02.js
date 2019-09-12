/* *********************************************************************
                      LES SELECTEURS

********************************************************************* */

// -- Format: $('selecteur')
// -- En JQ, tous les sélecteurs CSS sont disponible.........

$(function() { // DOM is ready !

    l = (e) => {console.log(e);}

    // -- Sélectionner les balises SPAN
    l( document.getElementsByTagName('span') ); //en JS
    l ( $('span')); //en JQ

    // -- Sélectionner Mon menu par son ID
    l( document.getElementById('menu') );
    l ( $('#menu'));

    // -- Sélectionner via une classe
    l( document.getElementsByClassName('maClasse') );
    l ( $('.maclasse'));

     // -- Sélectionner par propriété
     l ( $('[href]'));
     l ( $('[href = "https://google.fr"] '));


});