import BaseAPI from "../BaseApi/BaseApi";
import { SearchUserData, UpdateData, UpdatePassword } from "./types";

export class UserAPI extends BaseAPI {
    constructor() {
        super('/user');
    }

    getUser(userId: number) {
        return this.http.get(`/${userId}`);
    }


    editUser(data: UpdateData) {
        return this.http.put('/profile', data);
    }

    editPassword(data: UpdatePassword) {
        return this.http.put('/password', data);
    }

    editAvatar(data: FormData) {
        return this.http.put('/profile/avatar', data);
    }

    searchUser(data: SearchUserData):  Promise<any> {
        return this.http.post('/search', data);
    }

    create = undefined;
    read = undefined;
    update = undefined;
    delete = undefined;
}
export default new UserAPI();
