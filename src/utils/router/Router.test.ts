import Router from './Router';
import { BlockConstructable } from './types';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Router', () => {

    global.window.history.back = () => {
        if (typeof window.onpopstate === 'function') {
            window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
        }
    };
    global.window.history.forward = () => {
        if (typeof window.onpopstate === 'function') {
            window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
        }
    }

    const getContentFake = sinon.fake.returns(document.createElement('div'));

    const BlockMock = class {
        getContent = getContentFake;
    } as unknown as BlockConstructable; 

    describe('Router', () => {
        it('should render a page on history back/forward action', () => {
            Router
                .use('/', BlockMock)
                .start();

            Router.back();
            Router.forward();

            expect(getContentFake.callCount).to.eq(1);
        });

        it('should render a page on start', () => {
            Router
                .use('/', BlockMock)
                .start();
            expect(getContentFake.callCount).to.eq(1);
        });

        it('should go', () => {
            Router.go('/test');
            expect(window.location.pathname).to.eq('/test');
        });

        it('should use', () => {
            Router.use('/test', BlockMock);
            expect(Router.getRoute('/test') === undefined).to.be.false;
        });
    });
});
