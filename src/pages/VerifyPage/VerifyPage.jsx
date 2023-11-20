import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { verifyUser } from "../../redux/auth/authOperation";
import { PROFILE_ROUTE } from "../../utils/const";

import useAuth from "../../hooks/useAuth";

const VerifyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isVerify, status } = useAuth();


  useEffect(() => {
    dispatch(verifyUser(id));
  }, [dispatch, id, ]);

  
  useEffect(() => {
    if (status === "fulfilled") {
      navigate(PROFILE_ROUTE);
    }
    if (status === "rejected" && !isVerify) {
      navigate("/404");
    }
  }, [status, navigate, isVerify]);

  return <div></div>;
};

export default VerifyPage;
