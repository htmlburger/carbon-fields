### Internal Glossary

#### `value_set`

Represents a single field value. `Complex_Field` uses a `value_tree` instead which contains a `value_set` for every child field including the `Complex_Field` itself.

_Note: The `Value_Set` class will always return a fully formatted `value_set` with all of it's properties OR `null`_

##### Schema

	array(
		array(
			'value' => <mixed>,
			property<string> => <mixed>,
			...
		),
		...
	)
