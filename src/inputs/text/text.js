import inputBehavior from '../behaviors/input'

Component({
  behaviors: [inputBehavior],

  options: {
    addGlobalClass: true
  },

  properties: {},

  data: {
    inputType: 'text'
  },

  methods: {
    onInput(e) {
      this.setData({ value: e.detail.value });
    }
  }
});
