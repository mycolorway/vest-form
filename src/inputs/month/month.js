import InputBehavoir from '../behaviors/input'
import dateInputBehavior from '../behaviors/date'
import formBehavior from '@/behavior'
import fieldsetBehavior from '@/fieldset/behavior'

Component({
  behaviors: [InputBehavoir, dateInputBehavior],

  options: {
    addGlobalClass: true
  },

  relations: {
    'formBehavior': {
      type: 'parent',
      target: formBehavior
    },
    'fieldsetBehavior': {
      type: 'parent',
      target: fieldsetBehavior
    }
  },

  properties: {
    displayFormat: {
      type: String,
      value: 'yyyy-MM'
    },
  },

  data: {
    inputType: 'month',
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
