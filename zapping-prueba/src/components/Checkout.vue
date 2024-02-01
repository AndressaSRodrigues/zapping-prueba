<script setup>
import { ref } from 'vue';
import Loader from './Loader.vue';
import Success from './Success.vue';
import zappingBrand from '../assets/zapping.png';
import cardIcon from '../assets/mastercard.png';

const showLoader = ref(false);
const showSuccess = ref(false);

const handleConfirmation = () => {
    showLoader.value = true;
    setTimeout(() => {
        showLoader.value = false;
        showSuccess.value = true;
    }, 9000);
};

</script>

<template>
    <div v-if="!showLoader && !showSuccess">
        <nav>
            <img :src="zappingBrand" alt="Logo de la marca Zapping" width="auto" />
            <button>{{ $t('help') }}</button>
        </nav>

        <section>
            <h1>{{ $t('confirmation') }}</h1>
            <article class="subscription-details">
                <div class="plan-overview">
                    <h2>Plan Lite +</h2>
                    <p class="plan-info">
                        <span class="plan-price">
                            $13.900
                            <span class="plan-duration">
                                /{{ $t('duration') }}
                            </span>
                        </span>
                        <span class="plan-promo">
                            Promo
                        </span>
                    </p>
                    <p>
                        {{ $t('promo') }}
                        <br>
                        {{ $t('startDate') }}
                    </p>
                </div>

                <div class="plan-features">
                    <h3>{{ $t('includes') }}</h3>
                    <p class="features-1">
                        <span class="features-1-days">{{ $t('trial') }}</span>
                        <span>{{ $t('free') }}</span>
                    </p>
                    <p class="features-2">
                        {{ $t('startDate') }}
                    </p>
                </div>
                <hr>
                <div class="payment-method">
                    <div class="details">
                        <p>{{ $t('method') }}</p>
                        <span class="card-info">
                            <img :src="cardIcon" alt="Mastercard Icon" width="auto">
                            *** 123
                        </span>
                    </div>
                    <button>{{ $t('edit') }}</button>
                </div>
            </article>

            <article class="payment-confirmation">
                <p class="title">{{ $t('payNow') }} <span>$0</span></p>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt
                    ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam</p>
                <button @click="handleConfirmation">{{ $t('start') }}</button>
            </article>
        </section>
    </div>
    <Loader v-if="showLoader && !showSuccess" />
    <Success v-if="showSuccess" />
</template>

<style lang="scss" scoped>
* {
    font-family: $font-family-poppins;
}

nav {
    @include flex-row;
    width: 90%;
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
    margin-bottom: 1.6rem;

    h1 {
        font-size: 1.6rem;
        font-weight: 700;
        text-align: center;
        padding: 0.75rem 0;
    }

    .subscription-details {
        width: 19.5rem;
        height: fit-content;
        padding: 1.5rem;
        border: 1px solid $dark-gray;
        border-radius: 1rem;
        background-color: $dark-gray;

        .plan-overview {
            h2 {
                line-height: 0.375rem;
            }
        }

        .plan-info {
            .plan-price {
                font-size: 1rem;
                font-weight: 900;

                .plan-duration {
                    font-size: 0.75rem;
                    font-weight: 500;
                    color: $light-gray;
                }
            }

            .plan-promo {
                width: 2.5rem;
                height: 0.75rem;
                margin-left: 0.75rem;
                padding: 0.3rem;
                font-size: 0.75rem;
                font-weight: 400;
                text-align: center;
                border: none;
                border-radius: 3px;
                background-color: $purple;
            }
        }

        p {
            font-size: 0.75rem;
        }

        .plan-features {
            @include flex-col-start;
            height: 6.3rem;
            padding: 0.75rem;
            display: flex;
            line-height: 0.3rem;
            color: $light-gray;
            border-radius: 8px;
            border: 1px solid transparent;
            background:
                linear-gradient(#121416 0 0) padding-box,
                linear-gradient(to right, $pink, $yellow) border-box;
            overflow: hidden;

            h3 {
                font-weight: 500;
            }

            .features-1 {
                @include flex-row;
                width: 18rem;
                color: $white;
                font-size: 0.9rem;
                font-weight: 500;

                .features-1-days {
                    color: $pink;
                }
            }
        }

        hr {
            width: 98%;
            color: $gray;
            margin: 30px 0;
        }

        .payment-method {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .details {
                @include flex-row;

                .card-info {
                    @include flex-row;
                    gap: 10px;

                    img {
                        width: 24px;
                        height: 20px;
                        padding: 0.2rem;
                        background-color: $dark-gray;
                        border: 1px solid $gray;
                        border-radius: 4px;
                    }
                }

                p {
                    font-size: 0.9rem;
                }
            }

            button {
                height: 2rem;
                color: $white;
                font-size: 0.9rem;
                font-weight: 600;
                border: 1px solid $gray;
                border-radius: 4px;
                background-color: $dark-gray;
            }
        }
    }

    .payment-confirmation {
        padding: 0 1rem;

        .title {
            display: flex;
            justify-content: space-between;
            font-size: 2rem;
            font-weight: 500;
        }

        .description {
            color: $light-gray;
            font-size: 0.9rem;
            font-weight: 400;
            margin-bottom: 1.6rem;
        }

        button {
            width: 21.25rem;
            height: 3.25rem;
            padding: 0.5rem 2rem;
            color: $white;
            font-size: 0.875rem;
            font-weight: 700;
            border: none;
            border-radius: 4px;
            background-color: $pink;
        }
    }
}

@media screen and (min-width: 800px) {

    nav {
        padding: 3rem;
        margin-left: 1rem;
    }

    .payment-confirmation {
        width: 20rem;
    }
}
</style>