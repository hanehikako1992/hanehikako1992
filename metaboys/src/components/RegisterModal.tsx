import * as React from "react";
import Blockie from "./Blockie";
import Banner from "./Banner";

import ImgProject from "../assets/img/project/img.png"
import Marquee from "react-fast-marquee";
import FadeIn from 'react-fade-in';

import metaboys from '../assets/img/marquee .png'
import '../assets/css/register.css'
import LogoMarquee from "./LogoMarquee";

import { Toast } from 'react-bootstrap'
interface IRegisterModalProps {
  killSession: () => void;
  balance: number;
  address: string;
  hideModal: () => void;
  show: boolean;
}

const RegisterModal = (props: IRegisterModalProps) => {
  
  const { show, hideModal, address, balance, killSession } = props;

  const [toast, setShowA] = React.useState({
    show: false,
    success: false,
    content: ""
  });

  // These methods will update the state properties.
  const updateToast = (value:Object) => {
    return setShowA((prev) => {
      return { ...prev, ...value };
    });
  }
  const toggleShowA = () => updateToast({show: !toast.show})
  const setToast = ( success:boolean, ctx:string) => updateToast({success: success, content: ctx})

  const [form, setForm] = React.useState({
    email: "",
    wallet: address,
    balance: balance,
    phone: "",
  });
  const onSubmit = async (e:any) => {
    e.preventDefault();

    alert("Your balance: "+ balance)
    // if( balance < 10000000000000000 ){
    //   setToast(false, "Low Balance")
    //   toggleShowA()  
    //   return killSession()
    // }
    console.log(address, balance)
    updateForm({ wallet: address, balance: balance })
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("/.netlify/functions/server/user/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .then( async (res:any) => {
      toggleShowA()

      if(res.status === 400){
        let resp = await res.json()
        let error = parseInt( resp["message"] )
        if (error === 0){
          setToast(false, "Email Exist")
        }
        if (error === 1){
          setToast(false, "Wallet Exist")
        }
        if (error === 2){
          setToast(false, "Mobile Exist")
        }
        return killSession()

      }
      if(res.status === 200 || res.status === 201){
        return setToast(true, "Registration Success")
      }
      return setToast(false, "Fetch Error")

    })
    .catch(error => {
      toggleShowA()
      setToast(false, "Sorry, Backend Error")
      return killSession()
    });

    setForm({ email: "", wallet: "", balance: 0 , phone: ""});
    hideModal()
  }

  // These methods will update the state properties.
  const updateForm = (value:Object) => {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  console.log(show)
  return (
    <>
    <div className="login-box" style={{display: show===true?"block":"none"}} id="registerModal">
      <div>
      
      <h2>Registration</h2>
      <button type="button" className="btn-close" onClick={killSession}></button>

      <form onSubmit={onSubmit}>
        <div className="user-box">
          <input type="email" name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })} required />
        </div>
        <div className="user-box">
          <input type="text" name="phone"
            placeholder="Enter Phone Number"
            value={form.phone}
            onChange={(e) => updateForm({ phone: e.target.value })} />
        </div>
        <button type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
      </div>
      
    </div>
    <Toast show={toast.show} className={toast.success===true?"success":"error"} onClose={toggleShowA}>
      <Toast.Header>
        <img
          src="holder.js/20x20?text=%20"
          className="rounded me-2"
          alt=""
        />
        <strong className="me-auto">{toast.content}</strong>
      </Toast.Header>
    </Toast></>
  );
};

export default RegisterModal;
