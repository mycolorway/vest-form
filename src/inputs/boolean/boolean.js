import inputBehavior from '../behaviors/input'
import formBehavior from '@/behavior'
import fieldsetBehavior from '@/fieldset/behavior'

Component({
  behaviors: [inputBehavior],

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
    onChange(e) {
      this.setData({ value: e.detail.value });
      this.triggerEvent('change', {
        name: this.data.name,
        value: e.detail.value
      }, { bubbles: true });
    }
  }
});
