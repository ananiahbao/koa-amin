import LoginService from '../../service/loginRegisterSer/loginRegisterSer';

class loginController {
  _service:LoginService = new LoginService()

  hello =  async (ctx) => {
    ctx.body = await this._service.hello();
  };
  register = async (ctx) => {
    ctx.body = await this._service.registerInfo(ctx);
  }
}

export default new loginController()