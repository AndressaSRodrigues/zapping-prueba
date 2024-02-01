<script setup>
import zappingBrand from '../assets/zapping2.png';
import successCheck from '../assets/success.png';
</script>

<template>
    <nav>
        <img :src="zappingBrand" alt="Logo de la marca Zapping" width="auto" />
        <button>Ayuda</button>
    </nav>
    <section>
        <img :src="successCheck" alt="Success checkmark" width="auto">
        <p class="success-title">Muy bien!</p>
        <p class="success-message">Tu suscripción a Zapping está lista, ya puedes comenzar a ver TV.</p>
        <button>Regresar</button>
    </section>
</template>

<style lang="scss" scoped>
* {
    font-family: $font-family-poppins;
}

nav {
    @include flex-row;
    padding: 3rem 1.5rem 1.5rem 1.5rem;

    img {
        height: 1rem;
    }

    button {
        @include nav-button;
    }
}

section {
    @include flex-col;
    text-align: center;

    img {
        width: 8rem;
        margin: 8rem 0 4rem 0;
        opacity: 0;
        animation: fadein 2s forwards;
    }

    @keyframes fadein {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .success-title {
        font-size: 1.6rem;
        font-weight: 600;
    }

    .success-message {
        font-size: 0.9rem;
        font-weight: 400;
        color: $gray;
    }

    button {
        width: 21.5rem;
        height: 3.25rem;
        margin: 2rem 0;
        color: $white;
        font-weight: 700;
        font-size: 14px;
        border: 1px solid $gray;
        border-radius: 4px;
        background-color: $bgColor;
    }
}
</style>
