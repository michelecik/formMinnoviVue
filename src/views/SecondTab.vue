<template>
    <form class="tab" id="jobData" @submit.prevent="sendData">
        <div>
            <p class="formInfo">Qual'è la tua occupazione attuale?</p>
            <div class="formGroup">
                <div id="jobInfo" class="group">
                    <p class="formGroupTitle">Occupazione</p>
                    <div class="fields">
                        <CustomSelect
                            @input="setJob"
                            :options="roles"
                            default="Seleziona"
                        />
                    </div>
                </div>
            </div>
        </div>
        <button id="confirm">CONFERMA</button>
    </form>
</template>

<script>
import { inject, ref } from "vue";
import CustomSelect from "../components/CustomSelect.vue";
export default {
    components: {
        CustomSelect,
    },
    setup(props, { emit }) {
        const api = inject("api");

        const job = ref("");

        const roles = ref([]);

        const setJob = (val) => {
            job.value = val;
        };

        const sendData = () => {
            emit("sendData", job.value);
        };

        const getRoles = () => {
            api.form
                .getRoles()
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    roles.value = data.data;
                });
        };

        getRoles();

        return {
            roles,
            sendData,
            job,
            setJob,
        };
    },
};
</script>

<style>
</style>