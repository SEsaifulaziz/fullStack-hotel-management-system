package com.devsaif.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.joda.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "bookedRoom")
public class BookedRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "check_In")
    private LocalDate checkInDate;

    @Column(name = "check_Out")
    private LocalDate checkOutDate;

    @Column(name = "guest-FullName")
    private String guestFullName;

    @Column(name = "guest_Email")
    private String guestEmail;

    @Column(name = "adults")
    private int numberOfAdults;

    @Column(name = "children")
    private int numberOfChildren;

    @Column(name = "total_guest")
    private int totalNumberOfGuests;

    @Column(name = "confirmation)code")
    private String bookingConfirmationCode;

    @JoinColumn(name = "room_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private Room room;

    public void calculateTotalNumberOfGuests() {
        this.totalNumberOfGuests =
                this.numberOfChildren +
                        this.numberOfAdults;
    }

    public void setNumberOfAdults(int numberOfAdults) {
        this.numberOfAdults = numberOfAdults;
        calculateTotalNumberOfGuests();
    }


    public void setNumberOfChildren(int numberOfChildren) {
        this.numberOfChildren = numberOfChildren;
        calculateTotalNumberOfGuests();
    }


}
