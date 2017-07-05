/*
 * jQuery.bind-first library v0.2.3
 * Copyright (c) 2013 Vladimir Zhuravlev
 *
 * Released under MIT License
 * @license
 *
 * Date: Thu Feb  6 10:13:59 ICT 2014
 **/

(function($) {
	var splitVersion = $.fn.jquery.split(".");
	var major = parseInt(splitVersion[0]);
	var minor = parseInt(splitVersion[1]);

	var JQ_LT_17 = (major < 1) || (major == 1 && minor < 7);

	function eventsData($el) {
		return JQ_LT_17 ? $el.data('events') : $._data($el[0]).events;
	}

	function moveHandlerToTop($el, eventName, isDelegated) {
		var data = eventsData($el);
		var events = data[eventName];

		if (!JQ_LT_17) {
			var handler = isDelegated ? events.splice(events.delegateCount - 1, 1)[0] : events.pop();
			events.splice(isDelegated ? 0 : (events.delegateCount || 0), 0, handler);

			return;
		}

		if (isDelegated) {
			data.live.unshift(data.live.pop());
		} else {
			events.unshift(events.pop());
		}
	}

	function moveEventHandlers($elems, eventsString, isDelegate) {
		var events = eventsString.split(/\s+/);
		$elems.each(function() {
			for (var i = 0; i < events.length; ++i) {
				var pureEventName = $.trim(events[i]).match(/[^\.]+/i)[0];
				moveHandlerToTop($(this), pureEventName, isDelegate);
			}
		});
	}

	function makeMethod(methodName) {
		$.fn[methodName + 'First'] = function() {
			var args = $.makeArray(arguments);
			var eventsString = args.shift();

			if (eventsString) {
				$.fn[methodName].apply(this, arguments);
				moveEventHandlers(this, eventsString);
			}

			return this;
		}
	}

	// bind
	makeMethod('bind');

	// one
	makeMethod('one');

	// delegate
	$.fn.delegateFirst = function() {
		var args = $.makeArray(arguments);
		var eventsString = args[1];

		if (eventsString) {
			args.splice(0, 2);
			$.fn.delegate.apply(this, arguments);
			moveEventHandlers(this, eventsString, true);
		}

		return this;
	};

	// live
	$.fn.liveFirst = function() {
		var args = $.makeArray(arguments);

		// live = delegate to the document
		args.unshift(this.selector);
		$.fn.delegateFirst.apply($(document), args);

		return this;
	};

	// on (jquery >= 1.7)
	if (!JQ_LT_17) {
		$.fn.onFirst = function(types, selector) {
			var $el = $(this);
			var isDelegated = typeof selector === 'string';

			$.fn.on.apply($el, arguments);

			// events map
			if (typeof types === 'object') {
				for (type in types)
					if (types.hasOwnProperty(type)) {
						moveEventHandlers($el, type, isDelegated);
					}
			} else if (typeof types === 'string') {
				moveEventHandlers($el, types, isDelegated);
			}

			return $el;
		};
	}

})(jQuery);
