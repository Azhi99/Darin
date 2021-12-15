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

        <v-container fluid style="margin-top: 150px; margin-bottom: 20px;">
            <v-row>
                <v-col cols="12" md="4" lg="3" xl="2">
                    <v-card height="100%" width="100%" elevation="4" class="text-center align-items-center justify-content-center" style="border-radius: 10px;">
                        <v-img :src="'/logo darin.png'" class="mx-auto" width="256" height="256" contain></v-img>
                        <h3 class="text-center"> Hello </h3>
                        <h5 class="text-center mb-3"> 20 $ </h5>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

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

<style>

</style>