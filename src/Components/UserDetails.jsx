import React, { useContext } from 'react'
import { useSelector } from 'react-redux';

const UserDetails = () => {
    const {user:{name,age,email,address,contactNo,image}} = useSelector(s=>s.userSlice)
  return (
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col-md-8 p-4 d-flex flex-column position-static">
        <strong className="d-inline-block mb-2 text-primary-emphasis">
          {name}
        </strong>
        <h6 className="mb-0">{email}</h6>
        <h5 className="mb-0">Call: {contactNo}</h5>
        <div className="mb-1 text-body-secondary">Age: {age}</div>
        <p
          className="card-text mb-auto overflow-hidden"
         
        >
          {address}
        </p>
      </div>
      <div className="col-md-4 d-flex  align-items-center ">
        <img
          src={image}
          className="bd-placeholder-img "
          height="100px"
          width="100px"
        />
      </div>
    </div>
  );
}

export default UserDetails