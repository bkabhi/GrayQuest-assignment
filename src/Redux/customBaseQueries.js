import axios from 'axios'

const axiosBaseQuery = ({ baseUrl } = { baseUrl: '' }) => async ({ url, method, data, params }) => {
    try {
        const result = await axios({ url: baseUrl + url, method, data, params })
        return { data: result.data }
    } catch (axiosError) {
        let err = axiosError
        return {
            error: {
                status: err.response?.status,
                data: err.response?.data || err.message,
            },
        }
    }
}

export default axiosBaseQuery;