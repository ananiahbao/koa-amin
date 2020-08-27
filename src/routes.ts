import loginController from './controller/loginRegister/loginRegister';

export default [
  {
    path: '/',
    method: 'get',
    action: loginController.hello
  },
  /**
   * 
   * @api {post} /register
   * @apiVersion 1.0
   * @apiName Register
   * 
   * @username  {string} 账号
   * @password  {string} 密码
   * @email     {string} 邮箱
   * @wechat    {string} 微信openid
   * @ip        {string} 注册ip
   * @telephone {number} 注册电话
   * @time      {string} 注册时间
   * @nickname  {string} 昵称
   */
  {
    path: '/register',
    method: 'post',
    action: loginController.register
  }
];
