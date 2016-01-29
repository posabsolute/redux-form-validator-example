export default {
  name: 'asyncInputFormModel',
  // global validate function
  validateAsync: function(form, dispatch) {
    setTimeout( () => {
      console.log(this);
      console.log(form);
      if (form.username.value === 'test@test.com') {
        this.resolve('yes');
      }else {
        this.reject('username must be test@test.com');
      }
    }, 3000);
  },
  data: {
    'username': {
      validate: {
        required: true,
        pattern: 'email',
      },
    },
    'country': {
      validate: {
        required: true,
        async: function(value, rule){
          setTimeout( () => {
            if (value === 'canada') {
              this.resolve('yes');
            }else {
              this.reject('value is not equal to canada');
            }
          }, 3000);
        },
      },
    },
  },
};
