package com.project.estateapi.mapper;

import com.project.estateapi.model.Estate;
import com.project.estateapi.rest.dto.CreateEstateRequest;
import com.project.estateapi.rest.dto.EstateDto;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;

@Service
public class EstateMapperImpl implements EstateMapper {

    @Override
    public Estate toEstate(CreateEstateRequest createEstateRequest) {
        if (createEstateRequest == null) {
            return null;
        }
        return new Estate(createEstateRequest.getTitle(), createEstateRequest.getPoster(), createEstateRequest.getDescription(), createEstateRequest.getContact(), createEstateRequest.getPrice(), createEstateRequest.getAddress());
    }

    @Override
    public EstateDto toEstateDto(Estate estate) {
        if (estate == null) {
            return null;
        }
        return new EstateDto(estate.getId(), estate.getTitle(), estate.getPoster(), estate.getDescription(), estate.getContact(), estate.getPrice(), estate.getAddress(), DateTimeFormatter.ISO_OFFSET_DATE_TIME.format(estate.getCreatedAt()));
    }
}
