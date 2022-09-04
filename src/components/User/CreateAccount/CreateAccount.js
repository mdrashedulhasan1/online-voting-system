import React from 'react';
import Header from '../Header/Header';
import './CreateAccount.css';
const CreateAccount = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-75 mx-auto bg-info pb-3'>
                <div className='registration-header py-4 bg-warning'>
                    <h2 className='d-flex justify-content-start ps-5 fs-2'>User Registration</h2>
                </div>
                <form>
                    <div className='w-50 mx-auto py-2'>
                        <div className='row mb-2'>
                            <div className="col-5">
                                <label htmlFor="" className="d-flex justify-content-end form-label required" >First name</label>
                            </div>
                            <div className="col-7">
                                <input type="text" className="form-control" id="" placeholder='write your first name' required />
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className="col-5">
                                <label htmlFor="" className="d-flex justify-content-end form-label required" >Last name</label>
                            </div>
                            <div className="col-7">
                                <input type="text" className="form-control" id="" placeholder='write your last name' required />
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className="col-5">
                                <label htmlFor="" className="d-flex justify-content-end form-label required">Login Id</label>
                            </div>
                            <div className="col-7">
                                <input type="password" className="d-flex justify-content-end form-control" id="" placeholder='write your last name' required />
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className="col-5">
                                <label htmlFor="" className="d-flex justify-content-end form-label required">Dath of Barth</label>
                            </div>
                            <div className="col-7">
                                <input type="date" className="form-control" id="" required />
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className="col-5">
                                <label htmlFor="" className="d-flex justify-content-end form-label required">Voter Card Number</label>
                            </div>
                            <div className="col-7">
                                <input type="number" className="form-control" id="" placeholder='enter your card number' required />
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className="col-5">
                                <label htmlFor="" className="d-flex justify-content-end form-label required">Mobile Number</label>
                            </div>
                            <div className="col-7">
                                <input type="number" className="form-control" id="" placeholder='enter your mobile nymber' required />
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className="col-5">

                            </div>
                            <div className="col-7">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;