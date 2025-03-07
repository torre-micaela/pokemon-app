import { RatingGroup, Box } from "@chakra-ui/react";

interface StarRatingProps {
  handleRate: (value: number) => void;
  rating: number;
}

const StarRating = ({ handleRate, rating = 0 }: StarRatingProps) => {
  return (
    <RatingGroup.Root
      count={5}
      value={rating} // Asigna el valor actual
      onValueChange={(details) => handleRate(details.value)} // Extrae `value`
      size="lg"
    >
      <RatingGroup.Control>
        {Array.from({ length: 5 }, (_, index) => (
          <RatingGroup.Item key={index} index={index + 1}>
            <Box
              as="span"
              color={index < rating ? "yellow.400" : "gray.300"}
              fontSize="2xl"
            >
              ★
            </Box>
          </RatingGroup.Item>
        ))}
      </RatingGroup.Control>
    </RatingGroup.Root>
  );
};

export default StarRating;
