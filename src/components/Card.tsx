import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import StarRating from "./StarRating";
import { useRating } from "../context/RatingContext";

interface CardProps {
  name: string;
  image?: string;
  onHandlerClick?: () => void;
  children?: ReactNode;
  styles?: { [key: string]: number | string };
}
const Card = ({ name, image, onHandlerClick, children, styles }: CardProps) => {
  const { ratings, ratePokemon } = useRating();

  const handleOnRate = (name: string, rating: number) => {
    if (rating > 0) {
      ratePokemon(name, rating);
    }
  };
  return (
    <Flex
      style={styles}
      cursor="pointer"
      w={300}
      flexDir="column"
      minH={500}
      p={2}
      outline="1px solid gray"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontWeight={600}>{name?.toUpperCase()}</Text>
      {image && <Image src={image} w={200} alt={name} />}
      <Flex m={5}>
        <StarRating
          rating={ratings?.[name] || 0}
          handleRate={(rating) => handleOnRate(name, rating)}
        />
      </Flex>
      {onHandlerClick && (
        <Button borderRadius={0} onClick={onHandlerClick} p={1} w="100%">
          SEE MORE
        </Button>
      )}
      {children}
    </Flex>
  );
};

export default Card;
