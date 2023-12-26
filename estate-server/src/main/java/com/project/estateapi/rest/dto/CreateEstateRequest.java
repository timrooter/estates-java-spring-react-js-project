package com.project.estateapi.rest.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CreateEstateRequest {

    @Schema(example = "Twister")
    @NotBlank
    private String title;

    @Schema(example = "https://m.media-amazon.com/images/M/MV5BODExYTM0MzEtZGY2Yy00N2ExLTkwZjItNGYzYTRmMWZlOGEzXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg")
    private String poster;

    @Schema(example = "Двухкомнатная квартира в центре Алматы")
    private String description;

    @Schema(example = "7001808080")
    private String contact;

    @Schema(example = "500000")
    @Min(0)
    private int price;

    @Schema(example = "Алматы, Кулжабаева 88б")
    private String address;

}
