// all the inputs that require validation
const validationFields = [
  fullName = {
    field: document.querySelector('#name'),
    validation: /[A-Z]{1}[a-z]{2,8}[ -]?[A-Z]{1}[a-z]{2,8}/
  },
  phone = {
    field: document.querySelector('#phone'),
    validation: /[0-9]{3}[ -]*[0-9]{4}[ -]?[0-9]{3}/
  },
  email = {
    field: document.querySelector('#email'),
    validation: /[a-z0-9\.]{3,15}\@{1}[a-z0-9]{2,10}[\.]{1}[a-z]{3}/
  },
  reEmail = {
    field: document.querySelector('#re-email'),
    validation: email.validation
  },
  adress = {
    field: document.querySelector('#adress'),
    validation: /[A-Z][A-Za-z0-9' -]+[0-9 ]{1,4}[A-Za-z]?[ ]?[0-9]{0,3}/
  },
  city = {
    field: document.querySelector('#city'),
    validation: /[A-Za-z' -\.]+/
  },
  country = {
    field: document.querySelector('#country'),
    validation: /[A-Za-z' -\.]+/
  },
  zip = {
    field: document.querySelector('#zip'),
    validation: /[0-9]{5}/
  },
  how = {
    field: document.querySelector('#how'),
    validation: /.+/
  },
  link = {
    field: document.querySelector('#link'),
    validation: /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
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
const inputValidation = (field, expression) => {
  field.addEventListener('change', () => {

    if (field.value.match(expression) && field.value.match(expression) == field.value) {
      field.style.borderBottom = '1px solid green';
    } else {
      field.style.borderBottom = '1px solid red';
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
    label.style.color = 'red';
    return false
  }
}


validationFields.forEach(field => inputValidation(field.field, field.validation));

function validatingInputs() {
  let count = 0;
  validationFields.forEach(item=> {
    if (item.field.value) {
      count++
    } else {
      item.field.style.borderBottom = '1px solid red';
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
    // here goes function that sends form data to server
  } else {
    console.log('false', validatingInputs(), areButtonsValid);
  }

}








buttonsAndLabel.forEach(item => {
  setChecked(item.array)
})

submitBtn.addEventListener('click', (e) => submitForm(e));