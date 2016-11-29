# Carbon Fields Unit Tests

## Initial Setup

1) Install [PHPUnit](http://phpunit.de/) by following their [installation guide](https://phpunit.de/getting-started.html). If you've installed it correctly, this should display the version:

    $ phpunit --version

2) Install WordPress and the WP Unit Test lib using the `install.sh` script. Change to the plugin root directory and type:

    $ tests/bin/install.sh <db-name> <db-user> <db-password> [db-host] [wp-version]

Sample usage:

    $ tests/bin/install.sh carbon_fields_tests root root

**Important**: Make sure that the `<db-name>` database has been created. Note that all data will be removed during testing.

## Running Tests

Simply change to the plugin root directory and type:

    $ phpunit

Refer to the [phpunit command line test runner reference](https://phpunit.de/manual/current/en/phpunit-book.html#textui) for more information and command line options.