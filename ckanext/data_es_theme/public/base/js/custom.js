/*
* Customization and Configuration Scripts JS
*
*    
* @project DATA ES Theme
* @version 1.0
* @date 17/04/2019
* @package layout
* @author atendimento@prodest.es.gov.br
* @copyright 2019 PRODEST.
*/

//<![CDATA[
+function ($) {



    /*========================================================
    * Font Size (Zoom in / Out) 
    ========================================================== */

    $(function () {

        var fontSizeBootstrap = [];
        fontSizeBootstrap[0] = "xx-small";
        fontSizeBootstrap[1] = "x-small";
        fontSizeBootstrap[2] = "small";
        fontSizeBootstrap[3] = "medium";
        fontSizeBootstrap[4] = "large";
        fontSizeBootstrap[5] = "x-large";
        //fontSizeBootstrap[6] = "xx-large";
        var index = 2;



        if (typeof $.cookie('font-size') !== "undefined") {
            if ($.cookie('font-size') !== 'null') {
                index = $.cookie('font-size');
                $('body').addClass(fontSizeBootstrap[index]);
            }
        }

        $(".jfontsize-d2").each(function(){
            $(this).click(function () {
                $('body').removeClass(fontSizeBootstrap[index]);

                if ($.cookie('font-size') != 'null') {
                    $("#layout-header").css({
                        "background": "none"
                    });
                    $(".col-gov-bar-navigation .menu li a").css("color", "black");
                }
                $.cookie('font-size', 'null');
                index = 2;
                setTimeout(function () {
                    $("#layout-header").css("background", "");
                    $(".col-gov-bar-navigation .menu li a").css("color", "");
                    window.dispatchEvent(new Event('resize'));
                }, 300);

            });
        });

        $(".jfontsize-p2").each(function(){
            $(this).click(function () {

                if (index < 5) {

                    var newIndex = index + 1;
                    zoomFontSize(index + 1);
                }
            });
        });

        $(".jfontsize-m2").each(function(){
            $(this).click(function () {
                if (index > 0) {
                    var newIndex = index - 1;
                    zoomFontSize(newIndex);
                }
            });
        });

        function zoomFontSize(newIndex) {

            $('body').removeClass(fontSizeBootstrap[index]);
            $('body').addClass(fontSizeBootstrap[newIndex]);
            $.cookie('font-size', newIndex);
            index = newIndex;

            $("#layout-header").css({
                "background": "none"
            });
            $(".col-gov-bar-navigation .menu li a").css("color", "black");
            setTimeout(function () {
                $("#layout-header").css("background", "");
                $(".col-gov-bar-navigation .menu li a").css("color", "");
                window.dispatchEvent(new Event('resize'));
            }, 300);
            
        }


    });

    fontsize = function () {
        if ($(window).width() < 360) {
            var fontSize = $(".mobile-content .logo-governo  .container-img-logo-governo").width() * 0.048; // 4,4% of container width
            var top = $(".mobile-content .logo-governo  .container-img-logo-governo").width() * 0.235; // 23,5% of container width
            var right = $(".mobile-content .logo-governo  .container-img-logo-governo").width() * 0.39; // 39% of container width
            $(".mobile-content .logo-governo  .container-img-logo-governo .name-secretariat").css('font-size', fontSize);
            $(".mobile-content .logo-governo  .container-img-logo-governo .name-secretariat").css('top', top);
            $(".mobile-content .logo-governo  .container-img-logo-governo .name-secretariat").css('right', right);
        }
    };
    $(window).resize(fontsize);
    $(document).ready(fontsize);    


        
}(jQuery);
//]]>