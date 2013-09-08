function dispatch_key_word(key_word) {


	if (key_word in dispatch_map) {
		return dispatch_map[key_word](key_word);
	};
}

var dispatch_map = [];

dispatch_map["农历"] = function(key_word) {
	return getNongli(key_word);
}
