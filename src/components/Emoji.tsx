import loved from "../assets/loved.png";
import shocked from "../assets/shocked.png";
import verified from "../assets/verified.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: shocked, alt: "shocked" },
    4: { src: verified, alt: "verified" },
    5: { src: loved, alt: "loved" },
  };

  return <Image {...emojiMap[rating]} boxSize="25px" marginTop={1} />;
};

export default Emoji;
