import banner from '../assets/Banner.jpeg';

const Banner = () => {
  return (
    <div className="flex flex-row gap-10">
      <div className="space-y-10 text-blue-900">
        <h1 className="text-5xl font-semibold">
          Book A <br /> Room <br /> to View The Nature
        </h1>
        <p className="text-2xl font-semibold">
          Discover a world of comfort, luxury, and unparalleled <br />{' '}
          hospitality at Hoteller. Nestled in the heart of city, our <br />{' '}
          exquisite hotel is your home away from home, where every <br /> stay
          is a memorable experience.
        </p>
        <button className="btn p-3 bg-blue-900 text-white">
          Book Your Stay Now
        </button>
      </div>
      <div>
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
