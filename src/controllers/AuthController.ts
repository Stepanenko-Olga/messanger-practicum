import API, { AuthAPI } from '../api/AuthApi/AuthApi';
import store from '../utils/Store';
import router from '../utils/router/Router';
import { SigninData, SignupData } from '../api/AuthApi/types';

export class AuthController {
    private readonly api: AuthAPI;

    constructor() {
        this.api = API;
    }

    async signin(data: SigninData) {
        try {
            await this.api.signin(data);
            await this.fetchUser();
            router.go('/settings');
        } catch (e: any) {
            store.set('user.error', e.message);
        }
    }

    async signup(data: SignupData) {

        try {
            await this.api.signup(data);
            await this.fetchUser();
            router.go('/settings');
        } catch (e: any) {
            store.set('user.error', e.message);
        }
    }

    async fetchUser() {
        store.set('user.isLoading', true);
        const user = await this.api.read();
        store.set('user.data', user);
        store.set('user.isLoading', false);        
    }

    async logout() {
        try {
            console.log("logout");
            await this.api.logout();
            store.set('user.data', undefined);
            router.go('/');
        } catch (e: any) {
            store.set('user.error', e.message);
        }
    }
}

export default new AuthController();