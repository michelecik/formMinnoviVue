<template>
    <form class="tab" id="personalData" @submit.prevent="nextStep()">
        <div>
            <p class="formInfo">Compila i campi seguenti</p>

            <div class="formGroup">
                <div id="contactInfo" class="group">
                    <p class="formGroupTitle">
                        Informazioni personali e di contatto
                    </p>
                    <div class="fields">
                        <div class="inputWrap">
                            <input
                                class="input"
                                required
                                type="text"
                                placeholder=" "
                                id="firstName"
                                v-model="formValues.name"
                            />
                            <label for="firstName">Nome</label>
                        </div>
                        <div class="inputWrap">
                            <input
                                class="input"
                                required
                                type="text"
                                placeholder=" "
                                id="lastName"
                                v-model="formValues.surname"
                            />
                            <label for="lastName">Cognome</label>
                        </div>
                        <div class="inputWrap">
                            <input
                                class="input"
                                required
                                type="tel"
                                placeholder=" "
                                id="tel"
                                v-model="formValues.phone"
                            />
                            <label for="tel">Telefono</label>
                        </div>
                        <div class="inputWrap">
                            <input
                                class="input"
                                required
                                type="email"
                                placeholder=" "
                                id="email"
                                v-model="formValues.email"
                            />
                            <label for="email">Email</label>
                        </div>
                    </div>
                </div>

                <div id="addressInfo" class="group">
                    <p class="formGroupTitle">Indirizzo</p>
                    <div class="fields">
                        <div class="inputWrap">
                            <input
                                class="input"
                                required
                                type="text"
                                placeholder=" "
                                id="address"
                                v-model="formValues.address"
                            />
                            <label for="address">Indirizzo</label>
                        </div>
                        <div class="inputWrap small">
                            <input
                                id="cap"
                                class="input"
                                required
                                type="number"
                                placeholder=" "
                                v-model="formValues.cap"
                            />
                            <label for="cap">Cap</label>
                        </div>
                        <div class="inputWrap small">
                            <input
                                id="province"
                                class="input"
                                required
                                type="text"
                                placeholder=" "
                                v-model="formValues.province"
                            />
                            <label for="province">Provincia</label>
                        </div>
                        <div class="inputWrap">
                            <input
                                class="input"
                                required
                                type="text"
                                placeholder=" "
                                id="city"
                                v-model="formValues.city"
                            />
                            <label for="city">City</label>
                        </div>
                        <div class="inputWrap">
                            <input
                                class="input"
                                required
                                type="text"
                                placeholder=" "
                                id="nation"
                                v-model="formValues.country"
                            />
                            <label for="nation">Nazione</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button id="continua">CONTINUA</button>
    </form>
</template>

<script>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import useFormStore from "../store/form";

export default {
    name: "FirstTab",
    emits: ["firstStepDone"],
    setup(props, ctx) {
        const router = useRouter();
        const store = useFormStore;

        const formValues = reactive({
            name: null,
            surname: null,
            phone: null,
            email: null,
            address: null,
            cap: null,
            province: null,
            city: null,
            country: null,
            email: null,
        });

        const nextStep = () => {
            ctx.emit("firstStepDone", formValues);
            router.push("/step2");
        };

        return {
            nextStep,
            formValues,
        };
    },
};
</script>

<style>
</style>