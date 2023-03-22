import store from '../utils/Store/Store';
import API, { ChatsAPI } from '../api/ChatsApi/ChatsApi';
import { AddToChatData, CreateChatData } from '../api/ChatsApi/types';
import router from '../utils/router/Router';
import MessagesController from './MessagesController';

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

    async putUser(data: AddToChatData) {
        try {
            await this.api.putUser(data);
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
            chats.map(async (chat) => {
                const token = await this.getToken(chat.id);
                await MessagesController.connect(chat.id, token);
            });
            store.set('chats.data', chats);
            store.set('chats.isLoading', false);
        } catch (e: any) {
            store.set('chats.error', e.message);
        }
    }

    selectChat(id: number) {
        const chat = store.getState().chats?.data.find((chat => chat.id === id));
        store.set('chats.selectedChat', chat);
    }

    getToken(id: number) {
        return this.api.getToken(id);
    }

}

const controller = new ChatsController();

// @ts-ignore
window.chatsController = controller;

export default controller;

