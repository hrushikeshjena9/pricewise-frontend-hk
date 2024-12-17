import { useState,useEffect } from "react";
import TopSection from "../../../components/Tv&internet/TvInternetstep/TopSection";
import LeftFilter from "../../../components/Tv&internet/TvInternetstep/LeftFilter";
import ActionSection from "../../../components/Tv&internet/TvInternetstep/ActionSection";
import ProgressBarTv from "../../../components/Tv&internet/ProgressBarTv";
const Step2 = ({ data3 }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [apiRes, setApiRes] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [pageNo, setPageNo] = useState(1);
  const [apiSendData, setApiSendData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(apiSendData);
    const filteredData = async () => {
      setLoading(true);
      try {
        const res = await PostData(
          "internet-tv",
          "",
          { ...apiSendData, filters: checkedItems, postsPerPage: postsPerPage, pageNo: pageNo },
          `Bearer ${authToken}`
        );
        setApiRes(res);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    if (checkedItems) filteredData();
  }, [checkedItems, postsPerPage, pageNo]);

  return (
    <section>
      <div className="container">
        <div className="comparestep">
        <ProgressBarTv width="50%" />
          <TopSection />
          <div className="row">
            <LeftFilter
              apiRes={apiRes}
              setCheckedItems={setCheckedItems}
              checkedItems={checkedItems}
              data3={data3}
            />
            <div className="col-lg-8">
              <ActionSection
                apiRes={apiRes}
                postsPerPage={postsPerPage}
                pageNo={pageNo}
                setPageNo={setPageNo}
                setPostsPerPage={setPostsPerPage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step2;
export async function getServerSideProps() {
    try {
      const data = await axiosGet("house-type");
      const data2 = await axiosGet('get-internet-tv-deals');
      const data3 = await axiosGet('get-internet-tv-package');
      return {
        props: { data: data, data2: data2,data3:data3.data },
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        props: { data: {}, data2: {} },
      };
    }
  }