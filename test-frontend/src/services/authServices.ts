import axios from 'axios';

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    code: number;
    message: string;
    data: {
        tokens: { access: string; refresh: string }
        me: {
            id: string;
            email: string;
        }
    };
}

export const loginUser = async (
    credentials: LoginRequest
): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>(
        'http://192.52.166.100:5000/auth/login',
        credentials
    );
    return response.data;
};
