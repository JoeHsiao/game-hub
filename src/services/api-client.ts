import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'f660128ab6634a8b9b0b2efdaec39e50'
    }
})