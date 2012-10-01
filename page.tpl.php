<?php

/**
 * @file
 * Local implementation of page.tpl.php:
 * - stack and width are used in tandem to create center-aligned page regions.
 * - deco stacks are used for background imagery.  These are absolutely positioned and render outside the flow of the content
 * - Use wrapper-header, wrapper-content and wrapper-footer to scope styles to these areas
 */
?>

<div id="page" class="page clearfix tb-terminal">

  <div id="page-deco-top" class="deco-page-top deco-page deco-top deco tb-scope tb-scope-prefer">
    <div class="width deco-width inner tb-terminal">
      <div class="layer-a layer"></div>
      <div class="layer-b layer"></div>
      <div class="layer-c layer"></div>
      <div class="layer-d layer"></div>
    </div>
  </div>
  
  <div id="page-deco-bottom" class="deco-page-bottom deco-page deco-bottom deco tb-scope tb-scope-prefer">
    <div class="width deco-width inner tb-terminal">
      <div class="layer-a layer"></div>
      <div class="layer-b layer"></div>
      <div class="layer-c layer"></div>
      <div class="layer-d layer"></div>
    </div>
  </div>
    
  <div class="page-width tb-scope">
    <div class="lining tb-terminal"> <!-- Broken out of .page-width to avoid update issues with margin: 0 auto being undone -->
    
  		<!-- Component: header -->
  		<header>
  			<div id="header">
  				<div class="wrapper">
  					<h1 class="logo"><span>AEGON</span><img src="/sites/all/themes/aegon/media/aegon-logo-header.gif" alt="AEGON logo" /></h1>
  					<ul class="navigation-portals">
  						<li><strong><A title="" href="">Particulier</A></strong></li>
  						<li><A title="" href="">Zakelijk</A></li>
  					</ul>
  					<div class="login-search-wrapper">
  						<form class="quick-search" name="searchBox" action="" method="">
  								<input type="hidden" name="view" value="Search results"/>
  								<input type="text" class="ie-attr-text" name="zoekterm" id="zoek"/>
  								<span class="btn"><input type="submit" value="Zoek" class="ie-attr-submit"/></span>
  						</form>
  						<a href="" class="login"><strong>Inloggen</strong></a>
  					</div>
  					<div class="nav-additional-wrapper">
  						<ul class="navigation-additional">
  							<li class="first-child"><A title="" href="">Over AEGON</A></li>
  							<li><A title="Intermediair" href="">Intermediair</A></li>
  							<li><A title="Vacatures" href="">Vacatures</A></li>
  							<li><A title="Sitemap" href="">Sitemap</A></li>
  							<li><A title="Contact" href="">Contact</A></li>
  						</ul>
  						<ul class="navigation-socialmedia">
  							<li class="facebook"><a href="https://www.facebook.com/AEGON.NL" title="AEGON op Facebook">Facebook</a></li>
  							<li class="twitter"><a href="http://twitter.com/#!/AEGON_NL" title="AEGON op Twitter">Twitter</a></li>
  							<li class="youtube"><a href="http://www.youtube.com/aegonnederland" title="AEGON op YouTube">YouTube</a></li>
  							<li class="rss"><a href="http://www.aegon.nl/algemeen/rss/rss/" title="RSS feeds van AEGON">RSS</a></li>
  						</ul>
  					</div>
  					<nav>
  						<div class="dropdown-navigation">
                                
                <?php if ($main_menu): ?>
                  <?php print theme('links__system_main_menu', array('links' => $main_menu)); ?>
                <?php endif; ?>
                
  						</div>
  					</nav>
  				</div>
  			</div>
  		</header>

   
      
      <!-- AEGON CONTENT -->
      
  		<div id="content">
  			<div class="wrapper addprint">
  				<h1><?php print $title; ?></h1>
  				<div class="header">
  					<div class="main">
              <?php print render($page['precontent_first']); ?>
              
              <?php if ($tabs): ?>
                <div class="tabs"><?php print render($tabs); ?></div>
              <?php endif; ?>
              <?php if(!empty($page['help'])) : ?>
                <div class="help"><?php print render($page['help']); ?></div>
              <?php endif; ?>
              <?php if ($action_links): ?>
                <ul class="action-links"><?php print render($action_links); ?></ul>
              <?php endif; ?>
              <?php if(!empty($page['content'])) : ?>
                <div id="content-area" class="content-area"><?php print render($page['content']); ?></div>
              <?php endif; ?>
              
              
              
              
              
  					</div>
  					<div class="service">
  						<!-- Component: contact menu -->
  						<ul class="service-menu">
  							<li class="phone"><a href="" >Bel met AEGON</a></li>
  							<li class="mail"><a href="" >E-mail sturen</a></li>
  							<li class="questions">Chat (even geduld)</li>
  						</ul>
  						<!-- End Component: contact menu -->
              
              <?php print render($page['sidebar_a']); ?>
						
  					</div>
            
            
    				<div class="sidebar">
    				<!-- Component: inloggen -->
            <?php if(!empty($page['sidebar_b'])) : ?>
    							<div class="box-default">
    								<div class="inner">
    								  <?php print render($page['sidebar_b']); ?>
                    
    								</div>
    							</div>
                <?php endif; ?>
    							<!-- End component: inloggen -->	
    				</div>
            
            
            
  				</div>
  				<div class="grid">






  				</div>
  			</div>
  		</div>
      
      
      
      
      <!-- /AEGON CONTENT -->
      
     

<!-- Component: footer -->
<footer>
	<div id="footer">
		<div class="wrapper">
			<div>
        <div class="quick-links">
          <?php print render($page['footer_first']); ?>
        </div>
        <div class="quick-links">
          <?php print render($page['footer_second']); ?>
        </div>
        <div class="quick-links">
          <?php print render($page['footer_third']); ?>
        </div>
        <div class="quick-links">
          <?php print render($page['footer_fourth']); ?>
        </div>
			</div>
			<div class="footer">
				<ul class="navigation-additional">
					<li class="first-child"><strong><A title="" href="http://test2.intra.aegon.nl/particulier/">Particulier</A></strong></li>
					<li><A title="" href="">Zakelijk</A></li>
					<li><A title="" href="">Intermediair</A></li>
					<li><A title="" href="">Over AEGON</A></li>
				</ul>
				<ul class="navigation-additional alt">
					<li class="first-child">&copy; 2012 AEGON 
					<li><A title="" href="">Disclaimer</A> 
					<li><A title="" href="">Privacy</A></li>
				</ul>
			</div>
		</div>
	</div>
</footer>
<!-- End Component: footer -->
