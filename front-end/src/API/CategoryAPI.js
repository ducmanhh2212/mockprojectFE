import { api } from "./API"

// lay danh sach Category
export let getListCategorysAPI = () => {
    return api("GET", "categorys", null);
};

export let addCategoryNewAPI = (categoryNew) => {
    return api("POST", "categorys", categoryNew );
};

export let deleteCategoryAPI = (id) => {
    return api("DELETE", "categorys/" + id, null);
};

export let updateCategoryAPI = (categoryUpdate) => {
    return api("PUT", "categorys/" + categoryUpdate.id, categoryUpdate);
};