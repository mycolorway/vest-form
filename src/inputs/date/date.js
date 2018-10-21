import InputBehavoir from '../behaviors/input'
import dateInputBehavior from '../behaviors/date'

Component({
  behaviors: [InputBehavoir, dateInputBehavior],

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
    onChange(e) {
      this.setData({
        value: e.detail.value,
        displayValue: this.formatDisplayValue(e.detail.value)
      });
      this.triggerEvent('change', {
        name: this.data.name,
        value: e.detail.value
      }, { bubbles: true });
    }
  }
});
