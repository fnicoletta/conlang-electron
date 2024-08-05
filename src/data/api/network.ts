import axios from 'axios';

type TRequest = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const baseUrl = 'http://localhost:6062/api';

export const makeRequest = async <T>(path: string, requestType: TRequest, params?: any, body?: T) => {

    return new Promise<T | void>(async (resolve, reject) => {
        const response = await axios({
            method: requestType,
            url: `${baseUrl}/${path}`,
            params,
            data: body
        })

        if (response.status === 200) resolve(response.data)
        else reject()
    })

}