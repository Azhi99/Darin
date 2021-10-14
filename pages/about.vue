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
		<div class="page-title-area" style="padding-top: 220px;">
			<div class="container">
				<div class="page-title-content">
					<h2>About</h2>

					
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

		<!-- Start Choose Area -->
		<section class="choose-area pt-100 pb-70">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-6">
						<div class="choose-img">
							<img src="assets/images/choose-img.jpg" alt="Images">

							<div class="your-of">
								<h1>30</h1>
								<h3>Year’s of experience in transport and logistics services</h3>
							</div>
						</div>
					</div>

					<div class="col-lg-6">
						<div class="faq-accordion">
							<h2>Why should you choose Matro transport and logistics services</h2>

							<ul class="accordion">
								<li class="accordion-item">
									<a class="accordion-title active" href="javascript:void(0)">
										<span class="flaticon-contract"></span>
										Our history
										<i class="ri-add-fill"></i>
									</a>
	
									<div class="accordion-content show">
										<p>Cosmetic surgery is a unique discipline of medicine focused on enhancing appearance through surgical and medical techniques. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam unique discipline of.</p>

										<p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
									</div>
								</li>

								<li class="accordion-item">
									<a class="accordion-title" href="javascript:void(0)">
										<span class="flaticon-target"></span>
										Our vision
										<i class="ri-add-fill"></i>									
									</a>
	
									<div class="accordion-content">
										<p>Cosmetic surgery is a unique discipline of medicine focused on enhancing appearance through surgical and medical techniques. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam unique discipline of.</p>

										<p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
									</div>
								</li>

								<li class="accordion-item">
									<a class="accordion-title" href="javascript:void(0)">
										<span class="flaticon-mission"></span>
										Our mission
										<i class="ri-add-fill"></i>
									</a>
	
									<div class="accordion-content">
										<p>Cosmetic surgery is a unique discipline of medicine focused on enhancing appearance through surgical and medical techniques. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam unique discipline of.</p>

										<p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End Choose Area -->

		<!-- Start Counter Area -->
		<section class="counter-area bg-color pt-100 pb-70">
			<div class="container">
				<div class="counter-bg">
					<div class="row">
						<div class="col-lg-3 col-sm-6">
							<div class="single-counter">
								<i class="flaticon-new-year"></i>

								<div class="count-title">
									<h2>
										<span class="odometer" data-count="30">00</span> 
									</h2>
									<h4>Number of years</h4>
								</div>
							</div>
						</div>

						<div class="col-lg-3 col-sm-6">
							<div class="single-counter">
								<i class="flaticon-bus"></i>

								<div class="count-title">
									<h2>
										<span class="odometer" data-count="50">00</span> 
										<span class="target">+</span>
									</h2>
									<h4>Specialist vehicles</h4>
								</div>
							</div>
						</div>

						<div class="col-lg-3 col-sm-6">
							<div class="single-counter">
								<i class="flaticon-package"></i>

								<div class="count-title">
									<h2>
										<span class="odometer" data-count="30">00</span> 
										<span class="target">K</span>
									</h2>
									<h4>Deliveries per year</h4>
								</div>
							</div>
						</div>

						<div class="col-lg-3 col-sm-6">
							<div class="single-counter">
								<i class="flaticon-rating"></i>

								<div class="count-title">
									<h2>
										<span class="odometer" data-count="10">00</span> 
										<span class="target">K</span>
									</h2>
									<h4>Satisfied clients</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End Counter Area -->

		

		<!-- Start Partner Area -->
		<Partners />
		<!-- End Partner Area -->

		<!-- Start Footer Area -->
		<FooterArea />
		<!-- End Footer Area -->

		<!-- Start Copy Right Area -->
		<Copyright />
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