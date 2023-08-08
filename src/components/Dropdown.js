import React, { useState, createContext } from 'react';


const Dropdown = () => {
const [name, setName] = useState('');
return (
<div class = "dropdown">
<span>
<select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
<option defaultValue>Currency{name}</option>
<option value="Dollar" name="$">$ Dollar</option>
<option value="Pound" name="£">£ Pound</option>
<option value="Euro" name="€">€ Euro</option>
<option value="Ruppee" name="₹">₹ Ruppee</option>

</select>

</span>
</div>
);

};


export const name = createContext();
export default Dropdown;

