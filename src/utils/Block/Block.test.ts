import proxyquire from 'proxyquire';
import { expect } from 'chai';
import sinon from 'sinon';
import type BlockType from './Block'

const eventBusMock = {
    on: sinon.fake(),
    emit: sinon.fake(),
    off: sinon.fake(),
}

const { default: Block } = proxyquire('./Block', {
    '../EventBus': {
        EventBus: class {
            emit = eventBusMock.emit;
            on = eventBusMock.on;
            off = eventBusMock.off;
        }
    }
}) as { default: typeof BlockType };

describe('Block', () => {
    class ComponentMock extends Block { }

    it('should fire init event on initialization', () => {
        new ComponentMock();
        expect(eventBusMock.emit.calledWith('init')).to.eq(true);
    });

    it('should fire on event on initialization', () => {
        new ComponentMock();
        expect(eventBusMock.on.calledWith('init')).to.eq(true);
    });

    it('should fire off event on initialization', () => {
        new ComponentMock();
        expect(eventBusMock.off.calledWith('init')).to.eq(false);
    });


});
