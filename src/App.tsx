import './App.css'

const coursesTitleArray: string[] = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];
function App() {
  return (
      <>
          <ul>
          {
              coursesTitleArray.map((course, index) =>  <li key={index}>  {course}</li>)
          }
          </ul>
      </>  );
}

export default App
