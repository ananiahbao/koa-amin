import loginController from './controller/loginRegister/loginRegister';

export default [
  {
    path: '/',
    method: 'get',
    action: loginController.hello
  },
  {
    path: '/login',
    method: 'post',
    action: loginController.login
  }
];
