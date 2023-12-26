package com.project.estateapi.repository;

import com.project.estateapi.model.Estate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EstateRepository extends JpaRepository<Estate, String> {

    List<Estate> findAllByOrderByTitle();

    List<Estate> findByIdContainingOrTitleContainingIgnoreCaseOrderByTitle(String id, String title);
}
