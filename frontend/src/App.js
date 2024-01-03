import logo from './logo.svg';
import { useRef, useEffect, useState } from "react"
import './App.css';

function App() {
  const formData = useRef();
  const label = useRef();
  const newForm = useRef();
  const [inputType, setInputType] = useState("text");
  const AddForm = (event, data) => {
    console.log("FormData:", formData.current)
    console.log("Data:", data)
    event.preventDefault();
  }

  const createComp = () => {
    const value = label.current.value;
    // Create an input element
    const inputElement = document.createElement('input');

    // Set attributes for the input element (e.g., type, id, name, placeholder)
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('id', 'myInput');
    inputElement.setAttribute('name', 'myInput');
    inputElement.setAttribute('placeholder', 'Enter text...');
    newForm.current.appendChild(inputElement)
  }

  useEffect(() => {
    console.log("input type:", inputType)
  }, [inputType])
  return (
    <div className="App">
      <div className="header">Form builder</div>
      <div className="form-builder">
        <form  onSubmit={AddForm} ref={formData}>
          <label for="field">Choose a Field:</label>
          <select name="field" id="field" onChange={(e) => { setInputType(e.target.value) }}>
            <option value="text">text</option>
            <option value="dropdown">dropdown</option>
            <option value="checkbox">checkbox</option>
            <option value="radio">radio</option>
          </select><br/>
          {inputType === "text" &&
            <>
              <label htmlFor="label" >Text label:</label>
              <input type="text" id="label" name="label" ref={label} required /><br/>
            </>
          }
          {inputType === "dropdown" &&
            <>
              <label htmlFor="label" required>Enter Values comma seperated:</label>
              <input type="text" id="label" name="label" ref={label} required /><br/>
            </>
          }
          {inputType === "checkbox" &&
            <>
              <label htmlFor="label" required>Enter Values comma seperated:</label>
              <input type="text" id="label" name="label" ref={label} required /><br/>
            </>
          }
          {inputType === "radio" &&
            <>
              <label htmlFor="label" required>Enter Values comma seperated:</label>
              <input type="text" id="label" name="label" ref={label} required /><br/>
            </>
          }
          <input type="submit" onClick={createComp} />
        </form>
      </div>

      <div className='created-form' id="created-form" ref={newForm}>

      </div>
    </div>
  );
}

export default App;
