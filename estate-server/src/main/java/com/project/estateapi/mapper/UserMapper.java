package com.project.estateapi.mapper;

import com.project.estateapi.model.User;
import com.project.estateapi.rest.dto.UserDto;

public interface UserMapper {

    UserDto toUserDto(User user);
}