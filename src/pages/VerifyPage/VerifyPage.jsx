import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { verifyUser } from "../../redux/auth/authOperation";
import { PROFILE_ROUTE } from "../../utils/const";

const VerifyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(verifyUser(id));
      console.log('response: ', response);
      if (response.error) {
        return navigate("/");
      }
      navigate(PROFILE_ROUTE);
    };
    fetchData();
  }, [dispatch, id, navigate]);

  return <div>sfssf</div>;
};

export default VerifyPage;
