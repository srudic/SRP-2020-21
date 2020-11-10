const winston = require("winston");
const UserService = require("./user.service");
<<<<<<< HEAD
const MedicalTestService = require("./medical-test.service");
const { User, MedicalTest } = require("../models");
=======
const LoginService = require("./login.service");
const { User } = require("../models");
>>>>>>> 39c182a088b9eac1e6e4627440242508c352c1b8

const logger = winston.loggers.get("logger");

exports.userServiceInstance = new UserService({ logger, userModel: User });
<<<<<<< HEAD
exports.medicalTestServiceInstance = new MedicalTestService({
  logger,
  testModel: MedicalTest,
});
=======
exports.loginServiceInstance = new LoginService({ logger, userModel: User });
>>>>>>> 39c182a088b9eac1e6e4627440242508c352c1b8
