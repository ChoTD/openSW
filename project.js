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

//업데이트 기능 
function UpdateStudent(index, UpdateStudent) {
  grades[index] = UpdateStudent;
  SaveGrades();
}

//삭제 기능
function DeleteStudent(index) {
  grades.splice(index, 1);
  SaveGrades();
}
