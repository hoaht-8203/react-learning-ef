import axiosClient from './axiosClient';

const productApi = {
    async getAll(params) {
        const url = '/products';

        const newParams = { ...params };

        newParams._limit = params._limit || 16;
        newParams._page = params._page || 0;

        newParams._start = newParams._page <= 1 ? 0 : (newParams._page - 1) * newParams._limit;

        delete newParams._page;

        const productList = await axiosClient.get(url, { params: newParams });
        const count = await axiosClient.get(`${url}/count`, { params: newParams });

        return {
            data: productList,
            pagination: {
                page: Number(params._page),
                limit: Number(newParams._limit),
                total: count,
            },
        };
    },

    get(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = `/products`;
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/products/${data.id}`;
        return axiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    },
};

export default productApi;
