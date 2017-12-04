'use strict';

const debug=require('debug')('behappy-init:app/home');
module.exports = app => {
  class HomeController extends app.Controller {
    async index() {
      debug('index执行');
      this.ctx.body = 'hi, egg2';
    }

    async index2() {
      this.ctx.body = 'hi, egg5';
    }
  }
  return HomeController;
};
