const RoomsCard = ({ service }) => {
  const { title, description, price, room_img } = service;

  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img src={room_img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg">{title}</h2>
          <p>{description}</p>
          <p>${price}</p>
          <div className="card-actions justify-start mt-5">
            <button className="btn bg-blue-800 text-white">View Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsCard;
