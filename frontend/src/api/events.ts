import api from "./axios";

export const getEvents = async () => {
    const { data } = await api.get("/events");
    return data;
};

export const getEvent = async (id: number) => {
    const { data } = await api.get(`/events/${id}`);
    return data;
};