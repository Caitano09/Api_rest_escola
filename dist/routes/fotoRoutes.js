"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

var _FotoController = require('../controllers/FotoController'); var _FotoController2 = _interopRequireDefault(_FotoController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

_dotenv2.default.config()
const router = new (0, _express.Router)()

router.post('/', _loginRequired2.default, _FotoController2.default.store)

exports. default = router
