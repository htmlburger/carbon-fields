<?php

use Mockery as M;
use Carbon_Fields\Pimple\Container as PimpleContainer;
use Carbon_Fields\Container\Repository as ContainerRepository;
use Carbon_Fields\Field\Field;
use Carbon_Fields\Service\Legacy_Storage_Service_v_1_5;
use Carbon_Fields\Toolset\Key_Toolset;
use Carbon_Fields\Toolset\WP_Toolset;
use Carbon_Fields\Container\Condition\Factory as ConditionFactory;

/**
 * @coversDefaultClass Carbon_Fields\Service\Legacy_Storage_Service_v_1_5
 */
class LegacyStorageServicev15Test extends WP_UnitTestCase {
	public $datastore;
	public $container;
	public $subject;
	public $legacy_storage_array;

	public function setUp(): void {
		$ioc = new PimpleContainer();
		
		$ioc['container_repository'] = function( $ioc ) {
			return new ContainerRepository();
		};
		
		$ioc['key_toolset'] = function( $ioc ) {
			return new Key_Toolset();
		};
		
		$ioc['wp_toolset'] = function( $ioc ) {
			return new WP_Toolset();
		};

		$ioc['container_condition_factory'] = function( $ioc ) {
			return new ConditionFactory( $ioc['container_conditions'] );
		};

		$ioc['container_condition_translator_array'] = function( $ioc ) {
			return new \Carbon_Fields\Container\Fulfillable\Translator\Array_Translator( $ioc['container_condition_factory'] );
		};

		$ioc['container_condition_translator_json'] = function( $ioc ) {
			return new \Carbon_Fields\Container\Fulfillable\Translator\Json_Translator( $ioc['container_condition_factory'] );
		};

		$ioc['container_condition_fulfillable_collection'] = $ioc->factory( function( $ioc ) {
			return M::mock( 'Carbon_Fields\\Container\\Fulfillable\\Fulfillable_Collection' )->shouldIgnoreMissing();
		} );

		$ioc['container_conditions'] = function() {
			return new PimpleContainer();
		};

		\Carbon_Fields\Carbon_Fields::instance()->install( $ioc );

		$this->datastore = M::mock( 'Carbon_Fields\\Datastore\\Key_Value_Datastore' )->makePartial();
		$this->container = M::mock( 'Carbon_Fields\\Container\\Container', array( 'container_id', 'container_title', 'container_type', $ioc['container_condition_fulfillable_collection'], $ioc['container_condition_translator_json'] ) )->makePartial();
		$this->container->set_datastore( $this->datastore );
		$this->container->add_fields( array(
			Field::make( 'text', 'crb_legacy_text' ),
			Field::make( 'association', 'crb_legacy_association', 'Legacy Association' ),
			Field::make( 'set', 'crb_legacy_set', 'Legacy Set' )
				->add_options( array( 'one'=>'One', 'two'=>'Two', 'three'=>'Three' ) ),
			Field::make( 'map', 'crb_legacy_map', 'Legacy Map' ),
			
			Field::make( 'complex', 'crb_home_sections', __( 'Sections', 'crb' ) )
				->add_fields( 'features', __('Features', 'crb'), array(
					Field::make( 'complex', 'columns', __( 'Columns', 'crb' ) )
						->add_fields('col1of4', __('Column 1 of 4', 'crb'), $this->crb_get_column_fields())
						->add_fields('col3of4', __('Column 3 of 4', 'crb'), array(
							Field::make('complex', 'rows', __('Rows', 'crb'))
								->add_fields('row', __('Row', 'crb'), array(
									Field::make('complex', 'cols', __('Columns', 'crb'))
										->add_fields('col1of3', __('Column 1 of 3', 'crb'), array(
											Field::make('map', 'map', __('Map', 'crb')),
											Field::make('set', 'set', __('Set', 'crb'))
												->add_options( array( 'one'=>'One', 'two'=>'Two', 'three'=>'Three' ) ),
											Field::make('association', 'association', __('Association', 'crb')),
											Field::make('file', 'image', __('Image', 'crb')),
											Field::make('text', 'link', __('Link', 'crb')),
										))
										->add_fields('col2of3', __('Column 2 of 3', 'crb'), $this->crb_get_column_fields())
								))
						))
				) ),
		) );
		$ioc['container_repository']->register_container( $this->container );

		$this->legacy_storage_array = array(
			'_crb_legacy_text' => 'lorem ipsum',
			'_crb_legacy_map' => '19.0759837,72.87765590000004',
			'_crb_legacy_map-address' => 'Mumbai',
			'_crb_legacy_map-zoom' => '6',
			'_crb_legacy_map-lng' => '72.87765590000004',
			'_crb_legacy_map-lat' => '19.0759837',
			'_crb_legacy_set' => 'a:1:{i:0;s:3:"one";}',
			'_crb_legacy_association' => 'a:1:{i:0;s:12:"post:post:47";}',

			'_crb_home_sections_features-_columns_0_col3of4-_rows_0_row-_cols_0_col1of3-_map_0-lat' => '40.7127837',
			'_crb_home_sections_features-_columns_0_col3of4-_rows_0_row-_cols_0_col1of3-_map_0-lng' => '-74.0059413',
			'_crb_home_sections_features-_columns_0_col3of4-_rows_0_row-_cols_0_col1of3-_map_0-zoom' => '5',
			'_crb_home_sections_features-_columns_0_col3of4-_rows_0_row-_cols_0_col1of3-_map_0-address' => 'New York',
			'_crb_home_sections_features-_columns_0_col3of4-_rows_0_row-_cols_0_col1of3-_map_0' => '40.7127837,-74.0059413',
			'_crb_home_sections_features-_columns_0_col3of4-_rows_0_row-_cols_0_col1of3-_set_0' => 'a:2:{i:0;s:3:"one";i:1;s:5:"three";}',
			'_crb_home_sections_features-_columns_0_col3of4-_rows_0_row-_cols_0_col1of3-_association_0' => 'a:1:{i:0;s:12:"post:post:47";}',
			'_crb_home_sections_features-_columns_0_col3of4-_rows_0_row-_cols_0_col1of3-_image_0' => '',
			'_crb_home_sections_features-_columns_0_col3of4-_rows_0_row-_cols_0_col1of3-_link_0' => 'lorem ipsum',

			'_crb_home_sections_features-_columns_0_col3of4-_rows_0_row-_cols_0_col2of3-_image_1' => '65',
			'_crb_home_sections_features-_columns_0_col3of4-_rows_0_row-_cols_0_col2of3-_link_1' => 'http://example.com/some-internal-path/some-file.php?some_query_arg=someval',
			'_crb_home_sections_features-_columns_0_col3of4-_rows_0_row-_cols_0_col2of3-_light_1' => '',
			'_crb_home_sections_features-_columns_0_col3of4-_rows_0_row-_cols_0_col2of3-_content_1' => '<h3><strong>Regular</strong> Sofas</h3>[button link="#"]More Details[/button]',
		);

		$this->subject = M::mock( 'Carbon_Fields\\Service\\Legacy_Storage_Service_v_1_5', array( $ioc['container_repository'], $ioc['key_toolset'] ) )->shouldDeferMissing();
	}

