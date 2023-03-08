import router from "./router"

const BASE_URL = 'https://hiring-test-dxxsnwdabq-oa.a.run.app/'

const form = {
    getRoles: async () => {
        const res = await fetch(BASE_URL + 'getRoles')
        return res;
    },
    sendData: async (data) => {
        const res = await fetch(BASE_URL + "sendData", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
                Accept: "*/*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data }),
        })

        return res
    }
}

export default {
    form
}