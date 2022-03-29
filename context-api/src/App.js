import react, {useState, useContext} from 'react';
import { 
  UniversityConsumer, 
  UniversityProvider, 
  StudentProvider, 
  StudentConsumer, 
  UniversityContext,
  StudentContext
} from './Contexts';

function A(){
  return (
    <div>
      <h1>A calls B</h1>
      <B />
    </div>
  )
}

function B(){
  return (
    <div>
      <h1>B calls C and D</h1>
      <C />
      <D />
    </div>
  )
}

//Still nested consumer probem here
function C(){

  return (
    <UniversityConsumer>
      {data=>{
        return <>
            <h2>C uses Data without props, but with context-api</h2>
            <StudentConsumer>
              {
                student=>(
                  <>
                    <h5>University  is - {data.universityName} </h5>
                    <h5>Student is - {student.studentName} </h5>
                  </>
                )
              }
            </StudentConsumer>
        </>
      }}
    </UniversityConsumer>
  )
}

function D(){

  const university=useContext(UniversityContext)
  const student=useContext(StudentContext)
  return (
      <>
        <h1>B calls D</h1>
        <h5>Student name: {student.studentName}</h5>
        <h5>University name: {university.universityName}</h5>
      </>
  )
}


function App() {
  const [universityData, setUniversityData]=useState({universityName:'Sukkur IBA',location:'Sukkur, Sindh'})
  const [studentData, setStudentData]=useState({studentName:'Nadir',address:'Khairpur, Sindh'})

  return (
    <UniversityProvider value={universityData}>
      <StudentProvider value={studentData}>
          <h1>Context API</h1>
          <A/>
          </StudentProvider>
    </UniversityProvider>
  );
}

export default App;
