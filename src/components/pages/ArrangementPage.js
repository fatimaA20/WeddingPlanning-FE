// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import Arrangement from '../models/Arrangement';

// function ArrangementPage() {
//   const { hallId } = useParams();
//   const [arrangements, setArrangements] = useState([]);

//   useEffect(() => {
//     Arrangement.getByHall(hallId)
//       .then(arrangements => setArrangements(arrangements))
//       .catch(err => console.log(err));
//   }, [hallId]);

//   return (
//     <div>
//       <h1>Arrangements</h1>
//       <ul>
//         {arrangements.map(arrangement => (
//           <li key={arrangement._id}>
//             <Link
