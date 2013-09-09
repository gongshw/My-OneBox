//mob_config.js
var mobcfg = (function($) {
    "use strict";

    var add = function(ext) {
        chrome.extension.sendRequest({
            fun: "add",
            param: ext,
        });
    };

    var remove = function(ext_name) {
        chrome.extension.sendRequest({
            fun: "remove",
            param: ext_name,
        });
    };

    var list = function(call_back) {
        chrome.extension.sendRequest({
            fun: "list",
        }, function(ext_list) {
            call_back(ext_list);
        });
    };

    var run = function(ext) {
        if (ext.type === 'local') {
            var fun = eval('(function(key_word){' + ext.script + '})');
            return fun;
        } else if (ext.type === 'remote') {
            //TODO
            return null;
        } else {
            throw 'unkown ext type';
        }
    };

    var needInit = function(call_back) {
        chrome.extension.sendRequest({
            fun: "firstRun",
        }, function(result) {
            call_back(result);
        });
    };

    return {
        add: add,
        update: add,
        remove: remove,
        list: list,
        run: run,
        needInit: needInit
    };

})(jQuery);
