const studentContainer = document.querySelector('.students');

const myStudents = [];

addStudent({
  name: 'Peter Parker',
  admitYear: 2018,
  creditsEarned: 96,
  concentrationDeclared: true,
  email: 'pp@aol.com',
});

addStudent({
  name: 'Homer Simpson',
  admitYear: 1974,
  creditsEarned: 12,
  concentrationDeclared: false,
  email: 'homer@aol.com',
});

addStudent({
  name: 'Ender Wiggin',
  admitYear: 2012,
  creditsEarned: 129,
  concentrationDeclared: true,
  email: 'ewiggin@gmail.com',
});

function Student(name, admitYear, creditsEarned, concDeclared, email) {
  this.name = name;
  this.admitYear = Number(admitYear);
  this.creditsEarned = Number(creditsEarned);
  this.concDeclared = concDeclared.toString();
  this.email = email;
}

function createButton(container) {
  const button = document.createElement('button');
  button.className = 'button';
  button.id = 'new-student';
  button.innerText = 'New Student';
  button.addEventListener('click', () => {
    // toggles view of form
    const formView = document.getElementById('form');
    if (formView.style.display === 'block') {
      formView.style.display = 'none';
    } else {
      formView.style.display = 'block';
    }
  });
  container.appendChild(button);
}

function addStudent(studentInfo) {
  const newStudent = new Student(studentInfo.name, studentInfo.admitYear, studentInfo.creditsEarned, studentInfo.concentrationDeclared, studentInfo.email);

  myStudents.push(newStudent);
  render(myStudents);
}

function myCreateElement(tag, className) {
  const newElement = document.createElement(tag);
  newElement.className = className;

  return newElement;
}

function createForm() {
  // creates form
  const form = document.createElement('form');
  form.className = 'form';
  form.id = 'form';
  studentContainer.appendChild(form);

  // creates form elements

  // name label
  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'name');
  nameLabel.className = 'form-element';
  nameLabel.innerText = 'Name:';
  form.appendChild(nameLabel);

  // name input
  const name = document.createElement('input');
  name.className = 'form-element';
  name.id = 'name';
  name.type = 'text';
  form.appendChild(name);

  // admit year label
  const admitYearLabel = document.createElement('label');
  admitYearLabel.setAttribute('for', 'admitYear');
  admitYearLabel.className = 'form-element';
  admitYearLabel.innerText = 'Admit Year:';
  form.appendChild(admitYearLabel);

  // admit year input
  const admitYear = document.createElement('input');
  admitYear.className = 'form-element';
  admitYear.id = 'admitYear';
  admitYear.type = 'text';
  form.appendChild(admitYear);

  // credits earned label
  const creditsEarnedLabel = document.createElement('label');
  creditsEarnedLabel.setAttribute('for', 'creditsEarned');
  creditsEarnedLabel.className = 'form-element';
  creditsEarnedLabel.innerText = 'Credits Earned:';
  form.appendChild(creditsEarnedLabel);

  // credits earned input
  const creditsEarned = document.createElement('input');
  creditsEarned.className = 'form-element';
  creditsEarned.id = 'creditsEarned';
  creditsEarned.type = 'text';
  form.appendChild(creditsEarned);

  // concentration declared label
  const concentrationDeclaredLabel = document.createElement('label');
  concentrationDeclaredLabel.setAttribute('for', 'concentrationDeclared');
  concentrationDeclaredLabel.className = 'form-element';
  concentrationDeclaredLabel.innerText = 'Concentration Declared:';
  form.appendChild(concentrationDeclaredLabel);

  // concentration declared input
  const concentrationDeclared = document.createElement('input');
  concentrationDeclared.className = 'form-element';
  concentrationDeclared.id = 'concentrationDeclared';
  concentrationDeclared.type = 'button';
  concentrationDeclared.value = true;
  concentrationDeclared.addEventListener('click', () => {
    if (concentrationDeclared.value === 'true') {
      concentrationDeclared.value = 'false';
    } else {
      concentrationDeclared.value = 'true';
    }
  });
  form.appendChild(concentrationDeclared);

  // email label
  const emailLabel = document.createElement('label');
  emailLabel.setAttribute('for', 'email');
  emailLabel.className = 'form-element';
  emailLabel.innerText = 'Email:';
  form.appendChild(emailLabel);

  // email input
  const email = document.createElement('input');
  email.className = 'form-element';
  email.id = 'email';
  email.type = 'text';
  form.appendChild(email);

  // submit button
  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.className = 'form-element';
  submit.id = 'submit';
  submit.value = 'Add Student';
  submit.addEventListener('click', (event) => {
    event.preventDefault();
    const newStudent = {
      name: name.value,
      admitYear: admitYear.value,
      creditsEarned: creditsEarned.value,
      concentrationDeclared: concentrationDeclared.value,
      email: email.value,
    };

    addStudent(newStudent);
  });
  form.appendChild(submit);
}

function render(myStudents) {
  studentContainer.innerHTML = '';
  createButton(studentContainer);
  createForm();


  myStudents.forEach((element, index) => {
    // creates card
    const card = document.createElement('div');
    card.className = 'card';
    studentContainer.appendChild(card);

    // appends each student to created card
    const student = document.createElement('div');
    student.className = 'student';
    student.id = `${element.email}`;
    card.appendChild(student);

    // appends student info to each card

    const studentName = document.createElement('p');
    studentName.className = 'student-info';
    studentName.id = 'output-name';
    studentName.innerText = `Name: ${element.name}`;
    student.appendChild(studentName);

    const admitYear = document.createElement('p');
    admitYear.className = 'student-info';
    admitYear.id = 'output-admityear';
    admitYear.innerText = `Admit Year: ${element.admitYear}`;
    student.appendChild(admitYear);

    const creditsEarned = document.createElement('p');
    creditsEarned.className = 'student-info';
    creditsEarned.id = 'output-credits';
    creditsEarned.innerText = `Credits Earned: ${element.creditsEarned}`;
    student.appendChild(creditsEarned);

    const concDeclared = document.createElement('p');
    concDeclared.className = 'student-info';
    concDeclared.id = 'output-conc-label';
    concDeclared.innerText = 'Concentration Declared?';
    student.appendChild(concDeclared);

    const concButton = document.createElement('button');
    concButton.className = 'button';
    concButton.id = 'output-concbutton';
    concButton.innerText = element.concDeclared;
    concButton.addEventListener('click', () => {
      if (concButton.innerText === 'true') {
        concButton.innerText = 'false';
      } else {
        concButton.innerText = 'true';
      }
    });
    student.appendChild(concButton);

    const emailLabel = document.createElement('p');
    emailLabel.className = 'student-info';
    emailLabel.id = 'output-label-email';
    emailLabel.innerText = 'Email:';
    student.appendChild(emailLabel);

    const email = document.createElement('a');
    email.className = 'student-info';
    email.id = 'output-email';
    email.href = `mailto:${element.email}`;
    email.innerText = element.email;
    student.appendChild(email);

    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'button';
    deleteButton.id = 'delete';
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
      myStudents.splice(index, 1);
      return render(myStudents);
    });
    student.appendChild(deleteButton);
  });
}

render(myStudents);
