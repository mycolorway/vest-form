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
  properties: {
    switch: {
      type: Boolean,
      value: true
    },
    value: {
      type: Boolean
    },
    badgeText: {
      type: String
    },
    badgeColor: {
      type: String
    }
  },
  data: {
    inputType: 'boolean'
  },
  methods: {
    onChange: function onChange(e) {
      this.setData({
        value: e.detail.value
      });
      this.triggerEvent('change', {
        name: this.data.name,
        value: e.detail.value
      }, {
        bubbles: true
      });
    }
  }
});