<?php
$filePrepender = (substr_count($_SERVER['SCRIPT_NAME'], '/') > 1) ? "../" : "";
?>

<footer>
	<div class="holder">
		<div class="col">
			<h3 class="orange">Products</h3>
			<ul class="list">
				<li><a href="http://www.maxcdn.com/solutions/">Overview</a></li>
				<li><a href="http://www.maxcdn.com/products/edgecaching/">EdgeCaching</a></li>
				<li><a href="http://www.maxcdn.com/products/edgerules/">EdgeRules</a></li>
				<li><a href="http://www.maxcdn.com/products/edgessl/">EdgeSSL</a></li>
				<li><a href="http://www.maxcdn.com/products/edgesecurity/">EdgeSecurity</a></li>
			</ul>

			<h3 class="orange">Legal</h3>
			<ul class="list">
				<li><a href="http://www.maxcdn.com/legal/terms/">Legal Terms</a></li>
				<li><a href="http://www.maxcdn.com/legal/privacy/">Privacy Policy</a></li>
				<li><a href="http://www.maxcdn.com/legal/dmca/">DMCA	</a></li>
				<li><a href="http://www.maxcdn.com/legal/aup/">AUP</a></li>
			</ul>
		</div>
		<div class="col">
			<h3 class="orange">SOLUTIONS</h3>
			<ul class="list">
				<li><a href="http://www.maxcdn.com/solutions/advertising/">Advertising</a></li>
				<li><a href="http://www.maxcdn.com/solutions/cms/">CMS</a></li>
				<li><a href="http://www.maxcdn.com/solutions/gaming/">Gaming</a></li>
			</ul>

			<h3 class="orange">Support</h3>
			<ul class="list">
				<li><a href="http://support.maxcdn.com/kb/">Knowledge Base</a></li>
				<li><a href="http://support.maxcdn.com/cms-plugins/">CMS Plugins</a></li>
				<li><a href="http://docs.maxcdn.com/">Developers/API</a></li>
				<li><a href="http://www.maxcdn.com/forum/">Forum</a></li>
				<li><a href="http://www.maxcdn.com/company/affiliates/">Affiliates</a></li>
				<li><a href="http://status.maxcdn.com/">Status</a></li>
			</ul>
		</div>
		<div class="col">
			<h3 class="orange">Company</h3>
			<ul class="list">
				<li><a href="http://www.maxcdn.com/company/customers/">Customers</a></li>
				<li><a href="http://www.maxcdn.com/company/careers/">Careers</a></li>
				<li><a href="http://blog.maxcdn.com/">Blog</a></li>
				<li><a href="http://www.maxcdn.com/company/team/">Team</a></li>
				<li><a href="http://www.maxcdn.com/press/">Press</a></li>
				<li><a href="http://www.maxcdn.com/contact/">Contact</a></li>
			</ul>
		</div>
		<div class="col col-2">
			<h3 class="orange">Telephone</h3>
			<dl class="dlist">
				<dt>Toll Free</dt>
				<dd><span class="str">+1 (877) MAXCDN-1</span><span class="str">+1 (877) 629-2361</span></dd>
				<dt>International</dt>
				<dd>+1 (323) 313-1206</dd>
				<dt>Fax</dt>
				<dd>+1 (323) 843-9584</dd>
			</dl>
			<h3 class="orange">Address</h3>
			<address>
				<span class="str">MaxCDN Enterprise</span>
				<span class="str">3575 Cahuenga Blvd. West, Suite 330</span>
				<span class="str">Los Angeles, CA 90068</span>
			</address>
		</div>
		<div class="col col-3">
			<div class="box">
				<a href="#" class="btn" onclick="return startWidget('chat');">CHAT NOW</a>
				<strong class="phone"><span class="replace-number">+1 (877) 629-2361</span></strong>
				<span class="str orange">Supercharge your site</span>
				<ul class="socials">
					<li><a href="https://twitter.com/maxcdn" target="_blank" class="ico">twitter</a></li>
					<li><a href="https://www.facebook.com/MaxCDN" target="_blank" class="ico ico-2">facebook</a></li>
					<li><a href="https://plus.google.com/105665919150587532072/" target="_blank" class="ico ico-3">google+</a></li>
				</ul>
			</div>
		</div>
	</div><!-- /holder -->
