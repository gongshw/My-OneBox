//mobdemo.js
var mobdemo = (function($) {
    "use strict";
    var eat_what = function() {
        return {
            title: '吃什么?',
            description: rm_food()
        };
    };

    return {
        nongli: getNongli,
        eat_what:eat_what
    };

})(jQuery);

mobcfg.needInit(function(needInit) {
    if (needInit) {
        mobcfg.add({
            name: '今天的农历',
            pattern: '农历|nl|阴历|yl',
            type: 'local',
            script: 'return mobdemo.nongli("农历");',
        });

        mobcfg.add({
            name: '吃啥呢?',
            pattern: '.*吃什么.*',
            type: 'local',
            script: 'return mobdemo.eat_what();',
        });
    }
});
