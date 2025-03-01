import axios from "axios";
import React, { useEffect } from "react";
import { Base_Url } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addRequestsReceived,
  removeRequestsReceived,
} from "../utils/requestsReceivedSlice";

const RequestsReceived = () => {
  const requests = useSelector((store) => store.requestsReceived);
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try {
      const res = axios.post(
        Base_Url + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequestsReceived(_id));
    } catch (err) {
      console.error(err);
    }
  };

  const receivedRequests = async () => {
    try {
      const res = await axios.get(Base_Url + "/user/request/received", {
        withCredentials: true,
      });
      dispatch(addRequestsReceived(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    receivedRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0)
    return (
      <h1 className="flex justify-center my-10 text-bold text-black text-xl">
        No Requests Received..
      </h1>
    );

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-black text-3xl">Requests Received</h1>

      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;

        return (
          <div
            key={_id}
            className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
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
            <div>
              <button
                className="btn btn-primary mx-2"
                onClick={() => reviewRequest("accepted", request._id)}
              >
                Accept
              </button>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => reviewRequest("rejected", request._id)}
              >
                Reject
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RequestsReceived;