</footer><!-- /footer -->

<div class="hidden-popup">
	<div class="popup" id="popup-contact">
		<strong class="orange large-heading">Ready for Your Test Drive?</strong>
		<p>Please fill out the form below and we'll give you a call to set up your free seven day MaxCDN Enterprise trial. Try us out and see how fast we are for yourself.</p><p>Give us a support call at <span class="phone-number">(877) 629-2361</span> &mdash; you'll have access to priority support.<br/>We're sure that our service and performance will exceed your expectations.</p>
		<form method="post" enctype="application/x-www-form-urlencoded" action="http://resources.netdna.com/index.php/leadCapture/save">
			<input type="hidden" name="lpId" value="-1" />
			<input type="hidden" name="subId" value="127" />
			<input type="hidden" name="kw" value="" />
			<input type="hidden" name="cr" value="" />
			<input type="hidden" name="searchstr" value="" />
			<input type="hidden" name="_mkt_disp" value="return" />
			<input type="hidden" name="_mkt_trk" value="" />
			<input name="content__c" type='text' value="" class="hidden" />
			<input name="LeadSource" type="hidden" value="MaxCDN.com">
			<input name="Lead_Source_Detail__c" type="hidden" value="MaxCDN Enterprise Free Trial Form">
			<input type="hidden" name="lpurl" value="http://resources.netdna.com/EnterpriseMaxCDNFreeTrial_freetrial.html?cr={creative}&kw={keyword}" />
			<input type="hidden" name="formid" value="111" />
			<input type="hidden" name="returnURL" value="https://enterprise.maxcdn.com/success/" />
			<input type="hidden" name="retURL" value="https://enterprise.maxcdn.com/success/" />
			<input name="URL_of_Lead_Source__c" type='hidden' value="https://enterprise.maxcdn.com/" />

			<div class="cols">
				<div class="col">
					<div class="trial-form custom-form">
						<label>First Name <span class="orange-text">*</span></label>
						<input class="text required" type="text" name="FirstName" >
						<label>Last Name <span class="orange-text">*</span></label>
						<input class="text required" type="text" name="LastName" >
						<label>Email Address <span class="orange-text">*</span></label>
						<input class="text required" type="email" name="Email" >
						<label>Phone Number <span class="orange-text">*</span></label>
						<input class="text required" type="text" name="Phone" >
						<label>URL <span class="orange-text">*</span></label>
						<input class="text required" type="text" name="Website" value="http://" data-value="http://" >
						<label>Your Monthly Bandwidth Usage <span class="orange-text">*</span></label>
						<select class="required" name="NetDNA_Usage_Selection__c" tabindex="6">
							<option value="Select Bandwidth" selected="selected">Select Bandwidth</option>
							<option value="Under 5TB">Under 5TB</option>
							<option value="5TB - 10TB">5TB - 10TB</option>
							<option value="11 - 100TB">11 - 100TB</option>
							<option value="101TB - 1,000TB">101TB - 1,000TB</option>
							<option value="1PB+">1PB+</option>
						</select>
					</div>
				</div>
				<div class="col">
					<h3>If we're a fit, you'll enjoy:</h3>
					<ul class="simple-list">
						<li>Competitive global rates</li>
						<li>Fast network, fast provisioning</li>
						<li>Easy to use, but powerful, control panel and API</li>
						<li>39ms average response times, according to Cedexis</li>
						<li>24/7/365 support, even on holidays (yes, even that holiday you're thinking about now)</li>
					</ul>
				</div>
			</div>
			<button type="submit" class="btn btn-submit">Request Free Trial</a>
		</form>
	</div><!-- /popup -->

	<div class="popup" id="popup-test">
		<strong class="orange large-heading">Test MaxCDN against your<br/>current solution for free</strong>
		<p>We will provide you with a third party test ran by Catchpoint; it will measure your current CDN<br/>versus MaxCDN Enterprise from different locations around the world. Once the test is completed, we'll provide a report which shows how they both performed. It can take up to 48</br>hours to send you the report.</p>

		<form method="post" enctype="application/x-www-form-urlencoded" action="http://resources.netdna.com/index.php/leadCapture/save">
			<input type="hidden" name="lpId" value="-1" />
			<input type="hidden" name="subId" value="127" />
			<input type="hidden" name="kw" value="" />
			<input type="hidden" name="cr" value="" />
			<input type="hidden" name="searchstr" value="" />
			<input type="hidden" name="_mkt_disp" value="return" />
			<input type="hidden" name="_mkt_trk" value="" />
			<input name="content__c" type='text' value="" class="hidden" />
			<input name="LeadSource" type="hidden" value="MaxCDN.com">
			<input name="Lead_Source_Detail__c" type="hidden" value="MaxCDN Enterprise Free Trial Form">
			<input type="hidden" name="lpurl" value="http://resources.netdna.com/EnterpriseMaxCDNFreeTrial_freetrial.html?cr={creative}&kw={keyword}" />
			<input type="hidden" name="formid" value="111" />
			<input type="hidden" name="returnURL" value="https://enterprise.maxcdn.com/success/" />
			<input type="hidden" name="retURL" value="https://enterprise.maxcdn.com/success/" />
			<input name="URL_of_Lead_Source__c" type='hidden' value="https://enterprise.maxcdn.com/" />

			<div class="cols">
				<div class="col">
					<div class="trial-form custom-form">
						<label>Email Address <span class="orange-text">*</span></label>
						<input class="text required" type="email" name="Email" >
						<label>Phone Number (optional)</label>
						<input class="text " type="text" name="Phone" >
						<label>URL of a file (2mb or under) <span class="orange-text">*</span></label>
						<input class="text required" type="text" name="Website" placeholder="http://your-company.com/file.pdf">
						<label>Your Monthly Bandwidth Usage <span class="orange-text">*</span></label>
						<select class="required" name="NetDNA_Usage_Selection__c" tabindex="6">
							<option value="Select Bandwidth" selected="selected">Select Bandwidth</option>
							<option value="Under 5TB">Under 5TB</option>
							<option value="5TB - 10TB">5TB - 10TB</option>
							<option value="11 - 100TB">11 - 100TB</option>
							<option value="101TB - 1,000TB">101TB - 1,000TB</option>
							<option value="1PB+">1PB+</option>
						</select>
					</div>
				</div>
				<div class="col">
					<h3>How will this test help you?</h3>
					<ul class="simple-list">
						<li><strong>You can save money</strong>! If you're spending $5,000 on CDN now, we'll offer the same performance and reliability for $1,500. (These are example numbers.)</li>
						<li><strong>You get real data</strong>, from a 3rd party (Catchpoint), to help drive your decisions.</li>
					</ul>
				</div>
			</div>
			<button type="submit" class="btn btn-submit">Get Your Speed Report</a>
		</form>
	</div><!-- /popup -->
</div>

<script type="text/javascript" src="<?php echo $filePrepender; ?>js/jquery.plugins.min.js"></script>
<script type="text/javascript" src="<?php echo $filePrepender; ?>js/custom-form.js"></script>
<script type="text/javascript" src="<?php echo $filePrepender; ?>js/custom-form.select.js"></script>
<script type="text/javascript" src="<?php echo $filePrepender; ?>js/jquery.mousewheel-3.0.6.pack.js"></script>
<script type="text/javascript" src="<?php echo $filePrepender; ?>js/jquery.fancybox.pack.js"></script>
<script type="text/javascript" src="<?php echo $filePrepender; ?>js/scripts.js"></script>

<script type="text/javascript">
	var seAgent;
	(function() {
		var se = document.createElement('script'); se.type = 'text/javascript'; se.async = true;
		se.src = '//commondatastorage.googleapis.com/code.snapengage.com/js/f398c989-6722-497a-a8ae-30c146db8f71.js';
		var done = false;
		var chatMsgCounter = 0;

		se.onload = se.onreadystatechange = function() {
			if (!done&&(!this.readyState||this.readyState==='loaded'||this.readyState==='complete')) {
				done = true;
				SnapABug.setCallback('OpenProactive', function(agent, msg, type) {
					seAgent = agent;
					_gaq.push(['_trackEvent', 'SnapEngage', 'proactivePrompt', agent]);
				});

				SnapABug.setCallback('StartChat', function(email, msg, type) {
					_gaq.push(['_trackEvent', 'SnapEngage', type + "Engaged", seAgent]);
				});

				SnapABug.setCallback('ChatMessageReceived', function (agent, msg) {
					seAgent = agent;
				});

				SnapABug.setCallback('Close', function (type, status) {
					if (status === "online" && (type === "chat" || type === "proactive") && chatMsgCounter > 0) {
						nicereplyPopup(snapengage_get_agent_name());
						chatMsgCounter = 0;
					}
				});

				SnapABug.setCallback('ChatMessageSent', function (msg) {
					chatMsgCounter++;
				});

			}
		};
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(se, s);
	})();
	function startWidget(chatType) { return SnapABug.startLink(); }
	function snapengage_get_agent_name() { return (typeof seAgent != 'undefined') ? seAgent : null; }
</script>

<script type="text/javascript">
var _mfq = _mfq || [];
(function() {
	var mf = document.createElement("script"); mf.type = "text/javascript"; mf.async = true;
	mf.src = "//cdn.mouseflow.com/projects/0871b593-6288-4f18-a9b1-88d1d6802d1e.js";
	document.getElementsByTagName("head")[0].appendChild(mf);
})();
</script>

<script type="text/javascript">
adroll_adv_id = "DZPY6TZDGBGEJFB7JCH7ML";
adroll_pix_id = "DGK76G7V2VE7PKFLGTES5N";
(function () {
var oldonload = window.onload;
window.onload = function(){
   __adroll_loaded=true;
   var scr = document.createElement("script");
   var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
   scr.setAttribute('async', 'true');
   scr.type = "text/javascript";
   scr.src = host + "/j/roundtrip.js";
   ((document.getElementsByTagName('head') || [null])[0] ||
    document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
   if(oldonload){oldonload()}};
}());
</script>

<script id="_webengage_script_tag" type="text/javascript">
var _weq = _weq || {};
_weq['webengage.licenseCode'] = '58add003';
_weq['webengage.widgetVersion'] = "4.0";
(function(d){
var _we = d.createElement('script');
_we.type = 'text/javascript';
_we.async = true;
_we.src = (d.location.protocol == 'https:' ? "https://ssl.widgets.webengage.com" : "http://cdn.widgets.webengage.com") + "/js/widget/webengage-min-v-4.0.js";
var _sNode = d.getElementById('_webengage_script_tag');
_sNode.parentNode.insertBefore(_we, _sNode);
})(document);
</script>

<?php if ($_SERVER['SCRIPT_NAME'] === '/success/index.php'): ?>
<!-- Google Code for NetDNA Lead Conversion Page -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 1050851085;
var google_conversion_language = "en";
var google_conversion_format = "3";
var google_conversion_color = "ffffff";
var google_conversion_label = "N58sCKHivgUQje6K9QM";
var google_conversion_value = 0;
var google_remarketing_only = false;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/1050851085/?value=0&amp;label=N58sCKHivgUQje6K9QM&amp;guid=ON&amp;script=0"/>
</div>
</noscript>
<?php endif; ?>

</body>
</html>