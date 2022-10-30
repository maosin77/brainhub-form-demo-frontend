import axiosInstance from './instance';
import { User } from '../types/user';

class ApiClient {
    async createUser(user: User) {
        await axiosInstance.post('/users', user);
    }
}

export default new ApiClient();
