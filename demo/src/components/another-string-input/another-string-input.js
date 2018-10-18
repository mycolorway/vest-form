import formBehavior from '@mycolorway/vest-form/behavior'
import fieldsetBehavior from '@mycolorway/vest-form/fieldset/behavior'
import inputBehavior from '@mycolorway/vest-form/inputs/behaviors/input'

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

  properties: {},

  data: {
    inputType: 'string'
  },

  methods: {
    onInput(e) {
      this.setData({ value: e.detail.value });
      this.triggerEvent('change', {
        name: this.data.name,
        value: e.detail.value
      }, { bubbles: true });
    }
  }
})
