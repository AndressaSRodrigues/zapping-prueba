<script setup>
import { inject } from 'vue';
import Checkout from './components/Checkout.vue';
import brazilFlag from './assets/brasil.png';
import chileFlag from './assets/chile.png';

const i18n = inject('$i18n', null);

const switchLanguage = (language) => {
    if (i18n) {
        i18n.global.locale = language;
    }
};
</script>

<template>
    <div>
        <span @click="switchLanguage('pt')"><img :src="brazilFlag" alt="Portugues"></span>
        <span @click="switchLanguage('es')"><img :src="chileFlag" alt="Espanol"></span>
    </div>
    <Checkout />
</template>

<style lang="scss" scoped>
* {
    @include flex-col;
}

div {
    margin-right: 1.2rem;
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: 0.5rem;
    
    img {
        width: 1.5rem;
        cursor: pointer;
    }
}

@media screen and (min-width: 800px) {
div {
    margin-right: 5.8rem;
}
}
</style>
