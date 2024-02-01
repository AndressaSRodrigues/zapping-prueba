<script setup>
import zappingBrand from '../assets/zapping.png'
</script>

<template>
    <header>
        <img :src="zappingBrand" alt="Zapping Logo" width="auto" />
        <button>Ayuda</button>
    </header>

    <section>
        <h1>Confirma tu suscripción</h1>
        <div class="add-on">
            <div class="plan-overview">
                <h2>Plan Lite +</h2>
                <p class="plan-info-container">
                    <span class="plan-info">
                        $13.900
                        <span class="plan-duration">
                            /3 meses
                        </span>
                    </span>
                    <span class="plan-promo">
                        Promo
                    </span>
                </p>
                <p>
                    Promoción activa: 3 meses por $00.000.
                    <br>
                    A partir del 00/00/00, $00.000/mes
                </p>
            </div>

            <div class="plan-features">
                <h3>INCLUYE</h3>
                <p class="features-1">
                    <span class="features-1-days">7 días de pruebas</span>
                    <span>Gratis</span>
                </p>
                <p class="features-2">
                    A partir del 00/00/00, $00.000/mes
                </p>
            </div>
            <hr>
            <div class="payment">
                <div class="details">
                    <p>Método de pago</p>
                    <span class="card-info"> *** 123</span>
                </div>
                <button>Editar método de pago</button>
            </div>
        </div>

        <div class="confirmation">
            <p class="title">Pagas Ahora <span>$0</span></p>
            <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore
                magna aliqua. Ut enim ad minim veniam</p>
            <button>Comenzar mi prueba gratis</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
* {
    font-family: $font-family-poppins;
}

header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 48px 24px 24px 24px;

    img {
        height: 16px;
    }

    button {
        width: 71px;
        height: 32px;
        border: 1px solid $gray;
        border-radius: 74px;
        background-color: $gray;
        color: $white;
        font-weight: 600;
    }
}

section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;

    h1 {
        font-size: 25px;
        font-weight: 700;
        text-align: center;
        padding: 12px 0px 12px 0px;
    }

    .add-on {
        display: flex;
        flex-direction: column;
        width: 312px;
        height: fit-content;
        padding: 24px;
        border: 1px solid $dark-gray;
        border-radius: 16px;
        background-color: $dark-gray;

        .plan-overview {
            h2 {
                line-height: 6px;
            }
        }

        .plan-info-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 12px;

            .plan-info {
                font-size: 16px;
                font-weight: 900;

                .plan-duration {
                    font-size: 12px;
                    font-weight: 500;
                    color: $light-gray;
                }
            }

            .plan-promo {
                width: 41px;
                height: 12px;
                padding: 5px 5px 8px 5px;
                font-size: 12px;
                font-weight: 400;
                text-align: center;
                border: none;
                border-radius: 3px;
                background-color: $purple;
            }
        }

        p {
            font-size: 12px;
        }

        .plan-features {
            height: 101px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            line-height: 5px;
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
                width: 288px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                color: $white;
                font-size: 14px;
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

        .payment {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .details {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

                p {
                    font-size: 14px;
                }
            }

            button {
                height: 32px;
                color: $white;
                font-size: 14px;
                font-weight: 600;
                border: 1px solid $gray;
                border-radius: 4px;
                background-color: $dark-gray;
            }
        }
    }

    .confirmation {
        display: flex;
        flex-direction: column;
        padding: 0 16px;


        .title {
            display: flex;
            justify-content: space-between;
            font-size: 32px;
            font-weight: 500;
        }

        .description {
            color: $light-gray;
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 25px;
        }

        button {
            width: 340px;
            height: 52px;
            padding: 8px 32px 8px 32px;
            color: $white;
            font-size: 14px;
            font-weight: 700;
            border: none;
            border-radius: 4px;
            background-color: $pink;
        }
    }
}
</style>