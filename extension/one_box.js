var mob = (function($) {
    "use strict";

    var CLASS_OUTER_BOX = 'vk_c my_box_container';
    var CLASS_BOX_TITLE = 'vk_gy vk_h';

    var show = function(result) {
        var newli = $("<li/>", {
            class: CLASS_OUTER_BOX
        });

        var newTitle = $('<div/>', {
            text: result.title,
            class: CLASS_BOX_TITLE
        });
        newli.append(newTitle);

        var newDescription = $('<div/>', {
            text: result.description,
            class: CLASS_BOX_TITLE
        });
        newli.append(newDescription);

        newli.append($('<div class="box_foot">powered by <a target="_blank" href="' +
            chrome.extension.getURL("options_page/index.html") + '"><i>My One Box</i></a></div>'));
        var rso = $("#rso");
        rso.prepend(newli);
    };

    var key = function() {
        return $('#lst-ib').val();
    };

    return {
        key: key,
        show: show,
        ajax: $.ajax,
        get: $.get,
    };

})(jQuery);

$(function() {

    var key_words = mob.key();

    mobd.dispatch(key_words, function(ext_list) {
        for (var index in ext_list) {
            var fun = mobcfg.run(ext_list[index]);
            var result = fun(key_words);
            if (typeof result === 'undefined') {

            } else {
                mob.show(result);
            }
        }
    });
});