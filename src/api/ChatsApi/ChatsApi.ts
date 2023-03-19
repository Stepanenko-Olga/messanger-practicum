import BaseAPI from '../BaseApi/BaseApi';
import { CreateChatData, Chat } from './types';

export class ChatsAPI extends BaseAPI {
    constructor() {
        super('/chats');
    }

    create(data: CreateChatData) {
        return this.http.post('/', data);
    }


    delete() {
        return this.http.delete('/');
    }

    read(): Promise<Chat[]> {
        console.log("chats");
        return this.http.get('/');
    }


    update = undefined;

}

export default new ChatsAPI();
