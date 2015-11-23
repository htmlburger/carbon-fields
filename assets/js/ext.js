(function($) {

	/**
	 * Case insensitive :contains selector for jQuery
	 *
	 * @uses: $('selector:containsInsensitive(value)')
	 */
	$.extend($.expr[':'], {
		containsInsensitive: function(elem, i, match, array) {
			return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
		}
	});

	/**
	 * Method for moving event handler to the beginning of the event queue so that this handler will be executed first,
	 * regardless of how many other handlers you had already attached.
	 *
	 * @uses: $('selector').bindFirst('click', handler)
	 */
	$.fn.bindFirst = function(/*String*/ eventType, /*[Object], Function*/ eventData, /*Function*/ handler) {
		var indexOfDot = eventType.indexOf(".");
		var eventNameSpace = indexOfDot > 0 ? eventType.substring(indexOfDot) : "";

		eventType = indexOfDot > 0 ? eventType.substring(0, indexOfDot) : eventType;
		handler = handler == undefined ? eventData : handler;
		eventData = typeof eventData == "function" ? {} : eventData;

		return this.each(function() {
			var $this = $(this);
			var currentAttrListener = this["on" + eventType];

			if (currentAttrListener) {
				$this.bind(eventType, function(e) {
					return currentAttrListener(e.originalEvent); 
				});

				this["on" + eventType] = null;
			}

			$this.bind(eventType + eventNameSpace, eventData, handler);

			var allEvents = $._data($this[0], "events");
			var typeEvents = allEvents[eventType];
			var newEvent = typeEvents.pop();
			typeEvents.unshift(newEvent);
		});
	};

})(jQuery);