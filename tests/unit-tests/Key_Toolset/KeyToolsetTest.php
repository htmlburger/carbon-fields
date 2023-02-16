<?php

use Mockery as M;
use Carbon_Fields\Toolset\Key_Toolset;
use Carbon_Fields\Value_Set\Value_Set;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * @coversDefaultClass Carbon_Fields\Toolset\Key_Toolset
 */
class KeyToolsetTest extends WP_UnitTestCase {
	public $subject;

	protected $connected_to_db = false;

	public function setUp(): void {
		global $wpdb;

		if ( ! $this->connected_to_db ) {
			$this->connected_to_db = $wpdb->db_connect();
		}
		$this->subject = new Key_Toolset();
	}

	public function tearDown(): void {
		global $wpdb;

		M::close();
		unset( $this->subject );
		if ( $this->connected_to_db && is_callable( array( $wpdb, 'close' ) ) ) {
			$wpdb->close();
		}
	}

	/**
	 * @covers ::get_sanitized_hierarchy_index
	 */
	public function testGetSanitizedHierarchyIndexCutsOffExtraValues() {
		$full_hierarchy = array( 'field', 'field', 'field', 'field', 'field', 'field' );
		$full_hierarchy_index = array( 1, 2, 3, 4, 5, 6 );
		$expected = array( 1, 2, 3, 4, 5 );
		$this->assertSame( $expected, $this->subject->get_sanitized_hierarchy_index( $full_hierarchy, $full_hierarchy_index ) );
	}

	/**
	 * @covers ::get_sanitized_hierarchy_index
	 */
	public function testGetSanitizedHierarchyIndexIgnoresTheLastField() {
		$full_hierarchy = array( 'field', 'field' );
		$full_hierarchy_index = array( 1, 2 );
		$expected = array( 1 );
		$this->assertSame( $expected, $this->subject->get_sanitized_hierarchy_index( $full_hierarchy, $full_hierarchy_index ) );
	}

	/**
	 * @covers ::get_sanitized_hierarchy_index
	 */
	public function testGetSanitizedHierarchyIndexEnsuresIntegerValues() {
		$full_hierarchy = array( 'field', 'field' );
		$full_hierarchy_index = array( '1' );
		$expected = array( 1 );
		$this->assertSame( $expected, $this->subject->get_sanitized_hierarchy_index( $full_hierarchy, $full_hierarchy_index ) );
	}

