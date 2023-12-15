import React from "react";
import {jwtDecode} from "jwt-decode";
import { useEffect, useContext } from "react";
import {UserInfoContext} from "../../../context/userInfoContext";

const Reservations = () => {

    const {UserInfo}=useContext(UserInfoContext)
 




  return <div>Reservations</div>;
};

export default Reservations;
