import store from '../utils/Store/Store';
import router from '../utils/router/Router';
import API, { UserAPI } from '../api/UserApi/UserApi';
import { SearchUserData, UpdateData, UpdatePassword } from '../api/UserApi/types';
import AuthController from './AuthController';

export class UserController {
    private readonly api: UserAPI;

    constructor() {
        this.api = API;
    }

    async getUser(userId: number) {
        try {
            await this.api.getUser(userId);
        } catch (e: any) {
            store.set('user.error', e.message);
        }
    }

    async searchUser(data: SearchUserData) {
        try {
            store.set('user.isLoading', true);
            const response = await this.api.searchUser(data);
            const selectedUser = JSON.parse(JSON.stringify(response))[0];
            store.set('user.selectedUser', selectedUser);
            store.set('user.isLoading', false);
        }
        catch (e: any) {
            store.set('user.error', e.message);
        }
    }

    async editUser(data: UpdateData) {
        try {
            await this.api.editUser(data);
            await AuthController.fetchUser();
            router.go('/settings');
        } catch (e: any) {
            store.set('user.error', e.message);
        }
    }

    async editPassword(data: UpdatePassword) {
        try {

            await this.api.editPassword(data);
            await AuthController.fetchUser();

            router.go('/settings');
        } catch (e: any) {
            store.set('user.error', e.message);
        }
    }

    async editAvatar(data: FormData) {
        try {
            await this.api.editAvatar(data);
            await AuthController.fetchUser();
            router.go('/settings');
        } catch (e: any) {
            store.set('user.error', e.message);
        }
    }





}

export default new UserController();
/* function _then(arg0: (res: XMLHttpRequest) => any) {
    throw new Error('Function not implemented.');
} */

