<template>
  <div>
    <ApolloQuery :query="buyerOrdersQuery" :variables="{ buyerID: $route.params.id }">
      <template slot-scope="{ result: { data, loading }, isLoading }">
        <Loader v-if="isLoading" />
        <div v-else>
            <div class="card border-0 mb-4">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold mb-2">{{ data.getBuyer.buyerName }}</h5>
                  <p class="card-text mb-0">{{ data.getBuyer.orders.length ? data.getBuyer.orders.length + ' Orders' : 'No orders yet' }}</p>
                </div>
            </div>
            <div class="card border-0 mb-4" v-if="data.getBuyer.orders.length">
                <div class="card-body">
                    <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col" class="border-top-0">Order ID</th>
                        <th scope="col" class="border-top-0">Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="order of data.getBuyer.orders" :key="order.orderID">
                            <td>{{ order.orderID }}</td>
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
import buyerOrdersQuery from '@/graphql/queries/BuyerOrders.gql'
import Loader from '@/components/Loader.vue'

export default {
    components: {
        Loader
    },

    data () {
        return {
            buyerOrdersQuery
        }
    }
}
</script>