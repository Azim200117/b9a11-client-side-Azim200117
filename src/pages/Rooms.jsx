import { useEffect, useState } from 'react';
import RoomsCard from '../pages/RoomsCard';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setRooms(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h3 className="text-xl font-bold">Rooms: {rooms.length}</h3>
        <h1 className="text-5xl font-bold mt-5">Our Rooms Area</h1>
        <p className="text-[#737373] mt-5 font-bold">
          The majority have suffered alteration in some form, by <br />
          injected humour, or randomised words which do not look even <br />
          slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-20 mr-16 mt-10">
        {rooms.map(service => (
          <RoomsCard key={service.id} service={service}></RoomsCard>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
