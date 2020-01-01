<template>
  <div>
    <ApolloQuery :query="productsQuery">
      <template slot-scope="{ result: { data, loading }, isLoading }">
        <Loader v-if="isLoading" />
        <div v-else>
          <div class="card border-0 mb-4">
            <div class="card-body">
              <div class="row justify-content-between">
                <div class="col align-self-center">
                  <h5 class="card-title font-weight-bold mb-2">Explore products</h5>
                  <p class="card-text mb-0">{{ data.getProducts.length }} Products</p>
                </div>
                <div class="col-auto align-self-center">
                  <router-link :to="{ name: 'addProduct' }" class="btn btn-info">Add Product</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3" v-for="product of data.getProducts" :key="product.productID">
              <div class="card border-0 mb-4">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">{{ product.productName }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">product subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import productsQuery from '@/graphql/queries/Products.gql'
import Loader from '@/components/Loader.vue'

export default {
  components: {
    Loader
  },

  data () {
    return {
      productsQuery
    }
  },

}
</script>