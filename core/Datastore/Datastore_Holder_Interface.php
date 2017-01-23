<?php

namespace Carbon_Fields\Datastore;

interface Datastore_Holder_Interface {

	public function has_default_datastore();

	public function set_datastore( Datastore_Interface $datastore, $set_as_default );

	public function get_datastore();

}