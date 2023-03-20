
import { Message } from '../api/ChatsApi/types';
import store from '../utils/Store';
import WSTransport, { WSTransportEvents } from '../utils/WSTransport';



class MessagesController {
    private sockets: Map<number, WSTransport> = new Map();

    async connect(id: number, token: string) {
        if (this.sockets.has(id)) {
            return;
        }

        const userId = store.getState().user?.data.id;

        const wsTransport = new WSTransport(`wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`);

        this.sockets.set(id, wsTransport);

        await wsTransport.connect();

        this.subscribe(wsTransport, id);
        this.fetchOldMessages(id);
    }

    sendMessage(id: number, message: string) {
        const socket = this.sockets.get(id);

        if (!socket) {
            throw new Error(`Chat ${id} is not connected`);
        }

        socket.send({
            type: 'message',
            content: message,
        });
    }

    fetchOldMessages(id: number) {
        const socket = this.sockets.get(id);

        if (!socket) {
            throw new Error(`Chat ${id} is not connected`);
        }

        socket.send({ type: 'get old', content: '0' });
    }

    closeAll() {
        Array.from(this.sockets.values()).forEach(socket => socket.close());
    }

    private onMessage(id: number, messages: Message | Message[]) {
        let messagesToAdd: Message[] = [];

        if (Array.isArray(messages)) {
            messagesToAdd = messages.reverse();
        } else {
            messagesToAdd.push(messages);
        }

        const currentMessages = (store.getState().messages?.data || {})[id] || [];

        messagesToAdd = [...currentMessages, ...messagesToAdd];

        store.set(`messages.data.${id}`, messagesToAdd);     
    }

    private onClose(id: number) {
        this.sockets.delete(id);
    }

    private subscribe(transport: WSTransport, id: number) {
        transport.on(WSTransportEvents.Message, (message) => this.onMessage(id, message));
        transport.on(WSTransportEvents.Close, () => this.onClose(id));
    }
}


const controller = new MessagesController();

// @ts-ignore
window.messagesController = controller;

export default controller;
