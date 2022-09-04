import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './UserLogin.css';
const UserLogin = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-75 mx-auto bg-info pb-3'>
            <div className='user-header mb-4 py-4 bg-warning'>
                <h5 className='d-flex justify-content-start ps-5 fs-2'>User Login</h5>
            </div>
            <form>
                <div className='w-50 mx-auto'>
                    <div className='row mb-2'>
                        <div className="col-5">
                            <label htmlFor="" className="form-label required">Login Id</label>
                        </div>
                        <div className="col-7">
                            <input type="password" className="form-control" id="" placeholder='write your id' required />
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className="col-5">
                            <label htmlFor="" className="form-label"></label>
                        </div>
                        <div className="col-7 d-flex justify-content-start">
                            <Link to="/user-login/vote"><button type="submit" className="btn btn-primary">SUBMIT</button></Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
};

export default UserLogin;