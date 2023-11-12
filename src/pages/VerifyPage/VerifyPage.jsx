import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { verifyUser } from "../../redux/auth/authOperation";

const VerifyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(verifyUser(id));
      console.log('response: ', response);
      if (response.error) {
        navigate("/");
      }
    };
    fetchData();
  }, [dispatch, id, navigate]);

  return <div>sfssf</div>;
};

export default VerifyPage;
