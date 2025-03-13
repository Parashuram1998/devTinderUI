import axios from "axios";
import React, { useEffect } from "react";
import { Base_Url } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequestSent } from "../utils/requestSentSlice";

const RequestsSent = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requestSent);
  const fetchSentRequests = async () => {
    try {
      const res = await axios.get(Base_Url + "/user/request/sent", {
        withCredentials: true,
      });
      dispatch(addRequestSent(res.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSentRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0)
    return (
      <h1 className="flex justify-center my-10 text-bold text-black text-xl">
        No Requests Sent..
      </h1>
    );

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-black text-2xl">Requests Sent</h1>

      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.toUserId;

        return (
          <div
            key={_id}
            className="flex items-center m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
          >
            <div>
              <img
                src={photoUrl}
                alt="User Photo"
                className="w-28 h- rounded-full object-cover"
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RequestsSent;
