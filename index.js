//object literal
let bob = {
    fname: "bob",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1603',
        grades: [ 89, 34, 67 ]
      },
      {
        course: 'INFO 1601',
        grades: [ 89, 34, 67 ]
      }
    ]
  };
  
  let sally = {
    fname: "sally",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1601',
        grades: [ 100, 89, 79 ]
      }
    ]
  };
  
  let paul = {
    fname: "paul",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1600',
        grades: [ 89, 34, 67 ]
      }
    ]
  };
  
  
  const students = [bob, sally, paul];

function getAverageGrade(student, course){
    for(let i = 0; i < students.length; i++){
      if(students[i].fname === student){
        for(let j = 0; j < students[i].transcript.length; j++){
          if(students[i].transcript[j].course === course){
            let sum = 0;
            let average;
            for(let k = 0; k < students[i].transcript[j].grades.length; k++){
              sum =sum + students[i].transcript[j].grades[k];
            }
            average = sum / students[i].transcript[j].grades.length;
            return average;
          }
          return -1;    
        }
        }
        }
    }
function getAssignmentMark(student, course, num){
    num = num - 1;
    for(let i = 0; i < students.length; i++){
        if(students[i].fname === student){
            for(let j = 0; j < students[i].transcript.length; j++){
                if(students[i].transcript[j].course === course){
                    return students[i].transcript[j].grades[num];
                }

            }
        return -1;
                 
        }
    }
}


function averageAssessment(students, courseName, assignment){
   let sum=0;
   let count=0;
   let average= 0;

   for(let i =0; i < students.length; i++ ){
        for(let j=0 ; j < students[i].transcript.length; j++){
            if(students[i].transcript[j].course === courseName){
                sum = sum + students[i].transcript[j].grades[assignment-1];
                count = count + 1;
            }
        }
        
   }
    average = sum / count;

   return average;
}


console.log(getAverageGrade('bob', 'INFO 1603')); // 63.3
console.log(getAssignmentMark('sally', 'INFO 1601','2')); // 89
console.log(averageAssessment(students, 'INFO 1601', '2')); // 89 + 34 = 123 / 2 = 61.5 
