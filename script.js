const studentContainer = document.querySelector('.students');

// sample students
const peterParker = new Student("Peter Parker",2018,17,true,"pp@aol.com")
const enderWiggin = new Student("Ender Wiggin",2015,45,false,"pwiggin@hotmail.com")
const homerSimpson = new Student("Homer Simpson",2014,122,false,"chunkylover53@aol.com")

let myStudents = [peterParker, enderWiggin, homerSimpson];

function Student(name,admitYear,creditsEarned,concDeclared,email) {
  this.name = name
  this.admitYear = parseInt(admitYear,10)
  this.creditsEarned = parseInt(creditsEarned,10)
  this.concDeclared = concDeclared.toString()  
  this.email = email
}

function createButton() {
  const button = document.createElement('button');
  button.className = "button";
  button.innerText = "New Student";
  button.addEventListener('click', () => {
    // toggles view of form
    let formView = document.getElementById("form");
    if (formView.style.display === "block") {
      formView.style.display = "none";
    } else {
      formView.style.display = "block";
    }
  })
  studentContainer.appendChild(button);
}

function addStudent() {

  let form = document.getElementById('form');
  form.onsubmit = () => {
    let newStudent = new Student(form.elements.name.value, form.elements.admitYear.value, form.elements.creditsEarned.value, form.elements.concentrationDeclared.value, form.elements.email.value);
    
    myStudents.push(newStudent);
    render(myStudents);
  }

}

function createForm() {

  // creates form
  const form = document.createElement('form');
  form.className = "form";
  form.id = "form"
  studentContainer.appendChild(form);

  // creates form elements

  // name label
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for","name");
  nameLabel.innerText = "Name:"
  form.appendChild(nameLabel);

  // name input
  const name = document.createElement('input');
  name.className = 'form-element';
  name.id = "name";
  name.type = "text"
  form.appendChild(name);

  // admit year label
  const admitYearLabel = document.createElement("label");
  admitYearLabel.setAttribute("for","admitYear");
  admitYearLabel.innerText = "Admit Year:"
  form.appendChild(admitYearLabel);

  // admit year input
  const admitYear = document.createElement('input');
  admitYear.className = 'form-element';
  admitYear.id = "admitYear";
  admitYear.type = "text"
  form.appendChild(admitYear);

  // credits earned label
  const creditsEarnedLabel = document.createElement("label");
  creditsEarnedLabel.setAttribute("for","creditsEarned");
  creditsEarnedLabel.innerText = "Credits Earned:"
  form.appendChild(creditsEarnedLabel);

  // credits earned input
  const creditsEarned = document.createElement('input');
  creditsEarned.className = 'form-element';
  creditsEarned.id = "creditsEarned";
  creditsEarned.type = "text"
  form.appendChild(creditsEarned);

  // concentration declared label
  const concentrationDeclaredLabel = document.createElement("label");
  concentrationDeclaredLabel.setAttribute("for","concentrationDeclared");
  concentrationDeclaredLabel.innerText = "Concentration Declared:"
  form.appendChild(concentrationDeclaredLabel);

  // concentration declared input
  const concentrationDeclared = document.createElement('input');
  concentrationDeclared.className = 'form-element';
  concentrationDeclared.id = "concentrationDeclared";
  concentrationDeclared.type = "text"
  form.appendChild(concentrationDeclared);

  // email label
  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for","email");
  emailLabel.innerText = "Email:"
  form.appendChild(emailLabel);

  // email input
  const email = document.createElement('input');
  email.className = 'form-element';
  email.id = "email";
  email.type = "text"
  form.appendChild(email);

  // submit button
  const submit = document.createElement('input');
  submit.type = "submit";
  submit.value = "Add Student";
  submit.addEventListener('click', () => {
    addStudent();
  })
  form.appendChild(submit);
}

function render(myStudents) {

  studentContainer.innerHTML = '';
  createButton();
  createForm();
  
  
  myStudents.forEach( function (element) {
    
    // creates card
    const card = document.createElement('div');
    card.className = "card";
    studentContainer.appendChild(card);

    // appends each student to created card
    const student = document.createElement('div');
    student.className = "student";
    student.id = `${element.email}`
    card.appendChild(student);

    // appends student info to each card

    const studentName = document.createElement('p');
    studentName.className = "student-info";
    studentName.innerText = `Name: ${element.name}`;
    student.appendChild(studentName);

    const admitYear = document.createElement('p')
    admitYear.className = "student-info";
    admitYear.innerText = `Admit Year: ${element.admitYear}`;
    student.appendChild(admitYear);

    const creditsEarned = document.createElement('p');
    creditsEarned.className = "student-info";
    creditsEarned.innerText = `Credits Earned: ${element.creditsEarned}`;
    student.appendChild(creditsEarned);

    const concDeclared = document.createElement('p');
    concDeclared.className = "student-info";
    concDeclared.innerText = "Concentration Declared?";
    student.appendChild(concDeclared);

    const concButton = document.createElement('button');
    concButton.className = "button";
    concButton.innerText = element.concDeclared;
    concButton.addEventListener('click', () => {
      if (concButton.innerText === "true") {
        concButton.innerText = "false"
      } else {
        concButton.innerText = "true"
      }
    })
    student.appendChild(concButton);

    const email = document.createElement('a');
    email.className = "student-info";
    email.href = `mailto:${element.email}`
    email.innerText = element.email;
    student.appendChild(email);

    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = "button";
    deleteButton.id = "delete"
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener('click', () => {
      card.innerHTML = '';
    })
    student.appendChild(deleteButton);
  });
};

render(myStudents);