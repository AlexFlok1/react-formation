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
                validation: { required: true },
              },
              {
                variant: "input",
                name: "test2",
                label: "Test2",
                validation: {
                  max: 3,
                },
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
              {
                variant: "checkbox",
                name: "test6",
                label: "Test6",
                validation: {
                  required: true,
                },
              },
            ],
          },
          {
            fields: [
              {
                variant: "textarea",
                allowResize: false,
                name: "test5",
                label: "Test5",
              },
              {
                variant: "switch",
                name: "test7",
                label: "Test7",
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
