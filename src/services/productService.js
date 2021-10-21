import axios from 'axios'
const baseURL = "/api/"

const getAll = () => {
    return axios.get(baseURL + "products")
                .then(response => response.data)
}
const getProduct = (id) => {
    return axios.get("/api/products/" + id)
                .then(response => response.data)
                .then(data => console.log("got it!", data))
}
const getCart = () => {
    return axios.get(baseURL + "cart")
                .then(response => response.data)
}
const addtoCart = (newItem) => {
    console.log(newItem)
    return axios.post(baseURL + "cart", newItem)
                .then((response) => response.data)
}

const updateCart = (thing) => {
    return axios.put(baseURL + "cart/" + thing.id, thing)
                .then((response) => response.data)
}

const removeCart = (thing) => {
    console.log(thing.id)
    return axios.delete(baseURL + "cart/" + thing.id)
                .then((response) => response.data)
}

const login = ({username, password}) => {
    return axios.post(baseURL + 'login', {username, password})
    .then(response => response.data)
}

const productService = {getAll, getProduct, getCart, addtoCart, updateCart, removeCart, login}

export default productService;


