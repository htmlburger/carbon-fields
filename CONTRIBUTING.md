# Development environment

This setup is only meant for development use - for production follow [Quickstart](https://carbonfields.net/docs/carbon-fields-quickstart/?crb_version=2-1-0) instead.

1. Setup a blank WordPress installation
1. Add a new `carbon-fields` directory inside your theme of choice and switch to it
    1. Fork this repository and clone your fork
    1. Run `git checkout development`
    1. Run `composer install`
    1. Run `npm install` or `yarn install`
    1. Run `npm run build` or `yarn run build`
1. Add the following code to the top of your functions.php file:
    ```php
    use Carbon_Fields\Container;
    use Carbon_Fields\Field;

    add_action( 'carbon_fields_register_fields', 'crb_attach_theme_options' );
    function crb_attach_theme_options() {
        Container::make( 'theme_options', __( 'Theme Options', 'crb' ) )
            ->add_fields( array(
                Field::make( 'text', 'crb_text', 'Text Field' ),
            ) );
    }

    add_action( 'after_setup_theme', 'crb_load' );
    function crb_load() {
        require_once( 'carbon-fields/vendor/autoload.php' );
        \Carbon_Fields\Carbon_Fields::boot();
    }
    ```

# Preparation

1. Make sure your local branches are up to date
1. Always start your contribution branches from the `development` branch
1. If you are making JavaScript contributions, run `npm run dev` or `yarn run dev` to run the dev build task (tracks file changes)

## Pull Request Process

1. Target the `development` branch for pull requests
1. Include a detailed description of your contribution
1. Make sure you follow the current codestyle
