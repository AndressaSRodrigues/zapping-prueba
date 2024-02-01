<script setup>
import Checkout from './components/Checkout.vue';
import Loader from './components/Loader.vue';
import Success from './components/Success.vue';
</script>

<template>
    <Checkout />
    <Loader />
    <Success />
</template>

<style lang="scss" scoped>
* {
    @include flex-col;
}
</style>
