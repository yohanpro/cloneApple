import React from "react";
import "../src/assets/scss/init.scss";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <div className="full-width-image-container margin-top-0">
          <h1 className="has-text-weight-bold is-size-1">Latest Stories</h1>
        </div>
      </Layout>
    </div>
  );
}

export default App;
