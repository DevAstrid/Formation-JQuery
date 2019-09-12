/* *********************************************************************
                      LE CHAINAGE DE METHODES

********************************************************************* */

$ (function() {
    //jQuery is ready

    // -- Je souhaite cacher toutes les divs de ma page HTLM
    /* $('div').hide ("slow", function (){
        //alert('Fin du Hide');
        //NB: La fonction s'exécutera pour chaque élément du sélecteur.
        //Ici 2 fois

        //On joue un peu avec le css
        $('div').css('background-color', 'yellow');
        $('div').css('color', 'red');

        //On fait réapparaitre les div
        $('div').show ("slow");

    }); */

    /**
     * EN utilisant le chainage de méthode, oln peut faire s'enchainer
     * plusisuers fonctions les unes après les autgres
     * -----------------------------------------------
     * Toujours en partant d'un sélecteur JQ $('...')
     */

    // $('p').hide(2000).css('color', 'blue').css('font-style', '30px').delay(2000).show(500);
     $('p')
     .hide(2000)
     .css({'color': 'blue', 'font-style': '30px'})
     .delay(2000)
     .show(500);



});