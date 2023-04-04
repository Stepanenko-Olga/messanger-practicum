import { expect } from "chai";
import proxyquire from "proxyquire";
import sinon from "sinon";
import type AuthControllerType from "./AuthController"



const signinFake = sinon.fake();

const { default: AuthController } = proxyquire('./AuthController', {
    '../api/AuthApi/AuthApi': {
        default: class {
            signin = signinFake;
        }
    }
}) as { default: typeof AuthControllerType };

describe('AuthController', () => {
    it.only('should', () => {
        const data = {
            login: '',
            password: ''
        };
        AuthController.signin(data);
        expect(signinFake.calledWith(data)).to.eq(true);
    })
});
