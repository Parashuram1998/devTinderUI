import React, { useEffect } from "react";
import { Base_Url } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import axios from "axios";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((store) => store.feed);

  const getFeed = async () => {
    if (feedData) return;
    try {
      const res = await axios.get(Base_Url + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feedData) return;

  if (feedData.length <= 0)
    return (
      <h1 className="flex justify-center my-10 text-bold text-black text-xl">
        No New Users Found!!
      </h1>
    );
  return (
    feedData && (
      <div className="flex justify-center my-14">
        <UserCard user={feedData[0]} />
      </div>
    )
  );
};

export default Feed;
