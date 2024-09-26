
import axios from "axios";

export const userGet = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/user/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching event:', error);
        throw error; // Ви також можете прокинути помилку далі
    }
}
