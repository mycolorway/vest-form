"use strict";

var _input = _interopRequireDefault(require("../behaviors/input"));

var _behavior = _interopRequireDefault(require("../../behavior"));

var _behavior2 = _interopRequireDefault(require("../../fieldset/behavior"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Component({
  behaviors: [_input.default],
  options: {
    addGlobalClass: true
  },
  relations: {
    'formBehavior': {
      type: 'parent',
      target: _behavior.default
    },
    'fieldsetBehavior': {
      type: 'parent',
      target: _behavior2.default
    }
  },
  properties: {},
  data: {
    inputType: 'text'
  },
  methods: {
    onInput: function onInput(e) {
      this.setData({
        value: e.detail.value
      });
    }
  }
});