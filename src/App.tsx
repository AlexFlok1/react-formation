import './App.css'
import RFForm from './components/RFForm/RFForm'


function App() {


  return (
    <>
      <RFForm form={[
        {
          fields: [{
            variant: "input",
            label: "Test1"
          },
          {
            variant: "input",
            label: "Test2"
          },
          {
            variant: "input",
            label: "Test3"
          }
        ]
        }
        ]} />
    </>
  )
}

export default App
