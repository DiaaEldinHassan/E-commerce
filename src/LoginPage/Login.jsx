import React from "react";
import "./Login.css";
import Log from "./Log";
import Left from "./Left";
import Head from "../Home/Head/Head";



export default function Login(props) {
  const [state, setState] = React.useState(false);
  function toggleView() {
    setState(!state);
  }
  return (
    <div className="all-login">
      <Head logged={props.logged}/>
      <div className="login-page">
        {state === false
          ? <Left func={props.func} toggleView={toggleView} />
          : <Log func={props.func} toggleView={toggleView} />}
        <div className="login-page-right"></div>
      </div>
    </div>
  );
}
