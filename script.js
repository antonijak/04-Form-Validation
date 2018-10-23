  //  ====================================================
  //                PERSONAL INFORMATION
  //  ===================================================
  const validationFields = [
    fullNAme = {field: document.querySelector('#name'), validation: /[A-Z]{1}[a-z]{2,8}[ -]?[A-Z]{1}[a-z]{2,8}/},
    phone = {field: document.querySelector('#phone'), validation: /[0-9]{3}[ -]*[0-9]{4}[ -]?[0-9]{3}/},
    email = { field: document.querySelector('#email'), validation: /[a-z0-9\.]{3,15}\@{1}[a-z0-9]{2,10}[\.]{1}[a-z]{3}/},
    reEmail = { field: document.querySelector('#re-email'), validation: email.validation},
    adress = {field: document.querySelector('#adress'), validation: /[A-Z][A-Za-z0-9' -]+[0-9 ]{1,4}[A-Za-z]?[ ]?[0-9]{0,3}/}, 
    city = {field: document.querySelector('#city'), validation: /[A-Za-z' -\.]+/},
    country = {field: document.querySelector('#country'), validation: /[A-Za-z' -\.]+/},
    zip = {field: document.querySelector('#zip'), validation: /[0-9]{5}/},
    how = {field: document.querySelector('#how'), validation: /.+/}
    // designResearch: document.querySelector('#design-research'),
    // visualDesign: document.querySelector('#visual-design'),
    // uxDesign: document.querySelector('#ux-design'),
    // frontEnd: document.querySelector('#front-end'),
    // cbVisualDesign: document.querySelector('#cb-visual-design'),
    // cbUxDesign: document.querySelector('#cb-ux-design'),
    // cbFrontEnd: document.querySelector('#cb-front-end'),
    // austinTx: document.querySelector('#austin-tx'),
    // torontoCa: document.querySelector('#toronto-ca'),
    // newyorkNy: document.querySelector('#newyork-ny'),
    // shanghaiCh: document.querySelector('#shanghai-ch'),
    // dublinIr: document.querySelector('#dublin-ir'),
    // hursleyUk: document.querySelector('#hursley-uk'),
    // berlinGe: document.querySelector('#berlin-ge'),
    // somewhere: document.querySelector('#somewhere'),
  ]

  // ====================================================
  //                   PORTFOLIO
  // ===================================================


  adress2 = document.querySelector('#adress2');
  state = document.querySelector('#state');


  const portfolio = {
    link: document.querySelector('#link'),
    submitBtn: document.querySelector('#submit-btn'),
  }



  // const expressions = {
  //   ,
  //   phoneValid: ,
  //   emailValid: "",
  //   adressValid: gi,
  //   cistyValid: /[A-Z][A-Za-z' -]+/gi,
  //   stateValid: /[A-Z][A-Za-z' -]/gi,
  //   country: /[A-Z][A-Za-z' -]+/gi,
  //   zip: /[0-9 ]+/gi,
  //   how: /[A-Za-z0-9 -()\.\,]+/gi,
  //   portfolioLink: ""
  // }

  const addEvent = (field, expression) => {
    field.addEventListener('change', () => {
      
      if (field.value.match(expression) && field.value.match(expression) == field.value) {
        field.style.borderBottom = '1px solid green'
      } else {
        field.style.borderBottom = '1px solid red'
      }
    })
  }

  validationFields.forEach(field => addEvent(field.field, field.validation))
