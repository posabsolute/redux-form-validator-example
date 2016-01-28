const syncModel = {
  name: 'asyncInputModel',
  // global validate function
  validate: (form, dispatch) => {
    return {
      valid: true,
      errorMessage: 'form is not valid override',
    };
  },
  validateErrorMessage: 'form is not valid',
  data: {
    'asyncInput': {
      validate: {
        required: true,
        async: function(value, rule){
          setTimeout( () => {
            if (value === 'test') {
              this.resolve('yes');
            }else {
              this.reject('value is not equal to test');
            }
          }, 3000);
        },
      },
    },
    'username': {
      validate: {
        required: true,
        pattern: 'email',
      },
    },
  },
};

export default syncModel;
