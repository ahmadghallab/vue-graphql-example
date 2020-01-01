<template>
    <div id="app">
        <AppHeader />
        <div class="container mt-4">
            <router-view/>
        </div>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
export default {
    components: {
        AppHeader
    }
}
</script>
<style>
body {
    font-family: 'Quicksand', sans-serif;
    background: #edeff0;
    color: #576366;
    -webkit-font-smoothing: antialiased;
}
.card, .jumbotron {
    background: #fff;
    box-shadow: 0 2px 0 rgba(0,0,0,0.06);
}
.router-link-exact-active {
    color: #fff !important;
}
.form-control {
    box-shadow: none;
    border: 2px solid #e8ebed;
    border-radius: 4px;
    background-color: #e8ebed;
    transition: color .1s ease, background-color .1s ease, border-color .1s ease, width .1s ease, opacity .1s ease;
}
.form-control:focus {
    border: 2px solid #e8ebed;
    background-color: #fff!important;
}
.btn:focus, .btn:active, .form-control:focus {
    box-shadow: none;
    outline: 0;
}
@keyframes fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translate(0, 20px);
        -ms-transform: translate(0, 20px);
        -moz-transform: translate(0, 20px);
        -o-transform: translate(0, 20px);
        transform: translate(0, 20px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -moz-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    }@-webkit-keyframes fadeInUp {
        0% {
        opacity: 0;
        -webkit-transform: translate(0, 20px);
        -ms-transform: translate(0, 20px);
        -moz-transform: translate(0, 20px);
        -o-transform: translate(0, 20px);
        transform: translate(0, 20px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -moz-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
    }
}
.card, .jumbotron {
    -webkit-animation-name: fadeInUp;
    -webkit-animation-duration: .5s;
    -webkit-animation-timing-function: ease;
    animation-name: fadeInUp;
    animation-duration: .5s;
    animation-timing-function: ease;
}
</style>
