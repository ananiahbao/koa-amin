import LoginService from '../../service/loginRegisterSer/loginRegisterSer';

class loginController {
  _service:LoginService = new LoginService()

  hello =  async (ctx) => {
    ctx.body = await this._service.hello();
  };
  login = async (ctx) => {
    ctx.body = await this._service.loginInfo(ctx.request.body);
  }
}

export default new loginController()