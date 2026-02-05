import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser, handleModalForm, handleUserForm } from "../Utility/userSlice.js";
import UserDetails from "./UserDetails.jsx";

const ModalForm = () => {
  const { show,user,checkFormType } = useSelector((s) => s.userSlice);
  const dispatch = useDispatch();
  const {name,age,email,address,image,contactNo,id,password} = user
  const handleModleBTN= (userData)=>{
    if(checkFormType=="Add"){
          dispatch(addUser(userData));
    }else if(checkFormType=="Edit"){
        dispatch(editUser(user))
    }
    dispatch(handleModalForm({show:false,formType:""}))
  }
  return (
    <>
      <Modal
        show={show}
        onHide={() => dispatch(handleModalForm({ show: false, formType: "" }))}
      >
        <Modal.Header closeButton>
          <Modal.Title>{checkFormType} Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-11 mx-auto">
              {checkFormType == "Read" ? (
                <UserDetails />
              ) : (
                <form action="">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInputName"
                      placeholder="name@example.com"
                      name="name"
                      value={name}
                      onChange={(e) =>
                        dispatch(
                          handleUserForm({ [e.target.name]: e.target.value }),
                        )
                      }
                    />
                    <label for="floatingInputName">Name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInputEmail"
                      placeholder="name@example.com"
                      name="email"
                      value={email}
                      onChange={(e) =>
                        dispatch(
                          handleUserForm({ [e.target.name]: e.target.value }),
                        )
                      }
                    />
                    <label for="floatingInputEmail">Email </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInputAge"
                      placeholder="name@example.com"
                      name="age"
                      value={age}
                      onChange={(e) =>
                        dispatch(
                          handleUserForm({ [e.target.name]: e.target.value }),
                        )
                      }
                    />
                    <label for="floatingInputAge">Age</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInputAddress"
                      placeholder="name@example.com"
                      name="address"
                      value={address}
                      onChange={(e) =>
                        dispatch(
                          handleUserForm({ [e.target.name]: e.target.value }),
                        )
                      }
                    />
                    <label for="floatingInputAddress">Address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInputContactNo"
                      placeholder="name@example.com"
                      name="contactNo"
                      value={contactNo}
                      onChange={(e) =>
                        dispatch(
                          handleUserForm({ [e.target.name]: e.target.value }),
                        )
                      }
                    />
                    <label for="floatingInputContactNo">ContactNo</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInputPassword"
                      placeholder="name@example.com"
                      name="password"
                      value={password}
                      onChange={(e) =>
                        dispatch(
                          handleUserForm({ [e.target.name]: e.target.value }),
                        )
                      }
                    />
                    <label for="floatingInputPassword">Password</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInputImage"
                      placeholder="name@example.com"
                      name="image"
                      value={image}
                      onChange={(e) =>
                        dispatch(
                          handleUserForm({ [e.target.name]: e.target.value }),
                        )
                      }
                    />
                    <label for="floatingInputImage">Image</label>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-success"
                      type="button"
                      onClick={() => handleModleBTN(user)}
                    >
                      {checkFormType}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalForm;
