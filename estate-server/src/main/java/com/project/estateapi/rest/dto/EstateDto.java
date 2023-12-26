package com.project.estateapi.rest.dto;

public record EstateDto(String id, String title, String poster, String description, String contact, int price, String address, String createdAt) {
}
