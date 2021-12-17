<template>
    <header class="header-area header-area-style-two">
        <!-- Start Top Header -->
        <div class="top-header">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6 col-5">
                        <ul class="header-left-content">
                            <li>
                                <a href="https://www.facebook.com/daringame/" target="_blank" rel="noopener noreferrer">
                                    <i class="ri-facebook-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/darin_game/" target="_blank" rel="noopener noreferrer">
                                    <i class="ri-instagram-line"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-lg-6 col-md-6 col-7 py-0">
                        <div class="header-right-content" :class="{'float-left': $vuetify.rtl}">
                            <!-- <ul class="my-account">
                                <li>
                                    <a href="#" class="dropdown-control">
                                        <i class="ri-user-line"></i> 
                                        My account
                                        <i class="ri-arrow-down-s-line"></i>
                                    </a>

                                    <ul class="my-account-link">
                                        <li>
                                            <a href="my-account.html">My Account</a>
                                        </li>
                                        <li>
                                            <a href="log-in.html">Log In</a>
                                        </li>
                                        <li>
                                            <a href="register.html">Register</a>
                                        </li>
                                        <li>
                                            <a href="request-quote.html">Request Quote</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul> -->

                            <div class="languages-switcher">
                                <i class="ri-global-line"></i>
                                <select v-model="lang" v-if="$i18n.locale == 'ku'">
                                    <option value="ku">کوردی</option>
                                    <option value="en">English</option>	
                                </select>
                                <select v-model="lang" v-else>
                                    <option value="en">English</option>	
                                    <option value="ku">کوردی</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Start Top Header -->
        
        <!-- Start Navbar Area -->
        <div class="navbar-area navbar-area-style-two">
            <div class="mobile-responsive-nav">
            <div class="container-fluid">
                <div class="mobile-responsive-menu">
                <div class="logo">
                    <a href="/">
                        <img src="logo darin.png" alt="logo">
                    </a>
                </div>
                </div>
            </div>
            </div>

        <div class="desktop-nav">
            <div class="container-fluid pt-0">
                <nav class="navbar navbar-expand-md navbar-light">
                    <a class="navbar-brand py-1" href="/" style="width: 100%;">
                        <img src="logo darin.png" alt="logo" width="20%;">
                    </a>

                    <div class="collapse navbar-collapse mean-menu float-left" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="/" class="nav-link" :class="{'active': $route.fullPath == '/'}">
                                    {{ $t('home') }} 
                                </a>
                            </li>
                            
                            <li class="nav-item">
                                <a href="/about" class="nav-link" :class="{'active': $route.fullPath == '/about'}"> {{ $t('about') }} </a>
                            </li>

                            <li class="nav-item">
                                <a href="/contact" class="nav-link" :class="{'active': $route.fullPath == '/contact'}"> {{ $t('contact') }} </a>
                            </li>
                            <li class="nav-item">
                                <a href="/products" class="nav-link" :class="{'active': $route.fullPath == '/products'}"> {{ $t('products') }} </a>
                            </li>
                        </ul>

                        <div class="others-options">
                            <ul>
                            <li>
                                <a href="tel:+9647503079718" class="default-btn" style="color: white !important;">
                                <span dir="ltr">
                                    +964(0) 750 307 9718
                                    <i class="ri-phone-fill"></i>
                                </span>
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
            
            <!-- <div class="others-option-for-responsive">
                <div class="container">
                    <div class="dot-menu">
                        <div class="inner">
                            <div class="circle circle-one"></div>
                            <div class="circle circle-two"></div>
                            <div class="circle circle-three"></div>
                        </div>
                    </div>
                    
                    <div class="container">
                        <div class="option-inner">
                            <div class="others-option justify-content-center d-flex align-items-center">
                                <ul>
                                    <li>
                                        <a href="tel:+9647503079718" class="default-btn" style="color: white; !important">
                                            <span>
                                                +964(0) 750 307 9718
                                                <i class="ri-phone-fill"></i>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
        <!-- End Navbar Area -->
    </header>
</template>

<script>
import $ from 'jquery';
export default {
    data() {
        return {
            lang: 'en'
        }
    },
    mounted() {
        this.lang = localStorage.getItem('darinLang') || 'en'
        if(this.lang == 'ku') {
            this.$vuetify.rtl = true;
            setTimeout(() => {
                $('.meanmenu-reveal').css({'right':'auto', 'left':'0'});
            }, 200)
        } else {
            this.$vuetify.rtl = false;
            setTimeout(() => {
                $('.meanmenu-reveal').css({'right':'0', 'left':'auto'});
            }, 200)
        }
    },
    watch: {
        lang() {
            this.$i18n.locale = this.lang
            if(this.lang == 'ku') {
                this.$vuetify.rtl = true;
                $('.meanmenu-reveal').css({'right':'auto', 'left':'0'});
            } else {
                this.$vuetify.rtl = false;
                $('.meanmenu-reveal').css({'right':'0', 'left':'auto'});
            }
            localStorage.setItem('darinLang', this.lang);
        }
    }
}
</script>

