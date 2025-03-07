import { HStack, Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { LuSearch } from "react-icons/lu";
import React from "react";

interface InputSearchProps {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}
const InputSearch = ({ onChangeInput, value }: InputSearchProps) => {
  return (
    <HStack gap="10" width={300}>
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input
          placeholder="Pokémon name search"
          value={value}
          onChange={(e) => onChangeInput(e)}
        />
      </InputGroup>
    </HStack>
  );
};
export default InputSearch;
