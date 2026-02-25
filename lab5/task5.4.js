function giveJobToStudent(student, jobName) {
  const updatedStudent = {
    ...student,
    job: jobName
  };
  
  alert(`Поздравляем! У студента ${updatedStudent.fullName} появилась новая работа! Теперь он ${jobName}`);
  
  return updatedStudent;
}

const student2 = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
};

const updatedStudent = giveJobToStudent(student2, 'веб-разработчик');
console.log('updatedStudent', updatedStudent);