import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageLoader from "../PageLoader";
import { fetchError, fetchSuccess } from "../../redux/appReducer/actions";
import { error, loading, message } from "../../redux/appReducer/selectors";
import CustomSweetAlert from "../CustomAlert";

const ContentLoader = () => {
  const thisMessage = useSelector(message);
  const thisLoading = useSelector(loading);
  const thisError = useSelector(error);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchError(""));
      dispatch(fetchSuccess(""));
    }, 5000);
  }, [dispatch, thisError, thisMessage]);

  return (
    <>
      {thisLoading && <PageLoader />}
      {Boolean(thisError) && (
        <CustomSweetAlert variant={"error"} content={thisError} delay={3000} />
      )}
      {Boolean(thisMessage) && (
        <CustomSweetAlert
          variant={"success"}
          content={thisMessage}
          delay={3000}
        />
      )}
    </>
  );
};

export default ContentLoader;
