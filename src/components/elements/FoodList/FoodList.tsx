import { HStack } from "@chakra-ui/react";
import Image from "next/image";
import Counter from "./Counter";

const FoodList = ({i = '', f = '', p = 0}) => {
    
    return (
        <HStack>
        <Image
            src = {i}
            height='75%'
            width= '75%'
            alt="food1"
        />
        <h2>{f}</h2>
        <p>----------------</p>
        <h2>${p}</h2>
        <Counter/>
        </HStack>
    );
  };
  
export default FoodList;