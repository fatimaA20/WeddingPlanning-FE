import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const cardStyles = {
  container: {
    display: "flex",
    height: 100,
    width: 400,
    boxShadow: "0 0 3px 2px #cec7c759",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  profilePicture: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    color: "white",
    height: 40,
    width: 40,
    borderRadius: "50%",
    padding: 10,
    fontWeight: "bold",
  },
  bio: {
    marginLeft: 10,
  },
  userName: {
    fontWeight: "bold",
  },
};
export default function home() {
  return (
    <>
   <div style={cardStyles.container}>
        <span style={cardStyles.profilePicture}>D</span>
        <div style={cardStyles.bio}>
          <p style={cardStyles.userName}>Ritz Carlton</p>
          <p>You can book here NOW!</p>
        </div>
      </div>
    <div style={{ color: 'red', lineHeight : 10, padding: 20 }}> Inline Styled Component</div>
<h2> Home </h2>








    </>
  );
}
