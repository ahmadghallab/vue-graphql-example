<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card border-0 mb-4">
                <div class="card-body">
                    <form v-on:submit.prevent="createProduct()">
                    <div class="form-group">
                        <label for="productName" class="font-weight-bold">Add a new product</label>
                        <input type="text" id="productName" class="form-control" placeholder="Product Name" v-model="productName" autocomplete="off">
                    </div>
                    <button type="submit" class="btn btn-info" :disabled="createProductValidator">{{ saving ? 'Saving..' : 'Save'}}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PRODUCTS_CREATE from '@/graphql/mutations/AddProduct.gql'
import PRODUCTS_ALL from '@/graphql/queries/Products.gql'

export default {
    data () {
        return {
            productName: null,
            saving: false
        }
    },

    computed: {
        createProductValidator () {
            return (this.productName && !this.saving) ? false : true
        },
    },

    methods: {
        createProduct() {
            this.saving = true
            this.$apollo.mutate({
                // Query
                mutation: PRODUCTS_CREATE,
                // Parameters
                variables: {
                    productName: this.productName
                },
                update: (store, { data: { createProduct } }) => {
                    const data = store.readQuery({ query: PRODUCTS_ALL })
                    data.getProducts.push(createProduct)
                    store.writeQuery({ query: PRODUCTS_ALL, data })
                },
            }).then((data) => {
                this.$router.push('/products')
            }).catch((error) => {
                console.error(error)
            })
        }
    }
}
</script>