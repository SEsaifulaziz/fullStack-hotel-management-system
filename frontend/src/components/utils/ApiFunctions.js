import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:9192"
})

// this function add a new room to the database
export async function addRoom(photo, roomType, roomPrice) {
    const formData = new FormData()
    formData.append("photo", photo)
    formData.append("roomType", roomType)
    formData.append("roomPrice", roomPrice)

    const response = await api.post("/rooms/add/new-room", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    if (response.status === 200) {
        return true;
    } else {
        return false;
    }
}


// this function gets all room types from the database
export async function getRoomTypes() {
    try{
        const response = await api.get("/rooms/room/types");
        return response.data;
    } catch(error){
        throw new Error("Error fetching room types")
    }
}

// this function gets all rooms from the database
export async function getAllRooms(){
    try{
        const response = await api.get("/rooms/room/all-rooms");
        return response.data;
    }
    catch(error){
        throw new Error("Error fetching rooms")
    }

}