<?php

namespace Carbon_Fields\Installer;

use Carbon_Fields\Pimple\Container as PimpleContainer;

interface Installer {

	/**
	 * Install dependencies in IoC container
	 * 
	 * @param  PimpleContainer $ioc
	 */
	public static function install( PimpleContainer $ioc );
}