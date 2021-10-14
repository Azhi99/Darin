<template>
    <div>
        <!-- Start Preloader Area -->
		<div class="preloader">
			<div class="lds-ripple">
				<div class="pl-spark-1 pl-spark-2"></div>
			</div>
		</div>
		<!-- End Preloader Area -->
		
		<!-- Start Header Area -->
		<HeaderArea />
		<!-- End Header Area -->

		<!-- Start Page Title Area -->
		<div class="page-title-area">
			<div class="container">
				<div class="page-title-content">
					<h2>Contact</h2>
				</div>
			</div>

			<div class="shape shape-1">
				<img src="assets/images/page-title-shape-1.png" alt="Image">
			</div>
			<div class="shape shape-2">
				<img src="assets/images/page-title-shape-2.png" alt="Image">
			</div>
		</div>
		<!-- End Page Title Area -->

		<!-- Start Contact Info Area -->
		<div class="contact-info-area pt-100 pb-70">
			<div class="container">
				<div class="row">
					<div class="col-lg-4 col-md-6">
						<div class="single-contact-info">
							<i class="ri-map-pin-fill"></i>
							<div class="count-title">
								<p>Sulaymaniyah, Salm street, Salm mall</p>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6">
						<div class="single-contact-info">
							<i class="ri-phone-fill"></i>

							<div class="count-title">
								<a href="tel:+9647503079718">+964(0) 750 307 9718</a>
								<a href="tel:+9647701648642">+964(0) 770 164 8642</a>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
						<div class="single-contact-info">
							<i class="ri-mail-fill"></i>

							<div class="count-title">
								<a href="mailto:info@matro.com">info@matro.com</a>
								<a href="mailto:hello@matro.com">hello@matro.com</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- End Contact Info Area -->

		<!-- Start Map Area -->
		<div class="map-area pb-100">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51502.423422968604!2d-115.24877995231783!3d36.21758989848515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8eaf574293f1b%3A0x8e720e5b03149745!2sLas%20Vegas%2C%20NV%2089108%2C%20USA!5e0!3m2!1sen!2sbd!4v1612342385496!5m2!1sen!2sbd"></iframe>
		</div>
		<!-- End Map Area -->

		<!-- Start Contact Area -->
		<section class="main-contact-area pb-100">
			<div class="container">
				<div class="section-title">
					<h2>Write us a message</h2>
				</div>

				<form id="contactForm">
					<div class="row">
						<div class="col-lg-6 col-sm-6">
							<div class="form-group">
								<label>Your name</label>
								<input type="text" name="name" id="name" class="form-control" required data-error="Please enter your name">
								<div class="help-block with-errors"></div>
							</div>
						</div>

						<div class="col-lg-6 col-sm-6">
							<div class="form-group">
								<label>Your email</label>
								<input type="email" name="email" id="email" class="form-control" required data-error="Please enter your email">
								<div class="help-block with-errors"></div>
							</div>
						</div>

						<div class="col-lg-6 col-sm-6">
							<div class="form-group">
								<label>Your phone</label>
								<input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" class="form-control">
								<div class="help-block with-errors"></div>
							</div>
						</div>

						<div class="col-lg-6 col-sm-6">
							<div class="form-group">
								<label>Subject</label>
								<input type="text" name="msg_subject" id="msg_subject" class="form-control" required data-error="Please enter your subject">
								<div class="help-block with-errors"></div>
							</div>
						</div>

						<div class="col-12">
							<div class="form-group">
								<label>Your message</label>
								<textarea name="message" class="form-control" id="message" cols="30" rows="8" required data-error="Write your message"></textarea>
								<div class="help-block with-errors"></div>
							</div>
						</div>

						<div class="col-lg-12 col-md-12">
							<div class="form-group checkboxs">
								<input type="checkbox" id="chb2">
								<p>
									Accept <a href="terms-conditions.html">Terms &amp; Conditions</a> And <a href="privacy-policy.html">Privacy Policy.</a>
								</p>
							</div>
						</div>

						<div class="col-lg-12 col-md-12">
							<button type="submit" class="default-btn">
								<span>
									Send message
									<i class="ri-arrow-right-circle-line"></i>
								</span>
							</button>
							<div id="msgSubmit" class="h3 text-center hidden"></div>
							<div class="clearfix"></div>
						</div>
					</div>
				</form>
			</div>
		</section>
		<!-- End Contact Area -->

		<!-- Start Footer Area -->
		<footer class="footer-area bg-color pt-100 pb-70">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-md-6">
						<div class="single-footer-widget single-bg">
							<a href="index.html" class="logo">
								<img src="assets/images/logo.png" alt="Image">
							</a>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> 

							<ul class="social-icon">
								<li>
									<a href="https://www.facebook.com/" target="_blank">
										<i class="ri-facebook-fill"></i>
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/" target="_blank">
										<i class="ri-instagram-line"></i>
									</a>
								</li>
								<li>
									<a href="https://twitter.com/" target="_blank">
										<i class="ri-twitter-fill"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="col-lg-3 col-md-6">
						<div class="single-footer-widget">
							<h3>Get in touch</h3>

							<ul class="address">
								<li>
									<span><i class="ri-map-pin-fill"></i> Address:</span>
									2976 Sunrise road las vegas, NV 89108
								</li>
								<li class="location">
									<span><i class="ri-phone-fill"></i> Phone:</span>
									<a href="tel:+1-(514)-312-5678">+1 (514) 312-5678</a>
								</li>
								<li>
									<span><i class="ri-mail-fill"></i> Email:</span>
									<a href="mailto:hello@matro.com">hello@matro.com</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="col-lg-3 col-md-6">
						<div class="single-footer-widget">
							<h3>Information</h3>

							<ul class="import-link">
								<li>
									<a href="terms-conditions.html">Terms & Conditions</a>
								</li>
								<li>
									<a href="privacy-policy.html">Privacy Policy</a>
								</li>
								<li>
									<a href="request-quote.html">Request A Quote</a>
								</li>
								<li>
									<a href="faq.html">FAQ</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="col-lg-3 col-md-6">
						<div class="single-footer-widget newsletter">
							<h3>Newsletter</h3>
							<p>Subscribe to our newsletter and receive the latest tips via email.</p>

							<form class="newsletter-form" data-toggle="validator">
								<input type="email" class="form-control" placeholder="hello@matro.com" name="EMAIL" required autocomplete="off">
	
								<button class="subscribe" type="submit">
									Subscribe
									<i class="ri-arrow-right-line"></i>
								</button>
	
								<div id="validator-newsletter" class="form-result"></div>
							</form>	
						</div>
					</div>
				</div>
			</div>
		</footer>
		<!-- End Footer Area -->

		<!-- Start Copy Right Area -->
		<div class="copy-right-area bg-color">
			<div class="container">
				<p>
					Copyright <i class="ri-copyright-line"></i>2021 Matro. Designed By 
					<a href="https://envytheme.com/" target="_blank">EnvyTheme</a>
				</p>
			</div>
		</div>
		<!-- End Copy Right Area -->
		
		<!-- Start Go Top Area -->
		<div class="go-top">
			<i class="ri-arrow-up-s-fill"></i>
			<i class="ri-arrow-up-s-fill"></i>
		</div>
		<!-- End Go Top Area -->
    </div>
</template>

<script>
	import $ from 'jquery';

	export default {
		mounted() {
			$('.preloader').addClass('preloader-deactivate');
		}
	}
</script>