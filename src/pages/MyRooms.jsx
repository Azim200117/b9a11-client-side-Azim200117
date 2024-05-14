const MyRooms = () => {
  return (
    <div>
      <div className="text-center">
        <h3 className="text-xl font-bold">Your Booking: 3</h3>
        <h1 className="text-5xl font-bold mt-5">Your Booking Area</h1>
        <p className="text-[#737373] mt-5 font-bold">
          The majority have suffered alteration in some form, by <br />
          injected humour, or randomised words which do not look even <br />
          slightly believable.
        </p>
      </div>

      <div className="flex flex-row gap-10 mx-20 my-5">
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/rF3Zxch/room1.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg">Luxury Ocean View Suite</h2>
            <p>Luxury Suite with Ocean View</p>
            <p>$350</p>
            <div className="card-actions justify-start mt-5">
              <button className="btn bg-blue-800 text-white">View Now</button>
            </div>
          </div>
        </div>

        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/RyCqKSP/room2.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg">Deluxe Garden View Room</h2>
            <p>Deluxe Room with Garden View</p>
            <p>$200</p>
            <div className="card-actions justify-start mt-5">
              <button className="btn bg-blue-800 text-white">View Now</button>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/XWkNTjz/pexels-photo-2764182.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg">Standard City View Room</h2>
            <p>Standard City View Room</p>
            <p>$450</p>
            <div className="card-actions justify-start mt-5">
              <button className="btn bg-blue-800 text-white">View Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRooms;
