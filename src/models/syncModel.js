const syncModel = {
  name:'syncModel',
  // global validate function
  validate: (form, dispatch) => {
    return {
      valid:false,
      errorMessage:'form is not valid override'
    }
  },
  validateErrorMessage: "form is not valid",
  data: {
    'func': {
      validate: {
        required: true,
        func: (value) => {
          if(value === 'test'){
            return true;
          }else{
            return false;
          }
          
        },
        message: 'This is a custom error message',
      },
    },
    'username': {
      validate: {
        required: true,
        pattern: 'email',
      },
    },
    'customPattern': {
      validate: {
        required: true,
        pattern: /^sample/,
      }
    },
    'age': {
      validate: {
        required: true,
        min: 1,
        max: 100,
      },
    },
    'gender': {
      validate: {
        required: true,
      },
    },
    'range': {
      validate: {
        required: true,
        range: [1, 10],
      },
    },
    'postalCode': {
      validate: {
        required: true,
        length: 8,
      },
    },
    'password': {
      validate: {
        required: true,
        minLength:4,
        maxLength:10,
      },
    },
    'car': {
      validate: {
        required: true,
        minChecked:2,
        maxChecked:3,
      },
    },
    'country': {
      validate: {
        required: true,
        oneOf:['canada', 'us'],
      },
    },
    'country2': {
      validate: {
        required: true,
      },
    },
    'repeatpassword': {
      validate: {
        required: true,
        equalTo:'password',
      },
    },
    'rangeLength': {
      validate: {
        required: true,
        rangeLength:[4,10],
      },
    },
  },
};

export default syncModel;
