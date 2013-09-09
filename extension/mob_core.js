//mob_core.js
var mobcore = (function() {
    "use strict";

    var add = function(ext) {
        window.localStorage['ext_' + ext.name] = JSON.stringify(ext);
    };

    var remove = function(ext_name) {
        window.localStorage['ext_' + ext_name] = null;
    };

    var list = function() {
        var config_list = [];
        for (var index in window.localStorage) {
            if (index.indexOf('ext_') === 0) {
                config_list.push(JSON.parse(window.localStorage[index]));
            }
        }
        return config_list;
    };

    var firstRun = function () {
        if (typeof window.localStorage['runned'] === 'undefined') {
            window.localStorage['runned'] = 'runned';
            return true;
        } else{
            return false;
        }
    };

    return {
        add: add,
        update: add,
        remove: remove,
        list: list,
        firstRun:firstRun,
    };

})();

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        var feedback = {};
        var target_fun = mobcore[request.fun];
        if (typeof request.param === 'undefined') {
            feedback = target_fun();
        } else {
            feedback = target_fun(request.param);
        }
        sendResponse(feedback);
    });