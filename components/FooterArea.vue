<template>
    <footer class="footer-area bg-color pt-100 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="single-footer-widget single-bg">
                        <NuxtLink to="/" class="logo">
                            <img src="logo darin.png" alt="Image" width="25%;">
                        </NuxtLink>

                        <p> {{ $t('headTitle') }}  <br> {{ $t('razerDistributor') }} </p> 

                        <ul class="social-icon">
                            <li>
                                <a href="https://www.facebook.com/daringame/" target="_blank" rel="noopener noreferrer">
                                    <i class="ri-facebook-fill" style="font-size: 28px;"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/darin_game/" target="_blank" rel="noopener noreferrer">
                                    <i class="ri-instagram-line" style="font-size: 28px;"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="single-footer-widget">
                        <h3> {{ $t('getInTouch') }} </h3>

                        <!-- <ul class="address">
                            <li>
                                <span><i class="ri-map-pin-fill"></i> {{ $t('address') }}:</span>
                                <p> {{ $t('addressDetail') }} </p>
                            </li>
                            <li class="location">
                                <span><i class="ri-phone-fill"></i> {{ $t('phone') }}:</span>
                                <a href="tel:+9647503079718">+964(0) 750 307 9718</a>
                            </li>
                            <li>
                                <span><i class="ri-mail-fill"></i> {{ $t('email') }}:</span>
                                <a href="mailto:hello@matro.com">hello@matro.com</a>
                            </li>
                        </ul> -->
                        <div class="row">
                            <div class="col-3 py-0" style="height: 30px;">
                                <span><i class="ri-map-pin-fill"></i> {{ $t('address') }}:</span>
                            </div>
                            <div class="col-9 py-0" style="height: 30px;">
                                <p> {{ $t('addressDetail') }} </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3 py-1">
                                <span><i class="ri-phone-fill" :style="$vuetify.rtl ? 'transform: rotateY(180deg);' : ''"></i> {{ $t('phone') }}:</span>
                            </div>
                            <div class="col-9 py-1">
                                <a href="tel:+9647503079718" dir="ltr">+964(0) 750 307 9718</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3 py-1">
                                <span><i class="ri-mail-fill"></i> {{ $t('email') }}:</span>
                            </div>
                            <div class="col-9 py-1">
                                <a href="mailto:hello@matro.com">hello@matro.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12" v-if="insta1">
                    <iframe src="https://www.instagram.com/p/CVBBefoldpI/embed" frameborder="0" width="100%" height="740px"></iframe>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12" v-if="insta2">
                    <iframe src="https://www.instagram.com/p/CVBBefoldpI/embed" frameborder="0" width="100%" height="740px"></iframe>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12" v-if="insta3">
                    <iframe src="https://www.instagram.com/p/CVBBefoldpI/embed" frameborder="0" width="100%" height="740px"></iframe>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            insta1: '',
            insta2: '',
            insta3: '',
        }
    },
    created() {
        this.$axios.$get('/api/insta/getAll').then((data) => {
            this.insta1 = data[0].link;
            this.insta2 = data[1].link;
            this.insta3 = data[2].link;
        })
    }
}
</script>
