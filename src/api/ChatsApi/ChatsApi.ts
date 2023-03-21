import BaseAPI from '../BaseApi/BaseApi';
import { CreateChatData, Chat, AddToChatData } from './types';

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
        return this.http.get('/');
    }

    putUser(data: AddToChatData) {
        return this.http.put('/users', data);
    }



    async getToken(id: number): Promise<string> {
        const response = await this.http.post<{ token: string }>(`/token/${id}`);
    
        return response.token;
      }


    update = undefined;

}

export default new ChatsAPI();
