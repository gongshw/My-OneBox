$(function() {

    var exts = [];

    mobcfg.list(function(ext_list) {
        exts = ext_list;
        for (var index in ext_list) {
            console.log(JSON.stringify(ext_list[index]));
            $('#ext_ul').append($('<li/>').append($('<a/>', {
                text: ext_list[index]['name'],
                id: ext_list[index]['name'],
                href: '#' + ext_list[index]['name'],
                'data-index': index
            })));

        }

        $('#ext_ul a').click(
            function(event) {
                var ext_item = exts[$(this).data('index')];
                $('#currend_ext').text($(this).text());
                $('#ext_script').text(ext_item.script);
                $('#ext_pattern').val(ext_item.pattern);
                $('#cfg_panel').removeClass().addClass('bounceIn animated');
            }
        );
    });

});