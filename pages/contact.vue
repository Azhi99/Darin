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
		<!-- <div class="page-title-area" style="background-image: url('assets/images/contact.svg'); background-size: 560px 448px; background-position: right; margin-top: 140px;"> -->
			<!-- <div class="container">
				<div class="row">
					<div class="col-12" >
						<h1>Contact</h1>
					</div>
					<div class="col-lg-5 col-md-5 col-sm-12" >
						<img src="assets/images/contact.svg" width="100%;">
					</div>
				</div>
			</div> -->
			<!-- <h1 class="ml-3" style="margin-top: -100px;">Contact</h1> -->
			<!-- <div class="shape shape-1">
				<img src="assets/images/page-title-shape-1.png" alt="Image">
			</div>
			<div class="shape shape-2">
				<img src="assets/images/page-title-shape-2.png" alt="Image">
			</div> -->
		<!-- </div> -->
		<!-- End Page Title Area -->
		<div class="home">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-6 col-md-6 col-sm-12 pl-5" :style="`margin-top: 240px; ${$vuetify.rtl ? `background-image: url('/assets/images/letter-scaled.svg');` : `background-image: url('/assets/images/letter.svg');`} background-size: 100% 100%; background-position: right;`" id="header-part">
						<h1 id="header-text"> {{ $t('contactUs') }} </h1>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-12">
						<div class="image">
							<img src="assets/images/contact.svg" alt="" width="100%">
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Start Contact Info Area -->
		<div class="contact-info-area pt-100 pb-70">
			<div class="container">
				<div class="row">
					<div class="col-lg-4 col-md-6">
						<div class="single-contact-info">
							<i class="ri-map-pin-fill"></i>
							<div class="count-title">
								<p> {{ $t('addressDetail') }} </p>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6">
						<div class="single-contact-info">
							<i class="ri-phone-fill"></i>

							<div class="count-title" dir="ltr">
								<a href="tel:+9647503079718" rel="noopener noreferrer">+964(0) 750 307 9718</a>
								<a href="tel:+9647701648642" rel="noopener noreferrer">+964(0) 770 164 8642</a>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
						<div class="single-contact-info">
							<i class="ri-mail-fill"></i>

							<div class="count-title" style="height: 120px;">
								<a href="mailto:info@daringame.com" style="font-size: 20px;" rel="noopener noreferrer">info@daringame.com</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- End Contact Info Area -->

		<!-- Start Map Area -->
		<div class="map-area pb-100">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d811.4464533921746!2d45.420726418262724!3d35.55899162842367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40002f548b9d5d7b%3A0x460ace0d2631f79d!2sDarin%20Game!5e0!3m2!1sen!2siq!4v1634404879254!5m2!1sen!2siq"></iframe>
		</div>
		<!-- End Map Area -->

		<Partners />

		<!-- Start Footer Area -->
		<FooterArea />
		<!-- End Footer Area -->

		<!-- Start Copy Right Area -->
		
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


	@media screen and (min-width: 320px) and (max-width: 600px) {
		.home .image img{
			width:97%;
			padding:1rem;
			padding-top: 1rem;
			animation:float 3s linear infinite;
		}
		#header-part {
			margin-top: 10px !important;
			background-image: none !important;
		}
		#header-text, #header-text2 {
			text-align: center;
		}
	}

</style>