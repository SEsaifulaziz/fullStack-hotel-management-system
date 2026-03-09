import React, { useState, useEffect } from 'react';
import { getRoomTypes } from '../utils/ApiFunctions';

const RoomTypeSelector = ({ handleNewRoomInputChange, newRoom }) => {
    const [roomTypes, setRoomTypes] = useState([""]);
    const [showNewRoomTypesInput, setShowNewRoomTypesInput] = useState(false);
    const [newRoomType, setNewRoomType] = useState("");

    useEffect(() => {
        getRoomTypes().then((data) => {
            setRoomTypes(data);
        })
    }, []);
   
    const handleNewRoomTypeInputChange = (e) => {
        setNewRoomType(e.target.value);
    }

    const handleAddNewRoomTypeChange = () => {
        if(newRoomType!== "") {
            setRoomTypes([...roomTypes, newRoomType])  
            setNewRoomType("");
            setShowNewRoomTypesInput(false);
        }
    }

    return (
        <>
        
        {roomTypes.length > 0 && (
            <div>
                <select
                id="roomType"
                name="roomType"
                value={newRoom.roomTypes}
                onChange={(e) => {
                    if(e.target.value === "Add New"){
                        setShowNewRoomTypesInput(true);
                    }
                    else{
                        handleNewRoomInputChange(e);
                    }
                }}>
                    <option value="">Select Room Type</option>
                    <option value={"Add New"}>Add New</option>
                    {roomTypes.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                            </option>
                    ))}
                </select>
                {showNewRoomTypesInput && (
                    <div className='input-group mt-2'>
                        <input
                          className="form-control"
                          type="text" 
                          onChange={handleNewRoomTypeInputChange} 
                          placeholder="Enter new room type"
                          />
                          <button
                           className="btn btn-hotel" 
                           type='button' 
                           onClick={handleAddNewRoomTypeChange}>
                            Add
                          </button>
                    </div>
                )}

            </div>
        )}
        
        </>
    );
};

export default RoomTypeSelector;