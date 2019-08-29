import axios from 'axios'

import env from '../../env/env'

export const getDorms = () => ({
    type: "GET_DORMS",
    payload: axios.get(env.host + "dorms")
})