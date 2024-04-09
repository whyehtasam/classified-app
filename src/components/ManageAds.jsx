import AdsTable from "./AdsTable";

const ManageAds = () => {
  return (
    <section className="ads">
       <h1 className="text-2xl sm:text-4xl font-semibold mb-5">View Ads details :</h1>
      <AdsTable />
    </section>
  );
};

export default ManageAds;
