<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card border-0 mb-4">
                <div class="card-body">
                    <form v-on:submit.prevent="createBuyer()">
                    <div class="form-group">
                        <label for="buyerName" class="font-weight-bold">Name</label>
                        <input type="text" id="buyerName" class="form-control" placeholder="Buyer Name" v-model="buyerName" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="buyerEmail" class="font-weight-bold">Email</label>
                        <input type="email" id="buyerEmail" class="form-control" placeholder="Buyer Email" v-model="buyerEmail" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="password" class="font-weight-bold">Password</label>
                        <input type="password" id="password" class="form-control" placeholder="Password" v-model="password" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="confirmPassword" class="font-weight-bold">Confirm Password</label>
                        <input type="password" id="confirmPassword" class="form-control" placeholder="Password Again" v-model="confirmPassword" autocomplete="off">
                    </div>
                    <button type="submit" class="btn btn-info" :disabled="createBuyerValidator">{{ registering ? 'Registering..' : 'Register'}}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BUYER_CREATE from '@/graphql/mutations/NewBuyer.gql'
import BUYERS_ALL from '@/graphql/queries/Buyers.gql'

export default {
    data () {
        return {
            buyerName: null,
            buyerEmail: null,
            password: null,
            confirmPassword: null,
            registering: false
        }
    },

    computed: {
        createBuyerValidator () {
            return (this.buyerName && this.buyerEmail && this.password && this.password == this.confirmPassword && !this.registering) ? false : true
        },
    },

    methods: {
        createBuyer() {
            this.registering = true
            this.$apollo.mutate({
                // Query
                mutation: BUYER_CREATE,
                // Parameters
                variables: {
                    buyerName: this.buyerName,
                    buyerEmail: this.buyerEmail,
                    password: this.password
                },
                update: (store, { data: { createBuyer } }) => {
                    const data = store.readQuery({ query: BUYERS_ALL })
                    data.getBuyers.push(createBuyer)
                    store.writeQuery({ query: BUYERS_ALL, data })
                },
            }).then((data) => {
                this.$router.push('/buyers')
            }).catch((error) => {
                console.error(error)
                this.registering = false
            })
        }
    }
}
</script>