import { useState } from 'react';

const Budget = () => {

        const submitEvent = () => {
        if(cost > 20000) {
        alert("The value cannot exceed 20000");
        setCost("");
        return;
        }
        else if(cost < 20){
        alert("You cannot reduce the value lower than the spending");
        setCost("");
        return;
        }
        }

        const [cost, setCost] = useState("");
        return (
        <div className='alert alert-secondary'>
        Budget: $
        <input
        type="number"
        id ='cost'
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        onKeyUp={submitEvent}
        />

        </div>
        );

    };
export default Budget;
