import Axios from "axios"

export default class openhabAPI {

    static async setItem(item, value) {
        const response = await Axios.post(
            'http://openhab:8080/rest/items/'+item,
            value,
            { headers: { 'Content-Type': 'text/plain' } }
          )
          console.log(response.data)
    }

    static async getItem(item) {
        const response = await Axios.get(
            'http://openhab:8080/rest/items/'+item,
            { headers: {'Content-Type': 'application/json'}}
          )
        //   console.log(response.data)
          return response.data.state;
    }
}