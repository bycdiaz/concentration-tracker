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
  
  myStudents.forEach( function (element) {
    const student = document.createElement('p');
    student.className = "student";
    student.innerText = element.name;
    studentContainer.appendChild(student);
  });
};

render(myStudents);