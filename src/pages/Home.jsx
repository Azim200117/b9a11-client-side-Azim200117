import Banner from '../components/Banner';
import Batch from '../components/Batch';
import MyMap from '../components/MyMap';
import Sponsor from '../components/Sponsor';

const Home = () => {
  return (
    <div className="my-24 mx-20 space-y-20">
      <Banner></Banner>
      <Batch></Batch>
      <MyMap></MyMap>
      <Sponsor></Sponsor>
    </div>
  );
};

export default Home;
