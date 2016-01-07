(function($){
    $.fn.seAccordion = function(options) {
        var defaults = {
            header: 'h1',
            content: 'div',
            speed: 'slow',
            easing: 'swing',
            singleOpen: true,
            allowAllClosed: false,
            triggerEvent: 'click'
        };
        var params = $.extend(defaults, options);

        return this.each(function() {
            var obj = $(this),
                triggerEvent = params.triggerEvent !== 'mouseover' ? 'touchstart click' : 'mouseover',
                slideOptions = {
                    duration: params.speed,
                    easing: params.easing
                };

            if(params.singleOpen === true)
            {
                var nbrOpenend = obj.children(params.content + '.opened').length;

                if(nbrOpenend > 1)
                    obj.children(params.content + '.opened:not(:first)').removeClass('opened');
                else if(nbrOpenend === 0 && params.allowAllClosed === false)
                    obj.children(params.content).first().addClass('opened');
            }

            obj.children(params.header).css('cursor', 'pointer');
            obj.children(params.content + ':not(.opened)').css('display', 'none');

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
                    if(params.singleOpen === true && params.allowAllClosed === false)
                        return;

                    $(this).next(params.content).stop().removeClass('opened').slideUp(slideOptions);
                }
            });
        });
    };
})(jQuery);
