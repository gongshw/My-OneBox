//mob_config.js
var mobd = (function($) {
    "use strict";

    var dispatch = function(key_word, callback) {
        var ext_list = [];
        mobcfg.list(function(cfg_list) {
            for (var index in cfg_list) {
                //TODO
                if (key_word && key_word.match(cfg_list[index]['pattern'])) {
                    ext_list.push(cfg_list[index]);
                }
            }
            switch (ext_list.length) {
                case 0:
                    callback();
                    break;
                default:
                    callback(ext_list);
            }
        });
    };

    return {
        dispatch: dispatch,
    };

})(jQuery);