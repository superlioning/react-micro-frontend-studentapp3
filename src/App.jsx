import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Inline styles for customization
const styles = {
  container: {
    margin: "20px auto",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    maxWidth: "600px",
  },
  header: {
    textAlign: "center",
    margin: "20px 0",
  },
  description: {
    textAlign: "center",
    marginBottom: "20px",
  },
};

const App = () => {
  const StudentForm = React.lazy(() => import("StudentApp1/StudentForm"));

  return (
    <div style={styles.container}>
      <React.Suspense fallback={<div>Loading Form from StudentApp1...</div>}>
        <h5 style={styles.header}>StudentApp 3</h5>
        <p style={styles.description}>
          This application is using the StudentForm from StudentApp1.
        </p>
        <StudentForm />
      </React.Suspense>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
