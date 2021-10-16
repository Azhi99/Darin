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

		<!-- Start Banner Area -->
		<!-- <section class="banner-area banner-area-style-two">
			<div class="d-table">
				<div class="d-table-cell">
					<div class="container-fluid">
						<div class="banner-content">
							<span class="top-title">Welcome to Matro</span>
							<h1>World fastest growing transport & logistics business</h1>

							<div class="banner-btn">
								<a href="request-quote.html" class="default-btn">
									<span>
										Request quotes
										<i class="ri-send-plane-2-fill"></i>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section> -->
		<div class="home">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-6 col-md-6 col-sm-12 pl-5" style="margin-top: 240px;" id="header-part">
						<h1 id="header-text"> {{ $t('headTitle') }} </h1>
						<h3 id="header-text2">Authorized Razer Distributor</h3>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-12">
						<div class="image">
							<img src="assets/images/game.svg" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- End Banner Area -->

		<!-- Start Success Area -->
		<section class="success-area bg-color pt-70 pb-70">
			<div class="container">
				<div class="section-title">
					<h2>The best game needs are available from Darin Game</h2>
					<p>We have delivery to all cities and towns in Kurdistan and Iraq</p>
				</div>
			</div>
		</section>
		<!-- End Success Area -->

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
			this.$i18n.locale = localStorage.getItem('darinLang') || 'en';
		}
	}
</script>

<style scoped>
	.home .image{
		flex:1 1 40rem;
	}

	.home .image img{
		width:80%;
		padding:1rem;
		padding-top: 9.5rem;
		animation:float 3s linear infinite;
	}

	@media screen and (min-width: 340px) and (max-width: 600px) {
		.home .image img{
			width:97%;
			padding:1rem;
			padding-top: 1rem;
			animation:float 3s linear infinite;
		}
		#header-part {
			margin-top: 10px !important;
		}
		#header-text, #header-text2 {
			text-align: center;
		}
	}

</style>


