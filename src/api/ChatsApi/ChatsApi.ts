import BaseAPI from '../BaseApi/BaseApi';
import { CreateChatData, Chat, UserChatData, DeleteChatData } from './types';

export class ChatsAPI extends BaseAPI {
    constructor() {
        super('/chats');
    }

    create(data: CreateChatData) {
        return this.http.post('/', data);
    }


    deleteChat(data: DeleteChatData) {
        return this.http.delete('/', data);
    }

    read(): Promise<Chat[]> {
        return this.http.get('/');
    }

    putUser(data: UserChatData) {
        return this.http.put('/users', data);
    }

    removeUser(data: UserChatData) {
        return this.http.delete('/users', data);
    }



    async getToken(id: number): Promise<string> {
        const response = await this.http.post<{ token: string }>(`/token/${id}`);

        return response.token;
    }


    update = undefined;
    delete = undefined;

}

export default new ChatsAPI();
