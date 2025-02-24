````markdown
# Form Builder NPM Package (Beta)

A simple and flexible npm package (currently in beta) that allows you to generate forms dynamically using JSON. Easily create forms without writing any HTML or JSX by defining form fields and validation in a JSON format.

## ⚡ Features:

- **Generate forms dynamically** with just a JSON configuration.
- **Customizable field types**, including inputs, textareas, select boxes, etc.
- **Supports validation** through schema-based rules.
- **Lightweight and easy to use**.

  _(Currently in early beta - some features may be experimental)_

## 🚀 Installation

Install the package via npm (coming soon):

```sh
npm install react-formation
```

## 📄 Example Usage

This example demonstrates how to use the form generator.

### Implement the Form Component:

Use the `RFForm` component to generate the form dynamically based on the JSON configuration.

```jsx
import RFForm from "react-formation";

function App() {
  const formConfig = {
    fields: [
      {
        variant: "input",
        name: "username",
        label: "Username",
        validation: {
          required: "Username is required",
          min: 3,
          max: 20,
        },
      },
      {
        variant: "input",
        name: "email",
        label: "Email",
        validation: {
          required: "Email is required",
          matches: "^\\S+@\\S+\\.\\S+$",
        },
      },
      {
        variant: "select",
        name: "role",
        label: "Role",
        options: [
          { value: "admin", label: "Admin" },
          { value: "user", label: "User" },
        ],
      },
    ],
  };

  return <RFForm form={formConfig} onSubmit={(values) => console.log(values)} onError={(errors) => console.log(errors)} />;
}

export default App;
```
````
