import { defineStore } from 'pinia'

const useFormStore = defineStore('FormStore', {
    state: () => ({
            name: String,
            surname: String,
            phone: String,
            address: String,
            zip: Number,
            city: String,
            country: String,
            job: String
    }),
    getters: {
        formValues: (state) => state,
    },
    actions: {
        setFirstStepValues(data) {
            this.name = data.name
            console.log(this.name)
        }
    }
})

export default {
    useFormStore
}