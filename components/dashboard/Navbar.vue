<template>
    <nav>
        <v-navigation-drawer app permanent expand-on-hover width="220" dark>
            <v-list>
                <v-list-item link>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                    Darin <v-btn color="error" icon @click="logout()"> <v-icon> mdi-logout </v-icon> </v-btn>
                    </v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list nav dense>
                <v-list-item link to="/dashboard/">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
    
</template>

<script>
    export default {
        methods: {
            logout() {
                this.$cookies.remove('darinToken');
                this.$axios.defaults.headers.common['Authorization'] = null;
                location.href = '/';
            }
        }
    }
</script>