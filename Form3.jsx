import React from 'react'
import {useState } from 'react'

const Forms3 = () => {
  const[userInfo,setUserInfo]=useState({
    firstName:"",
    middleName:"",
    lastName:"",
    birthMonth:"",
    birthDay:"",
    birthYear: "",
    Gender:"",
    Address:"",
    city:"",
    postal:"",

    
});
const {
  firstName,
    middleName,
    lastName,
    birthMonth,
    birthDay,
    birthYear,
    Gender,
    Address,
    city,
    postal,

} = userInfo;

const handleFirstName =  ({target:{value}}) =>{
  setUserInfo({...userInfo, firstName: value});
  console.log(userInfo.firstName);
};

const handleMiddleName = ({target:{value}}) =>{
  setUserInfo({...userInfo, middleName: value});
};

const handleLastName =  ({target:{value}}) =>{
  setUserInfo({...userInfo, LastName: value});
};
const handleMonth =  ({target:{value}}) =>{
  setUserInfo({...userInfo, birthMonth: value});
};

const handelYear =  ({target:{value}}) =>{
  setUserInfo({...userInfo, birthYear : value});
};

const handelDay =  ({target:{value}}) =>{
  setUserInfo({...userInfo, birthday : value});
};

const handelGender =  ({target:{value}}) =>{
  setUserInfo({...userInfo, Gender : value});
};

const handelAddress =  ({target:{value}}) =>{
  setUserInfo({...userInfo, Address : value});
};

const handelCity =  ({target:{value}}) =>{
  setUserInfo({...userInfo, city : value});

};

const postalHandle =  ({target:{value}}) =>{
  setUserInfo({...userInfo, postal : value});
};
const handleForm = () =>{
  if(firstName.trim() === '' || lastName.trim() === ''){
    alert('Fill up the Name field')
  }else if(birthMonth==='' || birthDay==='' || birthYear===''){
    alert('Select your Birth date')
  }else if(Gender === ''){
    alert('select your gender')
  }    else if(Address.trim() === '' || city.trim() === ''){
    alert('Fill up the Address field')
  }
  else{
    alert('Submitted')
  }
}
const submitHandle = (e) => {
  e.preventDefault();
  alert('Submitted')
   }


  return (
        <>
         <form>
            <h1>Registration form</h1>
            <div class="container">
            <h3>Student Name</h3>
            <div class ="top">
            <div class ="first">
            <label>First Name</label>
            <input 
            type="text"
            onChange={handleFirstName}
            value={firstName}
            placeholder="First Name"
            />
            </div>
            <div class= "middle">
            <label> Middle Name </label>
            <input
            type="text"
            onchange={handleMiddleName}
            placeholder="Middle Name"
            />
            </div>
            <div class="last">
            <label> Last Name </label>
            <input
            type="text"
            onchange={handleLastName}
            placeholder="Last Name"
            />
            </div>

                </div>
            </div>
            <div class="birth">
              <h2>Birth day</h2>
                <div class="Month">
                
                  <select 
                  onchange={handleMonth}
                  >
                  <option value=""
                  hidden>Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
                <label>Month</label>
                </div>
                <div class="day">
                <select
                 onChange={handelDay}
                >
                  <option value="" hidden>Day</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                </select>
              <label>Year</label>
               </div> 
               <div className="year">
                <select
                onChange={handelYear}
                value={birthYear}
                >
                  <option value=""
                  hidden>Year</option>

                        <option value="1">2022</option>
                        <option value="2">2021</option>
                        <option value="3">2020</option>
                        <option value="4">2019</option>
                        <option value="5">2018</option>
                        <option value="6">2017</option>
                        <option value="7">2016</option>
                        <option value="8">2015</option>
                        <option value="9">2014</option>
                        <option value="10">2013</option>
                        <option value="11">2012</option>
                        <option value="12">2011</option>
                        <option value="13">2010</option>
                        <option value="14">2009</option>
                        <option value="15">2008</option>
                        <option value="16">2007</option>
                        <option value="17">2006</option>
                        <option value="18">2005</option>
                        <option value="19">2004</option>
                        <option value="20">2003</option>
                        <option value="21">2002</option>
                        <option value="22">2001</option>
                        <option value="23">2000</option>
                        <option value="24">1999</option>
                        <option value="25">1998</option>
                        <option value="26">1997</option>
                        <option value="27">1996</option>
                        <option value="28">1995</option>
                        <option value="29">1994</option>
                        <option value="30">1993</option>
                        <option value="31">1992</option>
                        <option value="32">1991</option>
                        <option value="33">1990</option>
                        <option value="34">1989</option>
                        <option value="35">1988</option>
                        <option value="36">1987</option>
                        <option value="37">1986</option>
                        <option value="38">1985</option>
                        <option value="39">1984</option>
                        <option value="40">1983</option>
                        <option value="41">1982</option>
                        <option value="40">1981</option>
                        <option value="41">1980</option>
                </select>
                <label>year</label>
               </div>
               <div className="Gender">
                <select
                onChange={handelGender}
                value={Gender}
                >
                  <option value=""
                  hidden>Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value ="Other">Other</option>
                </select>
                <label>Gender</label>
               </div>
           </div>
           <div class="address">
            <div class="street-address">
              <input
              type="address"
              onChange={handelAddress}
              value={Address}
              />
              <label>street address</label>
            </div>
           </div>
           <div className='city'>
            <input 
            type="address"
            onChange={handelCity}
            value={city}
            />
            <label>city</label>
           </div>
           <div className="postal">
                        <input
                            type="postal"
                            onChange={postalHandle}
                            value={postal}
                        />
                        <label>Postal / Zip Code</label>
           </div>
        <button onClick={submitHandle}>Submit</button>
         </form>

        </>

  );
};

export default Forms3;
