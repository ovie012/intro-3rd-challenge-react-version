import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = () => {
    // e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(firstNameRef.current.value === '') {
      setFirstNameError(true);
    } else {
      setFirstNameError(false)
    }

    if(lastNameRef.current.value === '') {
      setLastNameError(true);
    } else {
      setLastNameError(false)
    }

    if(emailRef.current.value === '' || !emailRegex.test(emailRef.current.value) ) {
      setEmailError(true);
    } else {
      setEmailError(false)
    }

    if(passwordRef.current.value === '') {
      setPasswordError(true);
    } else {
      setPasswordError(false)
    }
  };

  return (
    <>
      <div className="container">
        <div className="texts">
            <h2>Learn to code by watching others</h2>
            <h5>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
                but understanding how developers think is invaluable.</h5>
        </div>
        <div className="form-and-promo">
            <div className="promo"><h4><span>Try it free 7 days</span> then $20/mo. thereafter</h4></div>
            <div className="form">
                <form>
                    <div className={`first-name input ${firstNameError ? 'active' : ''}`}>
                        <input ref={firstNameRef} className="input-input" type="text" placeholder="First Name" />
                        {firstNameError && (
                          <>
                            <img className="img-1" src="/icon-error.svg" alt="error" />
                            <p>First Name cannot be empty</p>
                          </>
                        )}
                    </div>
                    <div className={`last-name input ${lastNameError ? 'active' : ''}`}>
                        <input ref={lastNameRef} className="input-input" type="text" placeholder="Last Name" />
                        {lastNameError && (
                          <>
                            <img className="img-2" src="/icon-error.svg" alt="error" />
                            <p>Last Name cannot be empty</p>
                          </>
                        )}
                    </div>
                    <div className={`email input ${emailError ? 'active' : ''}`}>
                        <input ref={emailRef} className="input-input" type="text" placeholder="Email Address" />
                        {emailError && (
                          <>
                            <img className="img-3" src="/icon-error.svg" alt="error" />
                            <p>Looks like this is not an email</p>
                          </>
                        )}
                    </div>
                    <div className={`password input ${passwordError ? 'active' : ''}`}>
                        <input ref={passwordRef} className="input-input" type="password" placeholder="Password" />
                        {passwordError && (
                          <>
                            <img className="img-4" src="/icon-error.svg" alt="error" />
                            <p>Password cannot be empty</p>
                          </>
                        )}
                    </div>
                    <button onClick={handleSubmit} type="button" className="submit">CLAIM YOUR FREE TRIAL</button>
                    <h6 className="terms">By clicking the button, you are agreeing to our <span className="term">Terms and Services</span></h6>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default App


//LEGEND.DEV coded this









//corrections below for better future coding

// import { useState, useRef } from 'react';
// import './App.css';

// function App() {
//   const [errors, setErrors] = useState({});
//   const formRefs = {
//     firstName: useRef(),
//     lastName: useRef(),
//     email: useRef(),
//     password: useRef(),
//   };

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formRefs.firstName.current.value.trim()) {
//       newErrors.firstName = 'First Name cannot be empty';
//     }

//     if (!formRefs.lastName.current.value.trim()) {
//       newErrors.lastName = 'Last Name cannot be empty';
//     }

//     if (!emailRegex.test(formRefs.email.current.value.trim())) {
//       newErrors.email = 'Looks like this is not an email';
//     }

//     if (!formRefs.password.current.value.trim()) {
//       newErrors.password = 'Password cannot be empty';
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Form is valid, proceed with form submission logic
//       console.log('Form submitted');
//     }
//   };

//   return (
//     <div className="container">
//       <div className="texts">
//         <h2>Learn to code by watching others</h2>
//         <h5>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
//             but understanding how developers think is invaluable.</h5>
//       </div>
//       <div className="form-and-promo">
//         <div className="promo">
//           <h4><span>Try it free 7 days</span> then $20/mo. thereafter</h4>
//         </div>
//         <div className="form">
//           <form onSubmit={handleSubmit}>
//             {['firstName', 'lastName', 'email', 'password'].map((field, idx) => (
//               <div key={field} className={`input ${errors[field] ? 'active' : ''}`}>
//                 <input
//                   ref={formRefs[field]}
//                   className="input-input"
//                   type={field === 'password' ? 'password' : 'text'}
//                   placeholder={field === 'email' ? 'Email Address' : `${field.charAt(0).toUpperCase() + field.slice(1)} Name`}
//                 />
//                 {errors[field] && (
//                   <>
//                     <img className={`img-${idx + 1}`} src="/icon-error.svg" alt="error" />
//                     <p>{errors[field]}</p>
//                   </>
//                 )}
//               </div>
//             ))}
//             <button type="submit" className="submit">CLAIM YOUR FREE TRIAL</button>
//             <h6 className="terms">By clicking the button, you are agreeing to our <span className="term">Terms and Services</span></h6>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
