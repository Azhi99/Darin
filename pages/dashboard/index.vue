<template>
    <v-main dir="ltr">
        <Navbar />
        <v-container fluid>
            <v-text-field label="Instagram Post link 1" outlined dense class="ml-2 my-3 mr-6"></v-text-field>
            <v-text-field label="Instagram Post link 2" outlined dense class="ml-2 my-3 mr-6"></v-text-field>
            <v-text-field label="Instagram Post link 3" outlined dense class="ml-2 my-3 mr-6"></v-text-field>
            <v-btn  color="success" class="ml-2 my-3"> <v-icon left> mdi-content-save-outline </v-icon> Update </v-btn>
        </v-container>
    </v-main>
</template>

<script>
import Navbar from '@/components/dashboard/Navbar.vue'
export default {
    components: {
        Navbar
    },
    middleware: 'clearExternalJS'
}
</script>

<style>

</style>