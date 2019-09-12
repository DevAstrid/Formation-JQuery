/* *********************************************************************
                    * LA DISPONIBILITE DU DOM *

    A partir du moment, où mon DOM cad l'ensemble de l'arborescence
    de ma page HTML est complètement chargée; je pmeux commencer à 
    utiliser JQuery.

    Je vais mettre l'ensemble de mon code dans une fonction qui 
    sera appelée AUTOMATIQUEMENT par JQuery lorsque le DOm  sera 
    entièrement défini.

    3 façons de le faire:

********************************************************************* */
/***********  methode  1 *******************/
//fonction de call back (rappel)
jQuery(document).ready(function () {
    // -- Ici mon DOM est entièrement chargé
    // -- Je peux écrire mon code
    console.log('JQuery is ready');
});

/*******  methode  2  (la plus use) *******/
$(document).ready(function () {
    console.log('JQuery is ready');
});

/********  methode  3 (privilégiée) *******/
$(function () {
    console.log('JQuery is ready');
});

/***  methode  4 (ECMA6 pas recommandé) ***/
$(() =>{
    //alert('Bienvnue dans ce cours JQ')

    //en JS
    document.getElementById('texteEnJQ').innerHTML = 
        '<strong>  Mon texte en JS </strong> ';
    //innerHTML permet d'affecter du contenu html dans la page

    //en JQ
   $('#texteEnJQ').html ('<strong>  Mon texte en JS </strong> ');
    //.html est une fonction




});

