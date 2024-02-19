import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import  {FaWindows, FaPlaystation,FaXbox, FaApple,FaLinux } from "react-icons/fa";
import { IconType } from "react-icons";
interface Props {
    platforms:  Platform[];
}

const PlatformIcons = ({platforms}: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        apple: FaApple,
        linux: FaLinux
    };

 
  return (
    <HStack margin={1}>
    {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} />
      ))}
    </HStack>
  )
}

export default PlatformIcons