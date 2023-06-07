let students = []; // 성적 데이터를 저장할 배열

// 성적 객체 생성자 함수
function Student(name, score) {
  this.name = name;
  this.score = score;
}

// 성적 추가
function addStudent(name, score) {
  const student = new Student(name, score);
  students.push(student);
  console.log('성적이 추가되었습니다.');
}

// 모든 성적 조회
function displayStudents() {
  if (students.length === 0) {
    console.log('성적 데이터가 없습니다.');
  } else {
    console.log('=== 성적 목록 ===');
    students.forEach((student, index) => {
      console.log(`ID: ${index}, 이름: ${student.name}, 성적: ${student.score}`);
    });
  }
}

// 특정 성적 조회
function displayStudent(index) {
  if (index >= 0 && index < students.length) {
    const student = students[index];
    console.log(`ID: ${index}, 이름: ${student.name}, 성적: ${student.score}`);
  } else {
    console.log('해당 ID의 성적을 찾을 수 없습니다.');
  }
}

// 성적 수정
function updateStudent(index, newName, newScore) {
  if (index >= 0 && index < students.length) {
    const student = students[index];
    student.name = newName;
    student.score = newScore;
    console.log('성적이 업데이트되었습니다.');
  } else {
    console.log('해당 ID의 성적을 찾을 수 없습니다.');
  }
}

// 성적 삭제
function deleteStudent(index) {
  if (index >= 0 && index < students.length) {
    students.splice(index, 1);
    console.log('성적이 삭제되었습니다.');
  } else {
    console.log('해당 ID의 성적을 찾을 수 없습니다.');
  }
}

// 예시 사용
addStudent('Alice', 85);
addStudent('Bob', 92);
displayStudents();
displayStudent(0);
updateStudent(1, 'Charlie', 78);
displayStudents();
deleteStudent(0);
displayStudents();