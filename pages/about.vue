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
					<h2> {{ $t('about') }} </h2>

					
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
		<section class="choose-area pt-70 pb-70">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-12">
						<div class="faq-accordion">
							<ul class="accordion">
								<li class="accordion-item">
									<div class="accordion-content show">
										<p style="font-size: 20px; text-align: justify;">
											{{ $t('aboutDetail') }}
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End Choose Area -->

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