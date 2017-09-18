# Release Guide

## `htmlburger/carbon-fields`

1. Merge all changes for the new version into `master`
1. Bump version numbers in `config.php` and `package.json` according to SemVer
1. Commit bumped version changes to `master`
1. Checkout `release`
1. Merge `master` into `release`. NEVER merge `release` into any other branch - only merge branches INTO `release`.
1. Run `npm install && npm run build`
1. You should now have changes ONLY in the /assets/dist/ directory - any changes outside this directory mean that you have a dirty working copy. Never commit anything else into `release` except /assets/dist/ changes.
1. Commit the /assets/dist/ changes to `release`
1. `git push --all`
1. Create a new release in [Github](https://github.com/htmlburger/carbon-fields/releases/new) from the `release` branch
1. Enter the new version you set in `config.php` for `Tag version` and `Title`
1. Add a changelog for `Description`
1. Click `Publish release`

## `htmlburger/carbon-fields-plugin`

1. Update the version in `carbon-fields-plugin.php`, `readme.txt` and `composer.json` for `htmlburger/carbon-fields` to match the newly released version
1. Commit to `master`
1. Create a new release in [Github](https://github.com/htmlburger/carbon-fields-plugin/releases/new) from the `master` branch
1. Enter the new version for `Tag version` and `Title` (you can skip the changelog)
1. Click `Publish release`

# Internal Glossary

## `value_set`

Represents a single field value. `Complex_Field` uses a `value_tree` instead which contains a `value_set` for every child field including the `Complex_Field` itself.

_Note: The `Value_Set` class will always return a fully formatted `value_set` with all of its properties OR `null`_

### Schema

	array(
		array(
			'value' => <mixed>,
			property<string> => <mixed>,
			...
		),
		...
	)
