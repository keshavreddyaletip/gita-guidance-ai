import { useEffect, useState } from "react";

export default function useFavorites() {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {

    // Firebase later

  }, []);

  return {

    favorites,

  };

}