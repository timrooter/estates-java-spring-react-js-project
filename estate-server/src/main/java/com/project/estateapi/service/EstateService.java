package com.project.estateapi.service;

import com.project.estateapi.model.Estate;

import java.util.List;

public interface EstateService {

    List<Estate> getEstates();

    List<Estate> getEstatesContainingText(String text);

    Estate validateAndGetEstate(String id);

    Estate saveEstate(Estate estate);

    void deleteEstate(Estate estate);
}
