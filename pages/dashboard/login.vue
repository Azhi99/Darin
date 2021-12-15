<template>
    <v-main class="mx-auto my-15" dir="ltr" id="main">
        <div>
            <v-alert text class="title text-center py-3" color="green"> Darin </v-alert>
            <v-card elevation="4" width="450px" class="mt-3 px-3 py-5">
                <v-text-field label="Username" outlined dense v-model="username" @keyup.enter="setFocus('password')"></v-text-field>
                <v-text-field label="Password" outlined dense type="password" v-model="password" id="password" @keyup.enter="login()"></v-text-field>
                <v-btn color="success" block @click="login()"> Login </v-btn>
            </v-card>
            <v-divider></v-divider>
            <v-alert text  class="text-center py-5 mt-3" color="success">
                Developed By: Suly Tech
            </v-alert>
        </div>
    </v-main>
</template>

<script>
    export default {
        middleware: ['clearExternalJS', 'auth'],
        data() {
            return {
                username: null,
                password: null
            }
        },
        mounted() {
            if(this.$route.query.darinSecret != 'eM36N') {
                this.$router.push('/404');
            }
        },
        methods: {
            setFocus(id) {
                document.getElementById(id).focus();
            },
            login() {
                if(this.username && this.password) {
                    this.$axios.$post('/api/login', {
                        username: this.username,
                        password: this.password
                    }).then((data) => {
                        this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + data;
                        this.$cookies.set('darinToken', 'Bearer ' + data);
                        location.href = '/dashboard/';
                    }).catch((err) => {
                        alert(err)
                    });
                } else {
                    alert('Fill username and password');
                }
            }
        }
    }
</script>
