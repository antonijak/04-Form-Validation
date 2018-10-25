// all the inputs that require validation
const validationFields = [
  fullName = {
    field: document.querySelector('#name'),
    validation: /[A-Z]{1}[A-Za-z]{2,8}[ -]?[A-Z]{1}[A-Za-z]{2,8}/,
    span: document.querySelector('#nameS')
  },
  phone = {
    field: document.querySelector('#phone'),
    validation: /[0-9]{3}[ -]*[0-9]{4}[ -]?[0-9]{3}/,
    span: document.querySelector('#phoneS')
  },
  email = {
    field: document.querySelector('#email'),
    validation: /[a-z0-9\.]{3,15}\@{1}[a-z0-9]{2,10}[\.]{1}[a-z]{3}/,
    span: document.querySelector('#emailS')
  },
  reEmail = {
    field: document.querySelector('#re-email'),
    validation: email.validation,
    span: document.querySelector('#re-emailS')
  },
  adress = {
    field: document.querySelector('#adress'),
    validation: /[A-Z][A-Za-z0-9' -]+[0-9 ]{1,4}[A-Za-z]?[ ]?[0-9]{0,3}/,
    span: document.querySelector('#adressS')
  },
  city = {
    field: document.querySelector('#city'),
    validation: /[A-Z]{1}[A-Za-z' -\.]+/,
    span: document.querySelector('#cityS')
  },
  country = {
    field: document.querySelector('#country'),
    validation: /[A-Z]{1}[A-Za-z' -\.]+/,
    span: document.querySelector('#countryS')
  },
  zip = {
    field: document.querySelector('#zip'),
    validation: /[0-9]{5}/,
    span: document.querySelector('#zipS')
  },
  how = {
    field: document.querySelector('#how'),
    validation: /.+/,
    span: document.querySelector('#howS')
  },
  link = {
    field: document.querySelector('#link'),
    validation: /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
    span: document.querySelector('#linkS')
  }
]

// all the radio and checkmark buttons
const buttonsAndLabel = [
  disciplines = {
    array: document.querySelectorAll('.radios'),
    label: document.querySelector('#sl-title')
  },
  otherDisciplines = {
    array: document.querySelectorAll('.od'),
    label: document.querySelector('#od-legend')
  },
  locationF = {
    array: document.querySelectorAll('.loc'),
    label: document.querySelector('#where')
  }
]

const submitBtn = document.querySelector('#submit-btn');

// validates inputs and turns it red or green acording to validity
const inputValidation = (field, span, expression) => {
  field.addEventListener('change', () => {

    if (field.value.match(expression) && field.value.match(expression) == field.value) {
      field.style.borderBottom = '1px solid green';
      span.style.display = 'none';
    } else {
      field.style.borderBottom = '1px solid rgb(250, 94, 94)';
      span.style.display = 'block';
      field.value = null;
    }
  })
}


// gives "checked" attribute to button when it's clicked
const setChecked = (array) => {
  array.forEach(button => button.addEventListener('click', (e) => {
    if (e.target.hasAttribute('checked')) {
      e.target.removeAttribute('checked')
    } else {
      e.target.setAttribute('checked', 'true')
    }
  }))
}

// checks if the button has "checked" attribute
const isItChecked = (array, label) => {
  let isTrue = 0;
  array.forEach(button => {
    if (button.hasAttribute('checked')) {
      isTrue++
    }
  })
  if (isTrue > 0) {
    label.style.color = 'white';
    return true
  } else {
    label.style.color = 'rgb(250, 94, 94)';
    return false
  }
}


validationFields.forEach(field => inputValidation(field.field, field.span, field.validation));

function validatingInputs() {
  let count = 0;
  validationFields.forEach(item=> {
    if (item.field.value) {
      count++
      item.span.style.display = 'none';
    } else {
      item.field.style.borderBottom = '1px solid rgb(250, 94, 94)';
      item.span.style.display = 'block';

    }
  })
  if (count === validationFields.length) {
    return true
  } else {
    return false
  }
}

let areButtonsValid;

// checks if all the fields are valid (and sends data to the server)
const submitForm = (e) => {
  e.preventDefault();
  buttonsAndLabel.forEach(item => {
    areButtonsValid = isItChecked(item.array, item.label)
  })

  if (validatingInputs() && areButtonsValid) {
    //checks if all he fields are filled and correct
    console.log('true', validatingInputs(), areButtonsValid);
    alert('Form is filled correctly and is SUBMITTED')
    // ------------------- >   here goes function that sends form data to server
  } else {
    console.log('false', validatingInputs(), areButtonsValid);
    // ------------------- >  display user instructions for valid answers
  }

}




buttonsAndLabel.forEach(item => {
  setChecked(item.array)
})

submitBtn.addEventListener('click', (e) => submitForm(e));

