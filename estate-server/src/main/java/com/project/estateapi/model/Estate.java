package com.project.estateapi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.ZonedDateTime;

@Data
@NoArgsConstructor
@Entity
@Table(name = "estates")
public class Estate {

    @Id
    private String id;

    private String title;
    private String poster;
    private String description;
    private String contact;
    private int price;
    private String address;

    private ZonedDateTime createdAt;

    public Estate(String title, String poster, String description, String contact, int price, String address) {
        this.title = title;
        this.poster = poster;
        this.description = description;
        this.contact = contact;
        this.price = price;
        this.address = address;
    }

    @PrePersist
    public void onPrePersist() {
        createdAt = ZonedDateTime.now();
    }
}
