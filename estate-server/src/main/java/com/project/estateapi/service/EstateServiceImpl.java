package com.project.estateapi.service;

import com.project.estateapi.exception.EstateNotFoundException;
import com.project.estateapi.model.Estate;
import com.project.estateapi.repository.EstateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class EstateServiceImpl implements EstateService {

    private final EstateRepository estateRepository;

    @Override
    public List<Estate> getEstates() {
        return estateRepository.findAllByOrderByTitle();
    }

    @Override
    public List<Estate> getEstatesContainingText(String text) {
        return estateRepository.findByIdContainingOrTitleContainingIgnoreCaseOrderByTitle(text, text);
    }

    @Override
    public Estate validateAndGetEstate(String id) {
        return estateRepository.findById(id)
                .orElseThrow(() -> new EstateNotFoundException(String.format("Estate with id %s not found", id)));
    }

    @Override
    public Estate saveEstate(Estate estate) {
        return estateRepository.save(estate);
    }

    @Override
    public void deleteEstate(Estate estate) {
        estateRepository.delete(estate);
    }
}
