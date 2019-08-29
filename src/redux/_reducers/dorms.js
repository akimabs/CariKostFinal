import * as type from '../types'

const initialState = {
    isLoading: true,
    data: [],
    error: null
}

export default function dorms(state = initialState, action) {
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state,
                isLoading: true
            }

        case 'GET_DORMS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data
            }
        case 'GET_DORMS_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: payload.message
            }

        default:
            return state
    }
}

