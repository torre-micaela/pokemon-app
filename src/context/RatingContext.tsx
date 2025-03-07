import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type RatingsType = {
  [key: string]: number; 
};

interface RatingContextType {
  ratings?: RatingsType;
  ratePokemon: (name: string, rating: number) => void;
}

const RatingContext = createContext<RatingContextType | undefined>(undefined);

interface RatingProviderProps {
  children: ReactNode;
}

export const RatingProvider = ({ children }: RatingProviderProps) => {
  const [ratings, setRatings] = useState<RatingsType>();

  useEffect(() => {
    const storedRatings = localStorage.getItem("pokemonRatings");
    if (storedRatings) {
      setRatings(JSON.parse(storedRatings));
    }
  }, []);

  const ratePokemon = (name: string, rating: number) => {
    const cloneRatings = {...ratings,  [name]: rating}

    setRatings(cloneRatings)
    localStorage.setItem("pokemonRatings", JSON.stringify(cloneRatings));
  };


  return (
    <RatingContext.Provider value={{ ratings, ratePokemon }}>
      {children}
    </RatingContext.Provider>
  );
};

export const useRating = (): RatingContextType => {
  const context = useContext(RatingContext);
  if (!context) {
    throw new Error("useRating debe usarse dentro de un RatingProvider");
  }
  return context;
};
