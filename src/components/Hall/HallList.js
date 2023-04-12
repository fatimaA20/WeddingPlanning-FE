import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Hall from './hall'

const HallList = ({ handleHallSelection, selectedHallId }) => {
  const [halls, setHalls] = useState([]);

  useEffect(() => {
    loadHallsList();
  }, []);

  const loadHallsList = () => {
    Axios.get('hall/index')
      .then((response) => {
        console.log(response);
        setHalls(response.data.halls);
      })
      .catch((err) => {
        console.log('Error Retreiving halls');
        console.log(err);
      });
  };

  const handleNextClick = () => {
    // Pass the selected hall ID to the parent component
    handleHallSelection(selectedHallId);
  };

  const hallList = halls.map((hall) => (
    <Hall
      key={hall.id}
      id={hall.id}
      name={hall.name}
      size={hall.type}
      availableDate={hall.availableDate}
      price={hall.price}
      image={hall.image}
      selected={hall.id === selectedHallId}
    />
  ));

  return (
    <div>
      <ul>{hallList}</ul>
      <div>
      {selectedHallId && (
        <button type="button" onClick={handleNextClick}>
          Next
        </button>
      )}
      </div>
    </div>
  );
};

export default HallList;
