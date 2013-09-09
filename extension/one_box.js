var mob = (function($) {

    var show = function(result) {

    };

    return {
        show: show
    }

})(jQuery);

$(function() {

    var key_words = $('#lst-ib').val();

    var result = dispatch_key_word(key_words);
    if (result) {
        var newli = $("<li/>", {
            class: "vk_c my_box_container"
        });

        var newTitle = $('<div/>', {
            text: result.title,
            class: 'vk_gy vk_h'
        });
        newli.append(newTitle);

        var newDescription = $('<div/>', {
            text: result.description,
            class: 'vk_gy vk_h'
        });
        newli.append(newDescription);

        newli.append($('<div class="box_foot">powered by <i>My One Box</i></div>'));
        var rso = $("#rso");
        //rso.appendChidren(newli);
        rso.prepend(newli);
    } else {

    };
})