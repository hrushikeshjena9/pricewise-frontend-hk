import React,{useState} from "react";
import { useSelector } from "react-redux";
import TvInternetStep3Leftbar from "../../../components/Tv&internet/TvInternetstep/TvInternetStep3Leftbar";
import TvInternetStep3Rightbar from "../../../components/Tv&internet/TvInternetstep/TvInternetStep3Rightbar";
import ProgressBarTv from "../../../components/Tv&internet/ProgressBarTv";
const Step3 = () => {
  const [show, setShow] = useState(1);
  const [addedPackages, setAddedPackages] = useState([]);
  const [userDetails, setUserDetails] = useState();

  
    const singleData = useSelector(
      (state) => state?.internetTv?.internetSingleProd[0]
    );
  return (
    <div className="container">
      <div className="row">
        <ProgressBarTv width="75%"/>
        {show == 1 && (
          <>
            <TvInternetStep3Leftbar
              setShow={setShow}
              show={show}
              singleData={singleData}
              setAddedPackages={setAddedPackages}
              addedPackages={addedPackages}
            />
            <TvInternetStep3Rightbar
              setShow={setShow}
              singleData={singleData}
              addedPackages={addedPackages}
            />
          </>
        )}
        {show == 2 && (
          <>
            {/* <InternetTvstep4 setShow={setShow} userDetails={userDetails} /> */}
            <TvInternetStep3Rightbar
              setShow={setShow}
              show={show}
              singleData={singleData}
              addedPackages={addedPackages}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Step3;
export async function getServerSideProps() {
  try {
    const data = await axiosGet("house-type");
    const data2 = await axiosGet("get-internet-tv-deals");
    const data3 = await axiosGet("get-internet-tv-package");
    return {
      props: { data: data, data2: data2, data3: data3.data },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { data: {}, data2: {} },
    };
  }
}
