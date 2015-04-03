// Case insensitive :contains selector for jQuery
// @uses :containsInsensitive
jQuery.extend(jQuery.expr[':'], {
	containsInsensitive: function(elem, i, match, array) {
		return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
	}
});