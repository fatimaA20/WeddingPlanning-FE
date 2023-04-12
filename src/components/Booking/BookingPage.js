import React, { useState } from 'react';
import HallList from '../Hall/HallList';

const Booking = () => {
  // State to store the selected hall ID
  const [selectedHallId, setSelectedHallId] = useState('');

  // Handle hall selection
  const handleHallSelection = (hallId) => {
    setSelectedHallId(hallId);
  };

  return (
    <div>
      <h2>Select a hall:</h2>
      <HallList handleHallSelection={handleHallSelection} selectedHallId={selectedHallId} />
    </div>
  );
};

export default Booking;
