(function($){
    $.fn.seAccordion = function(options) {
        var defaults = {
            header: 'h1',
            content: 'div',
            speed: 'slow',
            easing: 'swing',
            singleOpen: true,
            triggerEvent: 'click'
        };
        var params = $.extend(defaults, options);

        return this.each(function() {
            var obj = $(this),
                triggerEvent = 'touchstart click',
                slideOptions = {
                    duration: params.speed,
                    easing: params.easing
                };

            if(params.singleOpen === true)
                obj.children(params.content).first().addClass('opened');

            obj.children(params.header).css('cursor', 'pointer');
            obj.children(params.content + ':not(.opened)').css('display', 'none');

            if(params.triggerEvent === 'hover')
                triggerEvent = 'mouseover';

            obj.children(params.header).off().on(triggerEvent, function(e) {
                e.preventDefault();

                if(!$(this).next(params.content).hasClass('opened'))
                {
                    if(params.singleOpen === true)
                        obj.children(params.content + '.opened').stop().removeClass('opened').slideUp(slideOptions);

                    $(this).next(params.content).stop().addClass('opened').slideDown(slideOptions);
                }
                else
                {
                    if(params.singleOpen === true)
                        return;

                    $(this).next(params.content).stop().removeClass('opened').slideUp(slideOptions);
                }
            });
        });
    };
})(jQuery);
