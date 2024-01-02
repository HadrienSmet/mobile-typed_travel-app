import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";

import { axiosSignIn } from "../../../services";
import { setUserData } from "../../../features";
import { useAuthenticationForm } from "../../../hooks";

import { UseFormOutput } from "./types";

export const useForm = (): UseFormOutput => {
    const router = useRouter();
    const dispatch = useDispatch();

    const {
        email,
        password,
        handleEmail,
        handlePassword,
    } = useAuthenticationForm();

    const handlePress = () => {
        if (email !== "" && password !== "") {
            const data = { email: email.toLowerCase(), password };
            // axiosSignIn(data)
            //     .then((res) => {
            //         dispatch(setUserData(res.data));
            //         router.push("/home");
            //     })
            //     .catch(() => alert("Invalid password or email adress"));
            console.log("data", data);
        } else {
            alert("Those fields are requiered");
        }
    };

    return {
        email,
        password,
        handleEmail,
        handlePassword,
        handlePress,
    }
};
