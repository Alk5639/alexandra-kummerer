$(document).ready(function() {

    // COUNT UP
    var options = {
        useEasing: true, 
        useGrouping: true, 
        separator: ',', 
        decimal: '.', 
    };

    // GPA
    var gpa = new CountUp('gpa', 0, 3.8, 2, 2.5, options);
    if (!gpa.error) {
        gpa.start();
    }
    else {
        console.error(gpa.error);
    }

    // OWL CAROUSEL
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        smartSpeed: 500, 
        responsive:{
            0:{
                items:1
            }
        }
    }); 
});