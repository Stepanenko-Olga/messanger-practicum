import store from '../utils/Store';
import router from '../utils/router/Router';
import API, { UserAPI } from '../api/UserApi/UserApi';
import { UpdateData, UpdatePassword } from '../api/UserApi/types';
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
            console.log(e.message);
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
