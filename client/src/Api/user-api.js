import axios from "axios";

export const login = async (email, password) => {
    const payload = new URLSearchParams({
        email: email,
        password: password,
    });

    try {
        const { data } = await axios.post("login", payload);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const signup = async (displayname, email, password) => {
    const payload = new URLSearchParams({
        username: displayname,
        email: email,
        password: password,
    });

    try {
        const { data } = await axios.post("register", payload);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getCurrentUser = async () => {
    try {
        const { data } = await axios.get("currentUser");
        return data;
    } catch (error) {
        console.log(error);
    }
};
