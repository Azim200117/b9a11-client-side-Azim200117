import { Map, Marker } from 'pigeon-maps';

const MyMap = () => {
  return (
    <div className="space-y-5">
      <h3 className="text-center text-4xl font-medium">Where We Located</h3>
      <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
        <Marker width={50} anchor={[50.879, 4.6997]} />
      </Map>
    </div>
  );
};

export default MyMap;
