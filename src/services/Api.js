const BASE_URL = 'http://localhost:4000'
let ACCESS_TOKEN = null
export default class Api {

    static AUTH_LISTENERS = []

    listenAuth(component) {
        Api.AUTH_LISTENERS.push(component)
    }
     
    async request(method, uri, body = null) {
        const headers = {}


        const payload = {
            method,
            headers
        }
        if (method !== 'GET') {
            payload['body'] = JSON.stringify(body)
            payload.headers['Content-Type'] = 'application/json'
        }

        if (ACCESS_TOKEN) {
            headers['authorization'] = 'Bearer ' + ACCESS_TOKEN
        }

        console.log('payload =>>>>>', payload)
        const response = await fetch(BASE_URL + uri, payload)

        const json_response = await response.json()
        if (+response.status === 422) {
            throw new Error(json_response.message)
        }
        return json_response
    }

    getAccessToken() {
        return ACCESS_TOKEN
    }

    setAccessToken(token) {
        ACCESS_TOKEN = token
        if (token) {
            Api.AUTH_LISTENERS.forEach((component) => {
                component.setState({
                    ...component.state,
                    isLogged: true
                })
            })
            return
        }
        Api.AUTH_LISTENERS.forEach((component) => {
            component.setState({
                ...component.state,
                isLogged: false
            })
        })
    }


}