$(function () {
    function initialize() { //calls all the functions for the page
        respMenu(); //responsive menu is created
    }
    
//Function Declarations
    function respMenu () { //makes the site navigation a responsive nav.
        var nav = $('#nav');
        var menuNode = "<div id='menu'><h1>☰</h1></div>";
        displayNav();
        nav.before(menuNode);

        $('#menu').click(function () {
            nav.toggle();
        });
        
        function displayNav() {
            if (window.innerWidth > 768) {
                nav.removeClass('hidden');          
                nav.removeAttr('style');
            } else {
                nav.addClass('hidden');
            }
        }

        $(window).resize(function () {
            displayNav();
        });
    }
    

    
    
//initializing the functions
    initialize();
    console.log('Adrian hides in the console.');
});
