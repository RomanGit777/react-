import './App.css'
import MyComponent from "./MyComponents/MyComponent.tsx";

function App() {

  return (
      <>
    <MyComponent title={'title 1'}>
            Lorem ipsum dolor sit amet.1 <br/>
            Lorem ipsum dolor sit amet.1.1<br/>
            Lorem ipsum dolor sit amet.1.2
    </MyComponent>
         <MyComponent title={'title 2'}>
            Lorem ipsum dolor sit amet.2
    </MyComponent>
      </>
          );
}

export default App
