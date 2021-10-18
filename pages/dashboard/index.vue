<template>
    <v-main dir="ltr">
        <Navbar />
        <v-container fluid>
            <v-text-field label="Instagram Post link 1" outlined dense class="ml-2 my-3 mr-6" v-model.trim="insta1"></v-text-field>
            <v-text-field label="Instagram Post link 2" outlined dense class="ml-2 my-3 mr-6" v-model.trim="insta2"></v-text-field>
            <v-text-field label="Instagram Post link 3" outlined dense class="ml-2 my-3 mr-6" v-model.trim="insta3"></v-text-field>
            <v-btn  color="success" class="ml-2 my-3" @click="update()"> <v-icon left> mdi-content-save-outline </v-icon> Update </v-btn>
        </v-container>
    </v-main>
</template>

<script>
import Navbar from '@/components/dashboard/Navbar.vue'
export default {
    components: {
        Navbar
    },
    middleware: 'clearExternalJS',
    data() {
        return {
            loadings: {
                update: false
            },
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
    },
    methods: {
        update() {
            const c = confirm('Are you sure update informations?');
            if(c) {
                this.loadings.update = true;
                this.$axios.$patch('/api/insta/updateAll', {
                    links: [this.insta1, this.insta2, this.insta3]
                }).then(() => {
                    alert('Success');
                }).finally(() => this.loadings.update = false);
            }
        }
    }
}
</script>

<style>

</style>