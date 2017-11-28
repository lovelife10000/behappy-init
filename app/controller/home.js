'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    async index() {
      this.ctx.body = 'hi, egg';
    }

    async index2() {
      this.ctx.body = 'hi, egg5';
    }
  }
  return HomeController;
};
