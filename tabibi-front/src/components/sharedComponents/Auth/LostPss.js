import React from 'react'

function LostPss() {
  return (
    <div className='lostPass-container'>
        <div className='lostPass-content'>
            <div className='container'>
                <div className='row align-items-center'>
                <div className='col-12 col-lg-6 wow slideInUp' data-wow-delay="0.1s">
                    <h3 className='formTitel text-center mb-4'>Password recovery</h3>
                    <p className='text-center '>Enter your E-mail and we will sent  you <br></br> a link to reset your password</p>
                    <form>
                        <div className="col-6 m-auto pb-4">
                            <input type="email" className="form-control   border bg-light px-4" placeholder="Your Email" required />
                        </div>
                        <div className="col-6 m-auto">
                            <button className="btn btn-primary  ms-5" type="submit">Reset password</button>
                        </div>  
                    </form>
                </div>
                <div className='col-6 text-center d-none d-lg-block wow slideInUp'data-wow-delay="0.3s">
                    <img src='img/Auth/FrPass.png' alt='password recovery Img' style={{width:300 }}></img>
                    <h4>Sign Up to our plateform </h4>
                    <p>Tabibi Portal help patients to find doctors according to their illnesses.</p>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default LostPss