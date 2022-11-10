import axios from 'axios'

const bearerToken = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
const url = `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=${bearerToken}`

export const getTasks = () => {
  return axios
    .get(url)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error.message)
    })
}
