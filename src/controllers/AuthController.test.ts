import { expect } from "chai";
import proxyquire from "proxyquire";
import sinon from "sinon";
import type AuthControllerType from "./AuthController"

const methodsMock = {
    signin: sinon.fake(),
    signup: sinon.fake(),   
    logout: sinon.fake()
}



const { default: AuthController } = proxyquire('./AuthController', {
    '../api/AuthApi/AuthApi': {
        default: class {
            signin = methodsMock.signin;
            signup = methodsMock.signup;            
            logout = methodsMock.logout;
        }
    }
}) as { default: typeof AuthControllerType };

describe('AuthController', () => {

    it('should use registration mock', () => {
        const data = {
            first_name: "",
            second_name: "",
            login: "",
            email: "",
            password: "",
            phone: "",
        };
        AuthController.signup(data);
        expect(methodsMock.signup.calledWith(data)).to.eq(true);
    });

    it('should use login mock', () => {
        const data = {
            login: '',
            password: ''
        };
        AuthController.signin(data);
        expect(methodsMock.signin.calledWith(data)).to.eq(true);
    });

    it('should use logut mock', () => {       
        AuthController.logout();
        expect(methodsMock.logout.called).to.eq(true);
    });    
});
