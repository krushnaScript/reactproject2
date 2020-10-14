import React, { useState } from "react";
import { useHistory } from "react-router-dom";

let LoginPage = () => {
    let history=useHistory();
    let [user,setUser]=useState({
        name:'',
        email:'',
        password:''
    });

    let [verifyPassword,setVerifyPassword]=useState('');

    let [userError,setUserError]=useState({
        nameError:false,
        emailError:false,
        passwordError:false,
        verifyPasswordError:false
    });

    const handleChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setUser({
            ...user,
            [name]:value
        });
        validateForm(name,value);
    }
    const validateForm=(name,value)=>{
        switch(name){
            case "name":
                if(/^[a-zA-Z0-9]{8,50}$/.test(value)){
                    setUserError({...userError,nameError:true});
                }
                else{
                setUserError({...userError,nameError:'Please enter proper Usernmae.Min 8 Char & Max 50 Char'});
                }
                break;
            case "email":
                if( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)){
                    setUserError({...userError,emailError:true});
                }
                else{
                setUserError({...userError,emailError:'Please enter proper Email.'});
                } 
                break;
            case 'password':
                if( /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,50}$/.test(value)){
                    setUserError({...userError,passwordError:true});
                }
                else{
                setUserError({...userError,passwordError:'Please enter proper password.Min 8 Char & Max 50 Char.Should be atleast one Special Character and one Numeric Value'});
                }   
                break;
            case 'verifyPassword':
                if( /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,50}$/.test(value)){
                    setUserError({...userError,verifyPasswordError:true});
                }
                else{
                setUserError({...userError,verifyPasswordError:'Please enter proper password.'});
                } 
                break;
            default :break;            
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(userError.nameError===true&&userError.emailError===true&&userError.passwordError===true&&userError.verifyPasswordError===true){
            if(user.password===verifyPassword){
               console.log(user);
               document.cookie = 'user' + " = " + JSON.stringify(user);
                history.push('/')
            }
            else{
                setUserError({...userError,verifyPasswordError:'password not matching'});
            }
        }
        else{
            setUserError({...userError,verifyPasswordError:'password not matching'});
        }
        
    }
    return (
        <div style={{width:'100vw',height:'100vh', position: 'absolute',top: 0,background: 'white'}}>
            <section >
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 m-auto">
                            <div className="card animated jello my-5">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <p className="h4 text-center py-2">Login Here</p>
                                        <div className="md-form">
                                            <i className="fa fa-user prefix grey-text"></i>
                                            <input 
                                            name="name"
                                            value={user.name}
                                            onChange={handleChange}
                                            type="text" className="form-control" placeholder="User Name"/>
                                            {userError.nameError?<small className="text-danger">{userError.nameError}</small>:null}

                                        </div>

                                        <div className="md-form">
                                            <i className="fa fa-envelope prefix grey-text"></i>
                                            <input type="email"
                                            name="email"
                                            value={user.email}
                                            onChange={handleChange}
                                            className="form-control"  placeholder="User Email"/>
                                            {userError.emailError?<small className="text-danger">{userError.emailError}</small>:null}
                                        </div>

                                        <div className="md-form">
                                            <i className="fa fa-lock prefix grey-text"></i>
                                            <input type="password"
                                            name="password"
                                            value={user.password}
                                            onChange={handleChange}
                                            className="form-control"  placeholder="User password"/>
                                            {userError.passwordError?<small className="text-danger">{userError.passwordError}</small>:null}
                                        </div>

                                        <div className="md-form">
                                            <i className="fa fa-exclamation-triangle prefix grey-text"></i>
                                            <input
                                            name="verifyPassword"
                                            value={verifyPassword}
                                            onChange={ (e)=>{setVerifyPassword(e.target.value);validateForm(e.target.name,e.target.value)} }
                                            type="password" className="form-control"  placeholder="Confirm your password"/>
                                            {userError.verifyPasswordError?<small className="text-danger">{userError.verifyPasswordError}</small>:null}
                                        </div>

                                        <div className="text-center py-4 mt-3">
                                            <button className="btn btn-cyan" type="submit">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default LoginPage;
