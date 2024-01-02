import axios from "axios";

type SigninRequest = {
    email: string;
    password: string;
};

export const axiosSignIn = async (data: SigninRequest) => {
    return await axios.post(
        `${process.env.EXPO_API_URL}api/auth/signin`,
        data,
        {
            headers: { "Content-Type": "application/json" },
        }
    );
};
