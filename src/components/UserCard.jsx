import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="card card-side bg-base-300 shadow-xl">
      <figure>
        <img className="size-100" src={user.photoUrl} alt="User Photo" />
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
