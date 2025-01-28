import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img
          src={user.photoUrl}
          alt="User Photo"
          className="my-5 rounded-full object-cover w-60 h-60"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user.firstName + " " + user.lastName}</h2>
        {user.age && user.gender && <p>{user.age + ", " + user.gender}</p>}
        <p>{user.about}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
