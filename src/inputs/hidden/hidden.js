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

  properties: {},

  data: {
    inputType: 'hidden'
  },

  methods: {
  }
})
