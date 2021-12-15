<template>
    <v-main dir="ltr">
        <Navbar />
        <v-container fluid>
            <v-row>
                <v-col cols="12" md="4" lg="3" xl="2">
                    <v-dialog v-model="dialogs.item" width="75%">
                        <template v-slot:activator="{on, attrs}">
                            <v-btn color="success" block v-bind="attrs" v-on="on"> Add Item </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span> Item Information </span>
                                <v-spacer></v-spacer>
                                <v-btn icon color="error" @click="dialogs.item = false;"> <v-icon> mdi-close </v-icon> </v-btn>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text class="mt-3">
                                <v-text-field label="Name" outlined dense></v-text-field>
                                <v-text-field label="Price" prefix="$" outlined dense type="number"></v-text-field>
                                <input type="file">
                                <v-btn block color="success" class="mt-2"> Add </v-btn>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                </v-col>
                <v-col cols="12" md="4" lg="3" xl="2">
                    <v-dialog v-model="dialogs.category" width="75%">
                        <template v-slot:activator="{on, attrs}">
                            <v-btn color="primary" block v-bind="attrs" v-on="on"> Add Category </v-btn>
                        </template>
                    </v-dialog>
                </v-col>
            </v-row>
            <v-divider class="my-1"></v-divider>
            <v-data-table :headers="itemsHeader" :items="items" class="text-center" :footer-props="{'items-per-page-options': [15, 20, 25, 30]}">
                <template v-slot:item="{item, index}">
                    <tr>
                        <td> {{ index + 1 }} </td>
                        <td> {{ item.itemName }} </td>
                        <td> {{ item.categoryName }} </td>
                        <td> {{ item.price }} </td>
                        <td>
                            <v-btn color="primary" icon> <v-icon> mdi-pencil </v-icon> </v-btn>
                            <v-btn color="error" icon> <v-icon> mdi-delete </v-icon> </v-btn>
                        </td>
                    </tr>
                </template>
            </v-data-table>
        </v-container>
    </v-main>
</template>

<script>
import Navbar from '@/components/dashboard/Navbar.vue'
export default {
    components: {
        Navbar
    },
    middleware: ['clearExternalJS', 'auth'],
    data() {
        return {
            dialogs: {
                item: false,
                category: false
            },
            loadings: {
                addItem: false,
                updateItem: false,
                updateImage: false
            },
            items: [],
            singleItem: {
                itemID: null,
                itemName: null,
                price: 0,
                image: null,
                imageFile: null
            },
            categories: [],
            singleCategory: {
                categoryID: null,
                categoryName: null
            }
        }
    },
    computed: {
        itemsHeader() {
            return [
                { text: '#', align: 'center', sortable: false },
                { text: 'Item Name', align: 'center', sortable: false },
                { text: 'Category', align: 'center', sortable: false },
                { text: 'Price', align: 'center', sortable: false },
                { text: 'Actions', align: 'center', sortable: false },
            ]
        }
    }
}
</script>

<style>
    .v-btn .v-btn__content{
        text-transform: none !important;
    }
</style>