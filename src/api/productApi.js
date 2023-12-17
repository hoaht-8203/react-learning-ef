import axiosClient from './axiosClient';

const productApi = {
    async getAll(params) {
        const url = '/products';

        const newParams = { ...params };
        if (params._page) {
            newParams._start = params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 20);
        } else {
            newParams._start = 0;
        }

        delete newParams._page;

        const productList = await axiosClient.get(url, { params: newParams });
        const count = await axiosClient.get(`${url}/count`, { params: newParams });

        return {
            data: productList,
            pagination: {
                page: params._page,
                limit: params._limit,
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
