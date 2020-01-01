<template>
  <div>
    <ApolloQuery :query="buyersQuery">
      <template slot-scope="{ result: { data, loading }, isLoading }">
        <Loader v-if="isLoading" />
        <div v-else>
          <div class="card border-0 mb-4">
            <div class="card-body">
              <div class="row justify-content-between">
                <div class="col align-self-center">
                  <h5 class="card-title font-weight-bold mb-2">Buyers</h5>
                  <p class="card-text mb-0">{{ data.getBuyers.length }} Buyers</p>
                </div>
                <div class="col-auto align-self-center">
                  <router-link :to="{ name: 'newBuyer' }" class="btn btn-info">New Buyer</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="card border-0 mb-4">
            <div class="card-body">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" class="border-top-0">Buyer ID</th>
                    <th scope="col" class="border-top-0">Buyer Name</th>
                    <th scope="col" class="border-top-0">Buyer Email</th>
                    <th scope="col" class="border-top-0"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="buyer of data.getBuyers" :key="buyer.buyerID">
                    <td>{{ buyer.buyerID }}</td>
                    <td>{{ buyer.buyerName }}</td>
                    <td>{{ buyer.buyerEmail }}</td>
                    <td>
                      <router-link :to="{name: 'buyerOrders', params: { id: buyer.buyerID }}" class="btn btn-sm btn-light">
                        Orders
                      </router-link>
                    </td>
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
import buyersQuery from '@/graphql/queries/Buyers.gql'
import Loader from '@/components/Loader.vue'

export default {
  components: {
    Loader
  },

  data () {
    return {
      buyersQuery
    }
  }
}
</script>