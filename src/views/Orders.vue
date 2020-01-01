<template>
  <div>
    <ApolloQuery :query="ordersQuery">
      <template slot-scope="{ result: { data, loading }, isLoading }">
        <Loader v-if="isLoading" />
        <div v-else>
          <div class="card border-0 mb-4">
            <div class="card-body">
              <div class="row justify-content-between">
                <div class="col align-self-center">
                  <h5 class="card-title font-weight-bold mb-2">All Orders</h5>
                  <p class="card-text mb-0">{{ data.getOrders.length }} Orders</p>
                </div>
                <div class="col-auto align-self-center">
                  
                </div>
              </div>
            </div>
          </div>
          <div class="card border-0 mb-4">
            <div class="card-body">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" class="border-top-0">Order ID</th>
                    <th scope="col" class="border-top-0">Buyer Name</th>
                    <th scope="col" class="border-top-0">Product</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="order of data.getOrders" :key="order.orderID">
                    <td>{{ order.orderID }}</td>
                    <td>{{ order.buyer.buyerName }}</td>
                    <td>{{ order.product.productName }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import ordersQuery from '@/graphql/queries/Orders.gql'
import Loader from '@/components/Loader.vue'

export default {
  components: {
    Loader
  },

  data () {
    return {
      ordersQuery
    }
  }
}
</script>