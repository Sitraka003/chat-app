import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";
import CreatedSuccessfully from "@/utils/modals/signup";

export default function SignUp() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
    name: "",
    bio: ""
  });

  const close = () => {setModalOpen(false)};
  const open = () => {setModalOpen(true)};

  function sendData() {
    event?.preventDefault();
    axios
      .post("http://localhost:8080/users", signUp, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        if (response.status == 200 || response.status == 201 || response.status == 203) {
          console.log(response);
          return response.data;
        } 
        else {
          throw new Error(`Unexpected response status: ${response.status}`);
        }
      })
      .then(data => {
        
      })
      .catch(error => console.error(error));
  }

  function logIn(){
    event?.preventDefault();
    router.push("/auth");
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setSignUp(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div className="wrapper fadeInDow">
      <div className="formContent">
        <h2 className="active">Sign up</h2>
        <p className="active">Create your own account</p>
        <form>
          <input
            type="text"
            id="email"
            className="fadeIn second"
            name="email"
            placeholder="email"
            value={signUp.email}
            onChange={handleChange}
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="password"
            value={signUp.password}
            onChange={handleChange}
          />
          <input
            type="text"
            id="name"
            className="fadeIn fourth"
            name="name"
            placeholder="name"
            value={signUp.name}
            onChange={handleChange}
          />
          <input
            type="text"
            id="bio"
            className="fadeIn five"
            name="bio"
            placeholder="bio"
            value={signUp.bio}
            onChange={handleChange}
          />
          <button className="fadeIn fourth" onClick={sendData}>
            SIGN UP
          </button>
          {modalOpen && <CreatedSuccessfully handleClose={close} modalOpen={modalOpen}/>}
        </form>
      </div>
    </div>
  );
}
