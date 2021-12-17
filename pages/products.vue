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

		<div class="text-center" v-if="loading">
			<v-progress-circular indeterminate color="primary"></v-progress-circular>
		</div>
        <v-container fluid style="margin-top: 150px; margin-bottom: 20px;" v-else>
			<v-select label="Category" dense append-icon="mdi-filter" class="mt-2" clearable :items="categories" item-text="categoryName" item-value="categoryID" v-model="categoryID"></v-select>
			<div v-if="items.length == 0" class="mx-auto py-10 text-center">
				<span class="grey--text"> No items found </span>
			</div>
            <v-row v-else>
                <v-col cols="12" md="4" lg="3" xl="2" v-for="(item, index) in items" :key="index">
                    <v-card height="100%" width="100%" elevation="4" class="text-center align-items-center justify-content-center" style="border-radius: 10px;">
                        <v-img :src="'/itemImages/' + item.image" class="mx-auto" width="256" height="256" contain></v-img>
                        <h3 class="text-center"> {{ item.itemName }} </h3>
                        <h5 class="text-center mb-3"> {{ item.price }} $ </h5>
                    </v-card>
                </v-col>
            </v-row>
			<v-pagination :length="Math.ceil(numberOfItems / 16)" :total-visible="7" v-model="page" class="mt-3"></v-pagination>
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
		data() {
			return {
				items: [],
				categories: [],
				page: 1,
				categoryID: null,
				numberOfItems: 0,
				loading: false
			}
		},
		created() {
			this.$axios.$get('/api/item/getAllCategories').then((data) => {
				this.categories = data;
			});
			this.getData();
		},
		mounted() {
			$('.preloader').addClass('preloader-deactivate');
			this.$i18n.locale = localStorage.getItem('darinLang') || 'en';
		},
		methods: {
			getData() {
				this.items = [];
				this.loading = true;
				this.$axios.$get('/api/item/getItems/' + (this.page - 1) * 10 + '/' + this.categoryID).then((data) => {
					this.items = data.items;
					this.numberOfItems = data.numberOfItems;
				}).finally(() => this.loading = false);
			}
		},
		watch: {
			categoryID() {
				if(this.page == 1) {
					this.getData();
				} else {
					this.page = 1;
				}
			},
			page() {
				this.getData();
			}
		}
	}
</script>

<style>

</style>