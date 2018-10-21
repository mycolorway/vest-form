"use strict";

var _input = _interopRequireDefault(require("../behaviors/input"));

var _date = _interopRequireDefault(require("../behaviors/date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Component({
  behaviors: [_input.default, _date.default],
  options: {
    addGlobalClass: true
  },
  properties: {
    displayFormat: {
      type: String,
      value: 'yyyy-MM-dd'
    }
  },
  data: {
    inputType: 'date',
    displayValue: null
  },
  methods: {
    onChange: function onChange(e) {
      this.setData({
        value: e.detail.value,
        displayValue: this.formatDisplayValue(e.detail.value)
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