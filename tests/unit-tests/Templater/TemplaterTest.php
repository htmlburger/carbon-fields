<?php

use \Mockery as M;
use \Carbon_Fields\Templater\Templater;

/**
 * @coversDefaultClass \Carbon_Fields\Templater\Templater
 */
class TemplaterTest extends WP_UnitTestCase {

	public function setUp() {
		$this->subject = new Templater();
	}

	public function tearDown() {
		M::close();
		unset( $this->subject );
	}

	/**
	 * @covers ::add_template
	 * @covers ::get_template
	 */
	public function testGetTemplateReturnsHtml() {
		$name = 'tpl1';
		$html = '<p></p>';
		$expected = $html;
		$this->subject->add_template( $name, $html );
		$received = $this->subject->get_template( $name );
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::add_template
	 * @covers ::get_template
	 */
	public function testGetTemplateReturnsFirstHtmlForDuplicatedRegistrations() {
		$name = 'tpl1';
		$html1 = '<p></p>';
		$html2 = '<strong></strong>';
		$expected = $html1;
		$this->subject->add_template( $name, $html1 );
		$this->subject->add_template( $name, $html2 );
		$received = $this->subject->get_template( $name );
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::get_template
	 */
	public function testGetTemplateReturnsNullForUnregisteredTemplate() {
		$expected = null;
		$received = $this->subject->get_template( 'unregistered_template' );
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::add_template
	 * @covers ::get_templates
	 */
	public function testGetTemplatesReturnsTemplate() {
		$name = 'tpl1';
		$html = '<p></p>';
		$expected = array( $name => $html );
		$this->subject->add_template( $name, $html );
		$received = $this->subject->get_templates();
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::add_template
	 * @covers ::get_templates
	 */
	public function testGetTemplatesReturnsAllTemplates() {
		$name1 = 'tpl1';
		$name2 = 'tpl2';
		$html = '<p></p>';
		$expected = array( $name1 => $html, $name2 => $html );
		$this->subject->add_template( $name1, $html );
		$this->subject->add_template( $name2, $html );
		$received = $this->subject->get_templates();
		$this->assertSame( $expected, $received );
	}

	/**
	 * @covers ::add_template
	 * @covers ::render_templates
	 */
	public function testRenderTemplatesRendersAllTemplates() {
		$name1 = 'tpl1';
		$name2 = 'tpl2';
		$html = '<p></p>';
		$expected = <<<'EOT'
<script type="text/html" id="crb-tmpl-tpl1">
	<p></p>
</script>
<script type="text/html" id="crb-tmpl-tpl2">
	<p></p>
</script>
EOT;
		$this->subject->add_template( $name1, $html );
		$this->subject->add_template( $name2, $html );
		ob_start();
		$this->subject->render_templates();
		$received = ob_get_clean();
		$this->assertSame( $expected, $received );
	}
}