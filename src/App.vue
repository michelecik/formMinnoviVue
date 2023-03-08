<template>
    <div class="wrapper">
        <div class="section">
            <div id="signInForm">
                
                <h1>Registrati in un attimo</h1>
                
                <div class="steps">
                    <div
                        class="step"
                        :class="$route.path == '/' ? 'active' : ''"
                        id="step1"
                    >
                        1
                    </div>
                    <p>Dati Personali</p>
                    <div class="line"></div>
                    <div
                        class="step"
                        :class="$route.path == '/step2' ? 'active' : ''"
                        id="step2"
                    >
                        2
                    </div>
                    <p>Occupazione</p>
                </div>

                <RouterView @firstStepDone="test" @sendData="sendData" />
            </div>
        </div>
        <div class="section" id="gradient">
            <div id="welcomeCard">
                <h3>Benvenuto!</h3>

                <div id="mailIcon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                    </svg>
                </div>

                <p>
                    Registrati e inizia a gestire i tuoi <br />
                    contatti con un click!
                </p>
            </div>
        </div>

        <div v-if="showModal" class="backdropModal">
            <div id="modal">
                <h1 id="message">{{modalMessage}}</h1>
                <button @click="closeModal" id="closeModal">Ok</button>
            </div>
        </div>
    </div>
</template>

<script>
import { inject, reactive, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

export default {
    setup() {
        const BASE_URL = "https://hiring-test-dxxsnwdabq-oa.a.run.app/";

        const api = inject('api')

        const showModal = ref(false);
        const modalMessage = ref('')

        const activeTab = ref(1);

        const formValues = reactive({
            name: null,
            surname: null,
            phone: null,
            address: null,
            zip: null,
            province: null,
            city: null,
            country: null,
            email: null,
            job: null,
        });

        const test = (data) => {
            formValues.name = data.name;
            formValues.surname = data.surname;
            formValues.phone = data.phone;
            formValues.address = data.address;
            formValues.zip = data.cap;
            formValues.province = data.province;
            formValues.city = data.city;
            formValues.country = data.country;
            formValues.email = data.email;

            activeTab.value = 2;
        };

        const sendData = (job) => {
            formValues.job = job;

            api.form.sendData(formValues).then((res) => {
                showModal.value = true;

                if (res.status == 200) {
                    modalMessage.value = 'Utente registrato'
                } else {
                    modalMessage.value = 'Qualcosa è andato storto'
                }
            });
        };

        const closeModal = () => {
            showModal.value = false;
        };

        return {
            test,
            sendData,
            showModal,
            closeModal,
            activeTab,
            modalMessage
        };
    },
};
</script>