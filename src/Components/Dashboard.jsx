import React, { useEffect } from 'react'
import { FaReadme } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getAllUser, getSingleUser, handleModalForm } from '../Utility/userSlice';
const Dashboard = () => {
    const {userList} = useSelector((s)=>s.userSlice)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllUser());
    },[])
    const handleEditBtn = (id)=>{
        dispatch(getSingleUser(id))
        dispatch(handleModalForm({show:true,formType:"Edit"}))
    }
    const handleReadBtn = (id)=>{
        dispatch(getSingleUser(id))
        dispatch(handleModalForm({show:true,formType:"Read"}))
    }
  return (
    <>
      <table class="table align-middle">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Address</th>
            <th scope="col">ContactNo</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((elm,ind)=>{
            const {name,age,email,address,image,contactNo,id} = elm
            return (
              <tr key={id}>
                <th scope="row">{ind +1 }</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{age}</td>
                <td>{address}</td>
                <td>{contactNo}</td>
                <td>
                  <img
                    src={image}
                    alt=""
                    style={{ height: "100px", width: "100px" }}
                  />
                </td>
                <td>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-success rounded"
                      onClick={()=>handleEditBtn(id)}
                    >
                      <CiEdit />
                    </button>
                    <button type="button" class="btn btn-danger rounded mx-2"
                     onClick={()=>dispatch(deleteUser(id))}>
                      <MdDelete />
                    </button>
                    <button type="button" class="btn btn-warning rounded"
                      onClick={()=>handleReadBtn(id)}
                    >
                      <FaReadme />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Dashboard