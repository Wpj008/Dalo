import api from "./axios";

export const getAgendas = async () => {
    const { data } = await api.get("/agendas");
    return data;
};

export const getAgenda = async (id) => {
    const { data } = await api.get(`/agendas/${id}`);
    return data;
};