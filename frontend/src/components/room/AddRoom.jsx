import React, {useState} from "react";
import {addRoom} from "../utils/ApiFunctions";
import RoomTypeSelector from "../common/RoomTypeSelector";

const AddRoom = () => {
    const [newRoom, setNewRoom] = useState({
        photo : null,
        roomType: null,
        roomPrice: null,
    })

    const [imagePreview, setImagePreview] = useState("");
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleRoomInputChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        if(name === "roomType") {
          if(!isNaN(value)){
              value.parseInt(value)
          }else {
              value =""
          }
        }
        setNewRoom({...newRoom, [name]: value})
    }

    const handleImageChange = (e) => {
        const selectImage = e.target.files[0]
        setNewRoom({...newRoom, photo: selectImage})
        setImagePreview(URL.createObjectURL(selectImage));
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const success = await addRoom(newRoom.photo, newRoom.roomType, newRoom.roomPrice)
            if(success !== undefined){
                setSuccessMessage("A new Room has been added successfully")
                setNewRoom({photo : "", roomType: "", roomPrice: ""})
                setImagePreview("")
                setErrorMessage("")
            }
            else{
                setErrorMessage("Failed to add new room")
            }
        }catch(error){
            setErrorMessage(error.message)
        }

    }

    return (
        <>
            <section className="container, mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <h2 className="mb-5 mb-2"> Add a New Room</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="roomType">
                                    Room Type
                                </label>
                                <div>
                                    <RoomTypeSelector 
                                      handleNewRoomInputChange={handleRoomInputChange}
                                      newRoom={newRoom}
                                     />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="roomPrice">
                                    Room Price
                                </label>
                                <input
                                className="form-control"
                                required={true}
                                id="roomPrice"
                                type="number"
                                name="roomPrice"
                                value={newRoom.roomPrice}
                                onChange={handleRoomInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="photo">
                                    Room Photo
                                </label>
                                <input
                                className="form-control"
                                type="file"
                                required={true}
                                id="photo"
                                name="photo"
                                onChange={handleImageChange}
                                />
                                {imagePreview && (
                                        <img src={imagePreview}
                                             alt="Room Preview photo"
                                             style={{maxWidth: "400px", maxHeight: "400px"}}
                                             className="mb-3"
                                        />
                                )}
                            </div>
                            <div className="d-grid d-flex mt-2">
                                <button className= "btn btn-outline-primary m-lg-5">
                                    Save Room
                                </button>


                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddRoom;