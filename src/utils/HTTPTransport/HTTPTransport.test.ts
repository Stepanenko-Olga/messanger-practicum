import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import HTTPTransport from './HTTPTransport';
import { expect } from 'chai';

describe('HTTPTransport', () => {
    let xhr: SinonFakeXMLHttpRequestStatic;
    let instance: HTTPTransport;
    const requests: SinonFakeXMLHttpRequest[] = [];

    beforeEach(() => {
        xhr = sinon.useFakeXMLHttpRequest();

        // @ts-ignore
        global.XMLHttpRequest = xhr;

        xhr.onCreate = ((request: SinonFakeXMLHttpRequest) => {
            requests.push(request);
        });

        instance = new HTTPTransport('/auth');
    });

    afterEach(() => {
        requests.length = 0;
    })

    it('.get() should send GET request', () => {
        instance.get('/user');

        const [request] = requests;

        expect(request.method).to.eq('Get');
    });

    it('.put() should send PUT request', () => {
        instance.put('/user/profile',
            {
                "first_name": "Ivan",
                "second_name": "Ivanov",
                "login": "Hohohoo",
            });

        const [request] = requests;
        expect(request.method).to.eq('Put');
    });

    it('.post() should send POST request', () => {
        instance.post('/auth/singin',
            {
                "login": "Hohohoo",
                "password": "Hohohoo-1234"
            });

        const [request] = requests;
        expect(request.method).to.eq('Post');
    });

    it('.delete() should send DELETE request', () => {
        instance.delete('/chats',
            {
                "chatId": 123456,

            });

        const [request] = requests;
        expect(request.method).to.eq('Delete');
    });
});
