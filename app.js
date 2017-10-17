try{
  require('./app2');
}catch (err){
  err.message='666';
  throw err;
}
