<script setup>
import { inject } from 'vue';
import Checkout from './components/Checkout.vue';

const i18n = inject('$i18n', null);

const switchLanguage = (language) => {
    if (i18n) {
        i18n.global.locale = language;
    }
};
</script>

<template>
    <p>
        <span @click="switchLanguage('pt')">BR</span> |
        <span @click="switchLanguage('es')">ES</span>
    </p>
    <Checkout />
</template>

<style lang="scss" scoped>
* {
    @include flex-col;
}

p {
    display: flex;
    flex-direction: row;
    justify-content: end;
}
</style>
