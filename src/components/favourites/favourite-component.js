import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { FavoritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 9;
`;

export const Favourite = ({restaurant }) => {
    const { favourites, addToFavourites, removeFromFavourites } = useContext(FavoritesContext);
    const isFavourite = favourite.find((r) => r.placeId === restaurant.placeId) 
    return (
        <FavouriteButton>
            <AntDesign name="heart" size={24} color="red" />
        </FavouriteButton>
    )
}