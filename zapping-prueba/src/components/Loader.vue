<script setup>
import zappingLoader from '../assets/loader1.png';
</script>

<template>
    <section>
        <div class="outer-circle">
            <div class="inner-circle">
                <img :src="zappingLoader" alt="Zapping icons" width="auto" />
            </div>
        </div>
        <div class="loading-messages">
            <p>Estamos preparando tu plan</p>
            <p>Validando con el tío Zapping</p>
            <p>Descubriendo señales exclusivas</p>
            <p>Sintonizando los deportes en vivo</p>
            <p>Dando adiós al cable</p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    @include flex-col;
    margin-top: 8rem;
    font-family: $font-family-poppins;
}

.outer-circle {
    @include flex-col;
    width: 18.75rem;
    height: 18.75rem;
    border: 1px solid $gray;
    border-radius: 50%;

    .inner-circle {
        @include flex-col;
        width: 12.5rem;
        height: 12.5rem;
        border-radius: 50%;
        border: 5px solid transparent;
        background:
            linear-gradient(#121416 0 0) padding-box,
            linear-gradient(to right, $pink, $yellow) border-box;
        overflow: hidden;

        img {
            width: 120px;
            opacity: 30%;
            transition: transform 0.5s ease;
            animation: flip 1s infinite;
        }

        @keyframes flip {
            0% {
                transform: perspective(800px) rotateY(0deg);
            }

            50% {
                transform: perspective(800px) rotateY(180deg);
            }

            100% {
                transform: perspective(800px) rotateY(0deg);
            }
        }
    }
}

.loading-messages {
    margin-top: 4rem;
    text-align: center;
    overflow: hidden;
} 

.loading-messages p {
    font-weight: normal;
    opacity: 0;
    transform: translateY(20px);
    animation: slideup 10s infinite;
}

.loading-messages p.bold {
    font-weight: bolder;
}

.loading-messages p:nth-child(1) {
    animation-delay: 0s;
}

.loading-messages p:nth-child(2) {
    animation-delay: 1s;
}

.loading-messages p:nth-child(3) {
    animation-delay: 2s;
}

.loading-messages p:nth-child(4) {
    animation-delay: 3s;
}

.loading-messages p:nth-child(5) {
    animation-delay: 4s;
}

@keyframes slideup {
    0%, 25% {
        opacity: 0;
        transform: translateY(20px);
    }
    30%, 70% {
        opacity: 1;
        transform: translateY(0);
    }
    75%, 100% {
        opacity: 0;
        transform: translateY(-20px);
    }
}
</style>