	public function tearDown(): void {
		M::close();
		unset( $this->subject );
	}

	protected function crb_get_column_fields() {
		return array(
			Field::make('file', 'image', __('Image', 'crb')),
			Field::make('text', 'link', __('Link', 'crb'))
				->set_width(50)
				->set_required(true),
			Field::make('checkbox', 'light', __('Lighter Section', 'crb'))
				->set_width(50),
			Field::make('rich_text', 'content', __('Content', 'crb')),
		);
	}

	/**
	 * @covers ::get_storage_array_for_datastore
	 */
	public function testGetStorageArrayForDatastoreReturnsResultsForAllFields() {
		$this->subject->shouldReceive( 'get_legacy_storage_array' )->andReturn( $this->legacy_storage_array );
		$expected = array(
			'_crb_legacy_text' => 'lorem ipsum',
			'_crb_legacy_text|||0|value' => 'lorem ipsum',
			'_crb_legacy_map|||0|value' => '19.0759837,72.87765590000004',
			'_crb_legacy_map|||0|lat' => '19.0759837',
			'_crb_legacy_map|||0|lng' => '72.87765590000004',
			'_crb_legacy_map|||0|zoom' => '6',
			'_crb_legacy_map|||0|address' => 'Mumbai',
			'_crb_legacy_set|||0|value' => 'one',
			'_crb_legacy_association|||0|value' => 'post:post:47',

			'_crb_home_sections|||0|value' => 'features',
			'_crb_home_sections|columns|0|0|value' => 'col3of4',
			'_crb_home_sections|columns:rows|0:0|0|value' => 'row',
			
			'_crb_home_sections|columns:rows:cols|0:0:0|0|value' => 'col1of3',
			'_crb_home_sections|columns:rows:cols:map|0:0:0:0|0|value' => '40.7127837,-74.0059413',
			'_crb_home_sections|columns:rows:cols:map|0:0:0:0|0|lat' => '40.7127837',
			'_crb_home_sections|columns:rows:cols:map|0:0:0:0|0|lng' => '-74.0059413',
			'_crb_home_sections|columns:rows:cols:map|0:0:0:0|0|zoom' => '5',
			'_crb_home_sections|columns:rows:cols:map|0:0:0:0|0|address' => 'New York',
			'_crb_home_sections|columns:rows:cols:set|0:0:0:0|0|value' => 'one',
			'_crb_home_sections|columns:rows:cols:set|0:0:0:0|1|value' => 'three',
			'_crb_home_sections|columns:rows:cols:association|0:0:0:0|0|value' => 'post:post:47',
			'_crb_home_sections|columns:rows:cols:image|0:0:0:0|0|value' => '',
			'_crb_home_sections|columns:rows:cols:link|0:0:0:0|0|value' => 'lorem ipsum',

			'_crb_home_sections|columns:rows:cols|0:0:0|1|value' => 'col2of3',
			'_crb_home_sections|columns:rows:cols:image|0:0:0:1|0|value' => '65',
			'_crb_home_sections|columns:rows:cols:link|0:0:0:1|0|value' => 'http://example.com/some-internal-path/some-file.php?some_query_arg=someval',
			'_crb_home_sections|columns:rows:cols:light|0:0:0:1|0|value' => '',
			'_crb_home_sections|columns:rows:cols:content|0:0:0:1|0|value' => '<h3><strong>Regular</strong> Sofas</h3>[button link="#"]More Details[/button]',
		);
		$received = $this->subject->get_storage_array_for_datastore( $this->datastore );
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::get_storage_array
	 */
	public function testGetStorageArrayReturnsSingleFieldValue() {
		$this->subject->shouldReceive( 'get_legacy_storage_array' )->andReturn( array(
			'_crb_legacy_text' => 'lorem ipsum',

			// added junk which should be discarded
			'_crb_legacy_junk_key' => 'lorem ipsum',
			'_crb_legacy_junk_key-_child_0' => 'lorem ipsum',
		) );
		$expected = array(
			(object) array(
				'key' => '_crb_legacy_text',
				'value' => 'lorem ipsum',
			),
			(object) array(
				'key' => '_crb_legacy_text|||0|value',
				'value' => 'lorem ipsum',
			),
		);

		$container_fields = $this->container->get_fields();
		$legacy_text_field = $container_fields[0];
		$patterns = \Carbon_Fields\Carbon_Fields::resolve( 'key_toolset' )->get_storage_key_getter_patterns(
			$legacy_text_field->is_simple_root_field(),
			array_merge( $legacy_text_field->get_hierarchy(), array( $legacy_text_field->get_base_name() ) )
		);
		$received = $this->subject->get_storage_array( $this->datastore, $patterns );
		$this->assertEquals( $expected, $received );
	}
}