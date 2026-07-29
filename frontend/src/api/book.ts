import api from "./axios";

export const getBooks = async () => {
    const { data } = await api.get("/books");
    return data;
};

export const getBook = async (id: number) => {
    const { data } = await api.get(`/books/${id}`);
    return data;
};