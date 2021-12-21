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
                                <v-btn icon color="error" @click="clearItem(); dialogs.item = false;"> <v-icon> mdi-close </v-icon> </v-btn>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text class="mt-3">
                                <v-text-field label="Name" outlined dense v-model.trim="singleItem.itemName"></v-text-field>
                                <v-select label="Category" outlined dense :items="categories" item-text="categoryName" item-value="categoryID" v-model="singleItem.categoryID"></v-select>
                                <v-text-field label="Price" prefix="$" outlined dense type="number" v-model.number="singleItem.price"></v-text-field>
                                <input type="file" @change="setImage">
                                <v-btn block color="success" v-if="!singleItem.itemID" class="mt-2" :loading="loadings.addItem" @click="addItem()"> Add </v-btn>
                                <v-btn block color="warning" v-else class="mt-2" :loading="loadings.updateItem" @click="updateItem()"> Save changes </v-btn>
                                <v-btn block color="primary" v-if="singleItem.itemID" class="mt-2" :loading="loadings.updateImage" @click="updateImage()"> Renew Image </v-btn>
                                <v-img class="mt-1" width="256" height="256" contain :src="'../../itemImages/' + singleItem.image"></v-img>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                </v-col>
                <v-col cols="12" md="4" lg="3" xl="2">
                    <v-dialog v-model="dialogs.category" width="75%">
                        <template v-slot:activator="{on, attrs}">
                            <v-btn color="primary" block v-bind="attrs" v-on="on"> Add Category </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span> Categories </span>
                                <v-spacer></v-spacer>
                                <v-btn color="error" icon @click="clearCategory(); dialogs.category = false;"> <v-icon> mdi-close </v-icon> </v-btn>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text class="mt-3">
                                <v-row>
                                    <v-col cols="8">
                                        <v-text-field label="Category Name" outlined dense v-model.trim="singleCategory.categoryName" @keyup.enter="addCategory()"></v-text-field>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-btn color="success" block :loading="loadings.addCategory" v-if="!singleCategory.categoryID" @click="addCategory()"> <v-icon> mdi-plus </v-icon> </v-btn>
                                        <v-btn color="warning" block :loading="loadings.updateCategory" v-else @click="updateCategory()"> <v-icon> mdi-content-save-outline </v-icon> </v-btn>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-btn color="info" block @click="clearCategory()"> <v-icon> mdi-broom </v-icon> </v-btn>
                                    </v-col>
                                </v-row>
                                <v-data-table :headers="categoriesHeader" :items="categories" :footer-props="{'items-per-page-options': [10, 15, 20]}" class="mt-2 text-center">
                                    <template v-slot:item="{item, index}">
                                        <tr>
                                            <td> {{ index + 1 }} </td>
                                            <td> {{ item.categoryName }} </td>
                                            <td>
                                                <v-btn icon color="primary" @click="getSingleCategory(item)"> <v-icon> mdi-pencil </v-icon> </v-btn>
                                                <v-btn icon color="error" @click="deleteCategory(item.categoryID)"> <v-icon> mdi-delete </v-icon> </v-btn>
                                            </td>
                                        </tr>
                                    </template>
                                </v-data-table>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="12" md="4" lg="3" xl="2">
                    <v-text-field label="Search..." outlined dense v-model="search"></v-text-field>
                </v-col>
            </v-row>
            <v-divider class="my-1 mt-3"></v-divider>
            <v-data-table :headers="itemsHeader" :items="items" class="text-center" :search="search" :footer-props="{'items-per-page-options': [15, 20, 25, 30]}">
                <template v-slot:item="{item, index}">
                    <tr>
                        <td> {{ index + 1 }} </td>
                        <td> {{ item.itemName }} </td>
                        <td> {{ item.categoryName }} </td>
                        <td> {{ item.price }} </td>
                        <td>
                            <v-btn color="primary" icon @click="getSingleItem(item)"> <v-icon> mdi-pencil </v-icon> </v-btn>
                            <v-btn color="error" icon @click="deleteItem(item.itemID)"> <v-icon> mdi-delete </v-icon> </v-btn>
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
                updateImage: false,
                addCategory: false,
                updateCategory: false
            },
            items: [],
            singleItem: {
                itemID: null,
                itemName: null,
                categoryID: null,
                price: 0,
                image: null,
                imageFile: null
            },
            categories: [],
            singleCategory: {
                categoryID: null,
                categoryName: null
            },
            search: ''
        }
    },
    created() {
        this.$axios.$get('/api/item/getAllItems').then((data) => {
            this.items = data;
        });
        this.$axios.$get('/api/item/getAllCategories').then((data) => {
            this.categories = data;
        });
    },
    methods: {
        setImage(event) {
            this.singleItem.imageFile = event.target.files[0];
        },
        clearItem() {
            this.singleItem.itemID = null;
            this.singleItem.itemName = null;
            this.singleItem.categoryID = null;
            this.singleItem.price = 0;
            this.singleItem.image = null;
            this.singleItem.imageFile = null;
        },
        clearCategory() {
            this.singleCategory.categoryID = null;
            this.singleCategory.categoryName = null;
        },
        getSingleItem(item) {
            this.singleItem.itemID = item.itemID;
            this.singleItem.itemName = item.itemName;
            this.singleItem.price = item.price;
            this.singleItem.categoryID = item.categoryID;
            this.singleItem.image = item.image;
            this.dialogs.item = true;
        },
        getSingleCategory(category) {
            this.singleCategory.categoryID = category.categoryID;
            this.singleCategory.categoryName = category.categoryName;
        },
        addItem() {
            if(this.singleItem.itemName && this.singleItem.categoryID && this.singleItem.price && this.singleItem.imageFile) {
                this.loadings.addItem = true;
                var f = new FormData();
                f.append('itemName', this.singleItem.itemName);
                f.append('categoryID', this.singleItem.categoryID);
                f.append('price', this.singleItem.price);
                f.append('itemImage', this.singleItem.imageFile);
                this.$axios.$post('/api/item/addItem', f).then((data) => {
                    this.items.unshift({
                        itemID: data.itemID,
                        itemName: this.singleItem.itemName,
                        categoryID: this.singleItem.categoryID,
                        categoryName: this.categories.find(obj => obj.categoryID == this.singleItem.categoryID).categoryName,
                        image: data.image
                    });
                }).finally(() => this.loadings.addItem = false);
            } else {
                alert('Fill all information correctly')
            }
        },
        addCategory() {
            if(this.singleCategory.categoryName) {
                this.loadings.addCategory = true;
                this.$axios.$post('/api/item/addCategory', {
                    categoryName: this.singleCategory.categoryName
                }).then((data) => {
                    this.categories.unshift({
                        categoryID: data.categoryID,
                        categoryName: this.singleCategory.categoryName
                    });
                    this.clearCategory();
                }).catch((err) => {
                    alert(err.response.data.message);
                }).finally(() => this.loadings.addCategory = false);
            } else {
                alert('Enter category name');
            }
        },
        updateItem() {
            if(this.singleItem.itemName && this.singleItem.categoryID && this.singleItem.price) {
                this.loadings.updateItem = true;
                this.$axios.$patch('/api/item/updateItem/' + this.singleItem.itemID, {
                    itemName: this.singleItem.itemName,
                    categoryID: this.singleItem.categoryID,
                    price: this.singleItem.price
                }).then(() => {
                    let index = this.items.findIndex(obj => obj.itemID == this.singleItem.itemID);
                    this.items[index].itemName = this.singleItem.itemName;
                    this.items[index].price = this.singleItem.price;
                    this.items[index].categoryID = this.singleItem.categoryID;
                    this.items[index].categoryName = this.categories.find(obj => obj.categoryID == this.singleItem.categoryID).categoryName;
                    alert('Success');
                }).finally(() => this.loadings.updateItem = false);
            } else {
                alert('Fill all information correctly')
            }
        },
        updateImage() {
            if(this.singleItem.imageFile) {
                this.loadings.updateImage = true;
                var f = new FormData();
                f.append('itemImage', this.singleItem.imageFile);
                this.$axios.$patch('/api/item/updateImage/' + this.singleItem.itemID, f).then((data) => {
                    let index = this.items.findIndex(obj => obj.itemID == this.singleItem.itemID);
                    this.items[index].image = data.image;
                    this.singleItem.image = data.image;
                    alert('Success')
                }).finally(() => this.loadings.updateImage = false);
            } else {
                alert('Please select an image');
            }
        },
        updateCategory() {
            if(this.singleCategory.categoryName) {
                this.loadings.updateCategory = true;
                this.$axios.$patch('/api/item/updateCategory/' + this.singleCategory.categoryID, {
                    categoryName: this.singleCategory.categoryName
                }).then(() => {
                    let index = this.categories.findIndex(obj => obj.categoryID == this.singleCategory.categoryID);
                    this.categories[index].categoryName = this.singleCategory.categoryName;
                    alert('Success');
                }).catch((err) => {
                    alert(err.response.data.message);
                }).finally(() => this.loadings.updateCategory = false);
            } else {
                alert('Enter category name');
            }
        },
        deleteItem(itemID) {
            if(confirm('Are you sure delete this item ?')) {
                this.$axios.$delete('/api/item/deleteItem/' + itemID).then(() => {
                    this.items = this.items.filter(obj => obj.itemID != itemID);
                });
            }
        },
        deleteCategory(categoryID) {
            if(confirm('Are you sure delete this category ?')) {
                this.$axios.$delete('/api/item/deleteCategory/' + categoryID).then(() => {
                    this.categories = this.categories.filter(obj => obj.categoryID != categoryID);
                }).catch((err) => {
                    alert(err.response.data.message);
                });
            }
        }
    },
    computed: {
        itemsHeader() {
            return [
                { text: '#', align: 'center', sortable: false },
                { text: 'Item Name', align: 'center', value: "itemName", sortable: false },
                { text: 'Category', align: 'center', sortable: false },
                { text: 'Price', align: 'center', sortable: false },
                { text: 'Actions', align: 'center', sortable: false },
            ]
        },
        categoriesHeader() {
            return [
                { text: '#', align: 'center', sortable: false },
                { text: 'Category Name', align: 'center', sortable: false },
                { text: 'Actions', align: 'center', sortable: false }
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