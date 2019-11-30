function createButton() {
  const button = document.createElement('button');
  button.className = "button";
  button.innerText = "Add Student";
  studentContainer.appendChild(button);
}

function Student(name,admitYear,creditsEarned,concDeclared,email) {
  this.name = name
  this.admitYear = admitYear
  this.creditsEarned = creditsEarned
  this.concDeclared = function() {
    return (concDeclared ? "Already declared" : "Not yet declared" );
  }
  this.email = email
  this.info = function() {
    return `Name: ${name}, Admit Year: ${admitYear}, Credits Earned: ${creditsEarned}, Concentration: ${this.concDeclared()}.`
  }
}

function addStudent() {
  // do stuff here
}

const peterParker = new Student("Peter Parker", 2018, 17, false, "pp@aol.com")
const enderWiggin = new Student("Ender Wiggin", 2015, 45,true,"pwiggin@hotmail.com")
const homerSimpson = new Student("Homer Simpson",2014,122,true,"chunkylover53@aol.com")

let myStudents = [peterParker,enderWiggin,homerSimpson];

const studentContainer = document.querySelector('.students');

function render(myStudents) {

  studentContainer.innerHTML = '';
  createButton();
  
  myStudents.forEach( function (element) {
    
    // creates card
    const card = document.createElement('div');
    card.className = "card";
    studentContainer.appendChild(card);

    // appends each student to created card
    const student = document.createElement('div');
    student.className = "student";
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
    concDeclared.innerText = `Concentration Declared? ${element.concDeclared()}`;
    student.appendChild(concDeclared);

    const email = document.createElement('a');
    email.className = "student-info";
    email.href = `mailto:${element.email}`
    email.innerText = element.email;
    student.appendChild(email);
  });
};

render(myStudents);
