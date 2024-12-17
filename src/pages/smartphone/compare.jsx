import PersonalProgressBarstep from "../../../components/SmartPhone/smartphonestep2/PersonalProgressBarstep";
import SmartphonePersonalCompareindex from "../../../components/SmartPhone/smartphonestep2/smartphonePersonalCompareindex";
import { useState } from "react";

const StepTwo = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <>
      <PersonalProgressBarstep width="50%" />
      <SmartphonePersonalCompareindex
        showMoreInfo={showMoreInfo}
        setShowMoreInfo={setShowMoreInfo}
      />
    </>
  );
};

export default StepTwo;
