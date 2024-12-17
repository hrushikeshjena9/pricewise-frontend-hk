import TvinternetStep5left from "../../../components/Tv&internet/TvInternetstep/TvInternetStep5left";
import TvInternetStep3Rightbar from "../../../components/Tv&internet/TvInternetstep/TvInternetStep3Rightbar";
import ProgressBarTv from "../../../components/Tv&internet/ProgressBarTv";
const Step4 = () => {
  return (
    <div className="container">
      <div className="comparestep3">
        <div className="row">
        <ProgressBarTv width="100%"/>
          <TvinternetStep5left />
          <TvInternetStep3Rightbar />
        </div>
      </div>
    </div>
  );
};

export default Step4;
