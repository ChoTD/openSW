const grades = JSON.parse(localStorage.getItem('grades')) || [];

function SaveGrades() {
  localStorage.setItem('grades', JSON.stringify(grades));
}

//학생 성적관리 시스템 생성
function CreateStudent(name, subject, score) {
  const grade = {
    name,
    subject,
    score
  };
  grades.push(grade);
  SaveGrades();
}
