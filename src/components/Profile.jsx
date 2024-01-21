import React from "react";
import { useContext } from "react";
import userContext from "../contexts/userContext";

const Profile = () => {
  const { user } = useContext(userContext);

  if (!user) {
    return (
      <div className="text-center font-bold text-3xl text-white mt-6">
        You are not logged in
      </div>
    );
  } else if (user.name === "" || user.password === "") {
    return (
      <div className="text-center font-bold text-3xl text-white mt-6">
        Please fill all the fields
      </div>
    );
  } else {
    return (
      <div className="text-center font-bold text-3xl text-white mt-6">
        welcome {user.name}
      </div>
    );
  }
};

export default Profile;
