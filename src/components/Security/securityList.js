import React, { useState, useEffect } from "react";
import Axios from "axios";
import security from "./Security";

export default function SecurityList() {
const [securityItems, setSecurityItems] = useState([]);

useEffect(() => {
loadSecurityList();
}, []);

const loadSecurityList = () => {
Axios.get("/security")
.then((response) => {
console.log(response);
// State to store the data
setSecurityItems(response.data);
})
.catch((err) => {
console.log("Error Retrieving Security Items");
console.log(err);
});
};

const allSecurityItems = securityItems.map((SecurityItem, index) => (
<tr key={index}>
<SecurityItem {...security} />
</tr>
));

return (
<div>
<h1>Security List</h1>
<div>
<table>
<tbody>
<tr>
<th>Name</th>
<th>Description</th>
<th>No. of Security </th>
<th>Price</th>
<th>Image</th>
</tr>
{allSecurityItems}
</tbody>
</table>
</div>
</div>
);
}