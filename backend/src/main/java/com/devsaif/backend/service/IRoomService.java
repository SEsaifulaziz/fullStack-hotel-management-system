package com.devsaif.backend.service;

import com.devsaif.backend.model.Room;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.List;
import java.util.function.BiFunction;


public interface IRoomService {

    Room addNewRoom(MultipartFile photo, String roomType, BigDecimal roomPrice) throws SQLException, IOException;
    List<Room> getAllRooms();
    List<String> getAllRoomTypes();

    byte[] getRoomPhotoByRoomId(Long roomId) throws SQLException;
}
