package com.project.estateapi.mapper;

import com.project.estateapi.model.Estate;
import com.project.estateapi.rest.dto.CreateEstateRequest;
import com.project.estateapi.rest.dto.EstateDto;

public interface EstateMapper {

    Estate toEstate(CreateEstateRequest createEstateRequest);

    EstateDto toEstateDto(Estate estate);
}