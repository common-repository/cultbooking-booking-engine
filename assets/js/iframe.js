jQuery(document).ready(function($){
  
    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
    
    // Listen to message from child window
    eventer(messageEvent, function (e) {
        if (e.data == "back-to-top") {
            if ($(".chbecm-booking-engine").parent() != undefined) {
                $("html,body").animate({
                    scrollTop: $(".chbecm-booking-engine").parent().offset().top
                }, 500);
            }
        }
    }, false);

    $(window).on("message", function(event) {
        if (event.originalEvent.origin !== "https://neo.cultbooking.com") {
            return;
        }
        if (event.originalEvent.data.height) {
            var iframe = $('.chbecm-booking-engine');
            iframe.css('height', event.originalEvent.data.height + 'px');
        }
    });
    
});