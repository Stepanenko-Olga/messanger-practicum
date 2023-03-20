import store from '../utils/Store';
import API, { ChatsAPI } from '../api/ChatsApi/ChatsApi';
import { CreateChatData } from '../api/ChatsApi/types';
import router from '../utils/router/Router';

export class ChatsController {
    private readonly api: ChatsAPI;

    constructor() {
        this.api = API;
    }

    async create(data: CreateChatData) {
        try {
            await this.api.create(data);
            await this.fetchChats();
            router.go('/messenger');
        } catch (e: any) {
            store.set('chats.error', e.message);
        }
    }

    async fetchChats() {
        try {
            store.set('chats.isLoading', true);
            const chats = await this.api.read();
            store.set('chats.data', chats);
            store.set('chats.isLoading', false);
        } catch (e: any) {
            store.set('chats.error', e.message);
        }
    }

    selectChat(id: number) {
        store.set('selectedChat', id);
    }

}

export default new ChatsController();

