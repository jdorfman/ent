<header id="header">
	<div class="holder">
		<div class="alignright">
			<nav>
				<ul>
					<?php
					$homeActive = $pricingActive = "";
					if ($_SERVER['SCRIPT_NAME'] === "/pricing/index.php") {
						$pricingActive = 'active';	
					} else if (($_SERVER['SCRIPT_NAME'] === "/index.php")) {
						$homeActive = 'active';	
					}
					?>
					<li class="<?php echo $homeActive; ?>"><a href="/">HOME</a></li>
					<li class="<?php echo $pricingActive; ?>"><a href="/pricing/">PRICING</a></li>
					<li><a id="topnavcalc" href="/pricing/#calc">CALCULATOR</a></li>
					<li><a id="topnavtrial" href="#popup-contact" class="fancybox">FREE TRIAL</a></li>
				</ul>
			</nav>
			<a href="#popup-contact" class="fancybox"><strong class="phone"><span class="replace-number">+1 (877) 629-2361</span></strong></a>
		</div>
		<strong class="logo"><a href="/">MaxCDN Enterprise</a></strong>
	</div>
</header><!-- /header -->
