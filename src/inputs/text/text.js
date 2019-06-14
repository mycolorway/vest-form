import inputBehavior from '../behaviors/input'

Component({
  behaviors: [inputBehavior],

  options: {
    addGlobalClass: true
  },

  properties: {
    autoHeight: {
      type: Boolean,
      value: false,
    },
    focus: {
      type: Boolean,
      value: false,
    },
  },

  data: {
    inputType: 'text'
  },

  methods: {
    onInput(e) {
      this.setData({ value: e.detail.value });
    }
  }
});