	/**
	 * @covers ::get_storage_key
	 */
	public function testGetStorageKeyReturnsSimpleRootKeyForSimpleRootField() {
		$expected = '_field';
		$received = $this->subject->get_storage_key(
			true,
			array( 'field' ),
			array( 0 ),
			0,
			Value_Set::VALUE_PROPERTY
		);
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::get_storage_key
	 */
	public function testGetStorageKeyReturnsSimpleRootKeyForSimpleRootFieldDiscardingExtraInfo() {
		$expected = '_field';
		$received = $this->subject->get_storage_key(
			true,
			array( 'field', 'foo', 'bar' ),
			array( 9, 99, 1, 2, 3 ), // added junk
			999,
			Value_Set::VALUE_PROPERTY
		);
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::get_storage_key
	 */
	public function testGetStorageKeyReturnsComplexKeyForSimpleRootFieldWithCustomProperty() {
		$expected = '_field|foo:bar|9:99|999|some_property_name';
		$received = $this->subject->get_storage_key(
			true,
			array( 'field', 'foo', 'bar' ),
			array( 9, 99 ),
			999,
			'some_property_name'
		);
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::get_storage_key
	 */
	public function testGetStorageKeyReturnsComplexKeyForRootField() {
		$expected = '_field|||999|' . Value_Set::VALUE_PROPERTY;
		$received = $this->subject->get_storage_key(
			false,
			array( 'field' ),
			array( 1, 2, 3 ), // added junk
			999,
			Value_Set::VALUE_PROPERTY
		);
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::get_storage_key
	 */
	public function testGetStorageKeyReturnsComplexKeyForFieldWithDefaultProperty() {
		$expected = '_field|foo:bar|9:99|999|' . Value_Set::VALUE_PROPERTY;
		$received = $this->subject->get_storage_key(
			false,
			array( 'field', 'foo', 'bar' ),
			array( 9, 99 ),
			999,
			Value_Set::VALUE_PROPERTY
		);
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::get_storage_key
	 */
	public function testGetStorageKeyReturnsComplexKeyForFieldWithCustomProperty() {
		$expected = '_field|foo:bar|9:99|999|some_property_name';
		$received = $this->subject->get_storage_key(
			false,
			array( 'field', 'foo', 'bar' ),
			array( 9, 99 ),
			999,
			'some_property_name'
		);
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::get_storage_key_with_index_wildcards
	 */
	public function testGetStorageKeyWithIndexWildcardsReturnsSimpleRootKeyForSimpleRootField() {
		$expected = '_field';
		$received = $this->subject->get_storage_key_with_index_wildcards(
			true,
			array( 'field', 'foo', 'bar' )
		);
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::get_storage_key_with_index_wildcards
	 */
	public function testGetStorageKeyWithIndexWildcardsReturnsComplexKeyForRootField() {
		$expected = '_field|||%|' . Value_Set::VALUE_PROPERTY;
		$received = $this->subject->get_storage_key_with_index_wildcards(
			false,
			array( 'field' ),
			Value_Set::VALUE_PROPERTY,
			'%'
		);
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::get_storage_key_with_index_wildcards
	 */
	public function testGetStorageKeyWithIndexWildcardsReturnsComplexKeyForNestedField() {
		$expected = '_field|foo:bar|%|%|' . Value_Set::VALUE_PROPERTY;
		$received = $this->subject->get_storage_key_with_index_wildcards(
			false,
			array( 'field', 'foo', 'bar' ),
			Value_Set::VALUE_PROPERTY,
			'%'
		);
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::get_storage_key_getter_patterns
	 */
	public function testGetStorageKeyGetterPatternsForSimpleRootField() {
		$expected = array(
			'_field' => Key_Toolset::PATTERN_COMPARISON_EQUAL,
			'_field|' => Key_Toolset::PATTERN_COMPARISON_STARTS_WITH,
		);
		$received = $this->subject->get_storage_key_getter_patterns(
			true,
			array( 'field' )
		);
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::get_storage_key_getter_patterns
	 */
	public function testGetStorageKeyGetterPatternsForRootField() {
		$expected = array(
			'_field|' => Key_Toolset::PATTERN_COMPARISON_STARTS_WITH,
		);
		$received = $this->subject->get_storage_key_getter_patterns(
			false,
			array( 'field' )
		);
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::get_storage_key_getter_patterns
	 */
	public function testGetStorageKeyGetterPatternsForNestedField() {
		$expected = array(
			'_field|foo:bar|' => Key_Toolset::PATTERN_COMPARISON_STARTS_WITH,
			'_field|foo:bar:' => Key_Toolset::PATTERN_COMPARISON_STARTS_WITH,
		);
		$received = $this->subject->get_storage_key_getter_patterns(
			false,
			array( 'field', 'foo', 'bar' )
		);
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::get_storage_key_deleter_patterns
	 */
	public function testGetStorageKeyDeleterPatternsForSimpleRootField() {
		$expected = array(
			'_field' => Key_Toolset::PATTERN_COMPARISON_EQUAL,
			'_field|||' => Key_Toolset::PATTERN_COMPARISON_STARTS_WITH,
		);
		$received = $this->subject->get_storage_key_deleter_patterns(
			false,
			true,
			array( 'field' ),
			array( 0 )
		);
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::get_storage_key_deleter_patterns
	 */
	public function testGetStorageKeyDeleterPatternsForNestedField() {
		$expected = array(
			'_field|foo:bar|1:2|' => Key_Toolset::PATTERN_COMPARISON_STARTS_WITH,
		);
		$received = $this->subject->get_storage_key_deleter_patterns(
			false,
			false,
			array( 'field', 'foo', 'bar' ),
			array( 1, 2 )
		);
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::get_storage_key_deleter_patterns
	 */
	public function testGetStorageKeyDeleterPatternsForComplexRootField() {
		$expected = array(
			'_field|' => Key_Toolset::PATTERN_COMPARISON_STARTS_WITH,
		);
		$received = $this->subject->get_storage_key_deleter_patterns(
			true,
			false,
			array( 'field' ),
			array( 0 )
		);
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::get_storage_key_deleter_patterns
	 */
	public function testGetStorageKeyDeleterPatternsForComplexNestedField() {
		$expected = array(
			'_field|' => Key_Toolset::PATTERN_COMPARISON_STARTS_WITH,
		);
		$received = $this->subject->get_storage_key_deleter_patterns(
			true,
			false,
			array( 'field', 'foo', 'bar' ),
			array( 1, 2 )
		);
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::storage_key_patterns_to_sql
	 */
	public function testStorageKeyPatternsToSql() {
		$table_column = '`option_name`';
		$patterns = array(
			'_field' => Key_Toolset::PATTERN_COMPARISON_EQUAL,
			'_field|' => Key_Toolset::PATTERN_COMPARISON_STARTS_WITH,
		);
		$expected = ' ( `option_name` = "_field" OR `option_name` LIKE "\_field|%" ) ';
		$received = $this->subject->storage_key_patterns_to_sql( $table_column, $patterns );
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::storage_key_patterns_to_sql
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 */
	public function testStorageKeyPatternsToSqlThrowsExceptionOnInvalidComparison() {
		$table_column = '`option_name`';
		$patterns = array(
			'_field' => 'non_existant_comparison_type',
		);
		$this->subject->storage_key_patterns_to_sql( $table_column, $patterns );
	}

	/**
	 * @covers ::storage_key_matches_any_pattern
	 */
	public function testStorageKeyMatchesAnyPatternEqualComparisonTrue() {
		$storage_key = '_field';
		$patterns = array(
			'_field' => Key_Toolset::PATTERN_COMPARISON_EQUAL,
		);
		$this->assertSame( true, $this->subject->storage_key_matches_any_pattern( $storage_key, $patterns ) );
	}

	/**
	 * @covers ::storage_key_matches_any_pattern
	 */
	public function testStorageKeyMatchesAnyPatternEqualComparisonFalse() {
		$storage_key = '_field';
		$patterns = array(
			'_different_field' => Key_Toolset::PATTERN_COMPARISON_EQUAL,
		);
		$this->assertSame( false, $this->subject->storage_key_matches_any_pattern( $storage_key, $patterns ) );
	}

	/**
	 * @covers ::storage_key_matches_any_pattern
	 */
	public function testStorageKeyMatchesAnyPatternStartsWithComparisonTrue() {
		$storage_key = '_field|child_field';
		$patterns = array(
			'_field|' => Key_Toolset::PATTERN_COMPARISON_STARTS_WITH,
		);
		$this->assertSame( true, $this->subject->storage_key_matches_any_pattern( $storage_key, $patterns ) );
	}

	/**
	 * @covers ::storage_key_matches_any_pattern
	 */
	public function testStorageKeyMatchesAnyPatternStartsWithComparisonFalse() {
		$storage_key = '_field|child_field';
		$patterns = array(
			'_different_field|' => Key_Toolset::PATTERN_COMPARISON_STARTS_WITH,
		);
		$this->assertSame( false, $this->subject->storage_key_matches_any_pattern( $storage_key, $patterns ) );
	}

	/**
	 * @covers ::storage_key_matches_any_pattern
	 */
	public function testStorageKeyMatchesAnyPatternMixedComparisonTrue() {
		$storage_key = '_field|child_field';
		$patterns = array(
			'_field|child_field' => Key_Toolset::PATTERN_COMPARISON_EQUAL,
			'_field|' => Key_Toolset::PATTERN_COMPARISON_STARTS_WITH,
		);
		$this->assertSame( true, $this->subject->storage_key_matches_any_pattern( $storage_key, $patterns ) );
	}

	/**
	 * @covers ::storage_key_matches_any_pattern
	 */
	public function testStorageKeyMatchesAnyPatternMixedComparisonTrueForSecond() {
		$storage_key = '_field|child_field';
		$patterns = array(
			'_field' => Key_Toolset::PATTERN_COMPARISON_EQUAL,
			'_field|child_field' => Key_Toolset::PATTERN_COMPARISON_EQUAL,
		);
		$this->assertSame( true, $this->subject->storage_key_matches_any_pattern( $storage_key, $patterns ) );
	}

	/**
	 * @covers ::storage_key_matches_any_pattern
	 */
	public function testStorageKeyMatchesAnyPatternMixedComparisonFalse() {
		$storage_key = '_field|child_field';
		$patterns = array(
			'_different_field|child_field' => Key_Toolset::PATTERN_COMPARISON_EQUAL,
			'_different_field|' => Key_Toolset::PATTERN_COMPARISON_STARTS_WITH,
		);
		$this->assertSame( false, $this->subject->storage_key_matches_any_pattern( $storage_key, $patterns ) );
	}

	/**
	 * @covers ::storage_key_matches_any_pattern
	 * 
	 * @expectedException Carbon_Fields\Exception\Incorrect_Syntax_Exception
	 */
	public function testStorageKeyMatchesAnyPatternThrowsExceptionOnInvalidComparison() {
		$storage_key = '_field';
		$patterns = array(
			'_field' => 'non_existant_comparison_type',
		);
		$this->subject->storage_key_matches_any_pattern( $storage_key, $patterns );
	}

	/**
	 * @covers ::is_segments_array_full
	 */
	public function testIsSegmentsArrayFull() {
		$partial_segments = array( 'segment' );
		$this->assertSame( false, $this->subject->is_segments_array_full( $partial_segments ) );

		$full_segments = array( 'segment', 'segment', 'segment', 'segment', 'segment' );
		$this->assertSame( true, $this->subject->is_segments_array_full( $full_segments ) );
	}

	/**
	 * @covers ::storage_key_to_segments_array
	 */
	public function testStorageKeyToSegmentsArray() {
		$storage_key = '_field|foo:bar|0|1|' . Value_Set::VALUE_PROPERTY;
		$expected = array( 'field', 'foo:bar', '0', '1', Value_Set::VALUE_PROPERTY );
		$this->assertSame( $expected, $this->subject->storage_key_to_segments_array( $storage_key ) );
	}

	/**
	 * @covers ::segment_to_segment_values_array
	 */
	public function testSegmentToSegmentValuesArray() {
		$storage_key = 'foo:bar:baz';
		$expected = array( 'foo', 'bar', 'baz' );
		$this->assertSame( $expected, $this->subject->segment_to_segment_values_array( $storage_key ) );
	}

	/**
	 * @covers ::parse_storage_key
	 */
	public function testParseStorageKeySimpleRootKey() {
		$storage_key = '_field';
		$expected = array(
			'root' => 'field',
			'hierarchy' => array(),
			'hierarchy_index' => array(),
			'value_index' => 0,
			'property' => Value_Set::VALUE_PROPERTY,
			'full_hierarchy' => array( 'field' ),
		);
		$this->assertSame( $expected, $this->subject->parse_storage_key( $storage_key ) );
	}

	/**
	 * @covers ::parse_storage_key
	 */
	public function testParseStorageKeyComplexRootKey() {
		$storage_key = '_field||1|2|some_property_name';
		$expected = array(
			'root' => 'field',
			'hierarchy' => array(),
			'hierarchy_index' => array( 1 ),
			'value_index' => 2,
			'property' => 'some_property_name',
			'full_hierarchy' => array( 'field' ),
		);
		$this->assertSame( $expected, $this->subject->parse_storage_key( $storage_key ) );
	}

	/**
	 * @covers ::parse_storage_key
	 */
	public function testParseStorageKeyNestedKey() {
		$storage_key = '_field|foo:bar|1:2|3|some_property_name';
		$expected = array(
			'root' => 'field',
			'hierarchy' => array( 'foo', 'bar' ),
			'hierarchy_index' => array( 1, 2 ),
			'value_index' => 3,
			'property' => 'some_property_name',
			'full_hierarchy' => array( 'field', 'foo', 'bar' ),
		);
		$this->assertSame( $expected, $this->subject->parse_storage_key( $storage_key ) );
	}
}
