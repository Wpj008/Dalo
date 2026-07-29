import api from "./axios";

export const getTeachings = async () => {
    const { data } = await api.get("/teachings");
    return data;
};

export const getTeaching = async (id: number) => {
    const { data } = await api.get(`/teachings/${id}`);
    return data;
};