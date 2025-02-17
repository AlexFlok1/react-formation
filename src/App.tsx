import "./App.css";
import RFForm from "./components/RFForm/RFForm";

function App() {
  return (
    <>
      <RFForm
        form={[
          {
            fields: [
              {
                variant: "input",
                name: "test1",
                label: "Test1",
                validation: {
                  required: true,
                  max: 5,
                },
              },
              {
                variant: "input",
                name: "test2",
                label: "Test2",
              },
              {
                variant: "input",
                name: "test3",
                label: "Test3",
              },
              {
                variant: "select",
                name: "test4",
                label: "Test4",
                options: [{ value: "Test1" }, { value: "Test2" }],
              },
            ],
          },
          {
            fields: [
              {
                variant: "input",
                name: "test5",
                label: "Test5",
              },
            ],
          },
        ]}
        onSubmit={(values) => {
          console.log(values);
        }}
        onError={(errors) => {
          console.log(errors);
        }}
      />
    </>
  );
}

export default App;
