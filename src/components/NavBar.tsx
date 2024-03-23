import { Flex, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/480-360-sample.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <Flex padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </Flex>
  );
};

export default NavBar;
