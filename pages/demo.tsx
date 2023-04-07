import { Default } from 'components/layouts/Default';
import Image from 'next/image';
import type { NextPage } from 'next';
import { Flex, Heading, HStack, VStack,} from '@chakra-ui/react';
import { FoodList } from 'components/elements/FoodList';


const EventCatPage: NextPage = () =>{
    const restaurantName = 'Demo Restaurant';
    const orderItems = [
    { id: 1, name: 'Menu 1', price: 8.99, num: 0},
    { id: 2, name: 'Menu 2', price: 7.99, num: 0 },
    { id: 3, name: 'Menu 3', price: 7.99, num: 0 },
    { id: 4, name: 'Menu 4', price: 6.49, num: 0 }
    ];
    return(
        <Default pageName= {restaurantName}>
            <Heading size="lg" marginBottom={6}>
                Restaurant: Demo Restaurant
            </Heading>
            <HStack>
                <VStack>
                <Image
                    src={'/demo_restaurant.jpeg'}
                    height='400%'
                    width= '400%'
                    alt="demoRestaurant"
                    />
                    <br></br>
                    <p>Rate: 4.8 / 5</p>
                </VStack>
                <VStack>
                <Flex direction={'column'} alignItems={'stretch'} justifyContent={'space-around'}>
                    <FoodList i = '/food1.jpeg' f = {orderItems[0].name} p = {orderItems[0].price}></FoodList>
                    <FoodList i = '/food2.jpeg' f = {orderItems[1].name} p = {orderItems[1].price}></FoodList>
                    <FoodList i = '/food3.jpeg' f = {orderItems[2].name} p = {orderItems[2].price}></FoodList>
                    <FoodList i = '/food4.jpeg' f = {orderItems[3].name} p = {orderItems[3].price}></FoodList>
                </Flex>
                <a href="./nftMinter">
                    <button className='btn btn-warning'>Go to shopping cart</button>
                </a>
                </VStack>
            </HStack>
        </Default>
    )
}

export default EventCatPage
