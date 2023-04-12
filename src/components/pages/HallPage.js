// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Hall from '../models/Hall';

// function HallPage() {
//   const [halls, setHalls] = useState([]);

//   useEffect(() => {
//     Hall.getAll()
//       .then(halls => setHalls(halls))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div>
//       <h1>Halls</h1>
//       <ul>
//         {halls.map(hall => (
//           <li key={hall._id}>
//             <Link to={`/hall/${hall._id}/arrangement`}>{hall.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default HallPage;
