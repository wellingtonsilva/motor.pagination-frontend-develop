import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        "Content-Type": "application/json"
    }
});


api.interceptors.response.use(
    async (response) => {
       
        if ((response.config.url?.includes('_start') || response.config.url?.includes('_page')) && !response.headers['x-total-count']) {
            try {
                const baseUrl = response.config.url.split('?')[0];
                const totalResponse = await axios.get(`${response.config.baseURL}${baseUrl}`);
                
              
                response.headers['x-total-count']  = totalResponse.data.length.toString();
            } catch (error) {
                console.log('Erro ao buscar total de itens:', error);
            }
        }
        
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

