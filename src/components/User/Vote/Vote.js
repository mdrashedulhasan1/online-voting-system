import React from 'react';
import Header from '../Header/Header';
import './Vote.css';
const Vote = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-75 mx-auto bg-info pb-3'>
                <div className='vote-header mb-4 py-4 bg-warning'>
                    <h5 className='d-flex justify-content-start ps-5 fs-2'>Vote</h5>
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
                                <label htmlFor="" className="form-label required">Parties Name</label>
                            </div>
                            <div className="col-7">
                                <select className="form-select" aria-label="select example">
                                    <option value="selected">...Select...</option>
                                    <option value="1">Awami League</option>
                                    <option value="2">Bangladesh Nationalist Party</option>
                                    <option value="3">Others</option>
                                </select>
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className="col-5">
                                <label htmlFor="" className="form-label"></label>
                            </div>
                            <div className="col-7 ">
                                <button type="submit" className="btn btn-primary">SAVE</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Vote;