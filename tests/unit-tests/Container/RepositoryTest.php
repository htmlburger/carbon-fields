<?php

use \Carbon_Fields\Container\Repository;
use \Carbon_Fields\Exception\Incorrect_Syntax_Exception;

class RepositoryTest extends WP_UnitTestCase {
	
	public function setUp() {
		$this->repository = new Repository();
	}

	public function tearDown() {
		$this->repository = null;
	}
}