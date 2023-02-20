# Release Guide

## `htmlburger/carbon-fields`

1. Bump version numbers in `config.php` and `package.json` according to SemVer
1. Commit to `development` with commit message "Bump vX.X.X"
1. Merge all changes for the new version into `master`
1. Checkout `master`
1. Run `npm install && npm run build`
1. `git push origin master`
1. Create a new release in [Github](https://github.com/htmlburger/carbon-fields/releases/new) from the `master` branch
1. Enter the new version you set in `config.php` for `Tag version` and `Title`
1. Add a changelog for `Description`
1. Click `Publish release`

## `htmlburger/carbon-fields-plugin`

1. Update the version in `carbon-fields-plugin.php`, `readme.txt` and `composer.json` for `htmlburger/carbon-fields` to match the newly released version
1. Commit to `master`
1. Create a new release in [Github](https://github.com/htmlburger/carbon-fields-plugin/releases/new) from the `master` branch
1. Enter the new version for `Tag version` and `Title` (you can skip the changelog)
1. Click `Publish release`
