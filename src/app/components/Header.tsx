'use client'
import { Box,  Button,  Container, Flex, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../public/panaverse80_80.jpg'

export default function Header() {
  return (
    <Box boxShadow='lg'>
        <Container maxW={1400}>
            <SimpleGrid templateColumns='repeat(3, 1fr)'> 
                <Box>
                    <Image src={logo} alt='panaverse-logo' ></Image>
                </Box>
                <Flex placeItems='center' color='black' fontSize={18} fontWeight='semibold' fontStyle='italic' gap={10}>
                  <Link href=''>Home </Link>
                  <Link href=''>Syllabus </Link>
                  <Link href=''>Explore </Link>
                  <Link href=''>About </Link>
                  <Link href=''>Contact </Link>
                </Flex>
                <Box>
                  <Button mt='12px' size='lg' colorScheme='pink' float='right'>Apply</Button>
                </Box>
            </SimpleGrid>
        </Container>
    </Box>
  )
}
