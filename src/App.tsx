import './App.css'
import RFForm from './components/RFForm/RFForm'


function App() {


  return (
    <>
      <RFForm form={[
        {
          fields: [{
            variant: "input",
            name: "test1",
            label: "Test1"
          },
          {
            variant: "input",
            name: "test2",
            label: "Test2"
          },
          {
            variant: "input",
            name: "test3",
            label: "Test3"
          }
        ]
        }
        ]} onSubmit={(values) => {
          console.log(values)
        }} />
    </>
  )
}

export default App
