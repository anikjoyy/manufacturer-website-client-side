import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '450px',
  height: '400px',
};

const center = {
  lat: 24.37509992109359,
  lng: 88.6046747626979,
};

const FindUs = () => {
  return (
    <div className='hero min-h-[60vh]  my-14'>
      <div className='hero-content flex-col lg:flex-row'>
        <div>
          <h2 className='text-center text-5xl fw-bold text-primary'>
            Our Location
          </h2>
          <p className='py-6 pr-7'>
            If you want find our location just see the map right here!! And come
            to us to build your dream car. If you don't want come here just
            order the tools at your home.
          </p>
          <button className='btn btn-primary text-center'>Let's Go</button>
        </div>
        <div>
          <LoadScript googleMapsApiKey='YOUR_API_KEY'>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              <></>
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FindUs);
