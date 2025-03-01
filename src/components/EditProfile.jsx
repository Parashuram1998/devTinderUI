import React, { useState } from "react";
import UserCard from "./UserCard";
import { Base_Url } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [about, setAbout] = useState(user.about || "");
  const [error, setError] = useState(user.error);
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const updateProfile = async () => {
    //clearing the present error
    setError("");
    try {
      const res = await axios.patch(
        Base_Url + "/profile/edit",
        { firstName, lastName, photoUrl, age, gender, about },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <>
      <div className="flex justify-center my-10 min-h-0 max-h-fit">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <div>
              <label className="form-control w-full max-w-xs my-2">
                <div className="lable">
                  <span className="lable-text">First Name :</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs my-2">
                <div className="lable">
                  <span className="lable-text">Last Name :</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs my-2">
                <div className="lable">
                  <span className="lable-text">Photo URL :</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs my-2">
                <div className="lable">
                  <span className="lable-text">Age :</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs my-2">
                <div className="lable">
                  <span className="lable-text">Gender :</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
                {/* <select className="select select-bordered w-full max-w-xs">
                <option selected>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select> */}
              </label>
              <label className="form-control w-full max-w-xs my-2">
                <div className="lable">
                  <span className="lable-text">About :</span>
                </div>
                {/* <input
                type="textarea"
                className="input input-bordered w-full max-w-xs"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              /> */}
                <textarea
                  className="textarea"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </label>
            </div>
            <p className="text-red-500">{error}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={updateProfile}>
                Update Profile
              </button>
            </div>
          </div>
        </div>
        <div className="flex mx-10">
          <UserCard
            user={{ firstName, lastName, photoUrl, age, gender, about }}
          />
        </div>
        {showToast && (
          <div className="toast toast-top toast-center">
            <div className="alert alert-success">
              <span>Profile updated successfully.</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EditProfile;
