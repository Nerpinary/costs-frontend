import {Container, Heading, Image} from "@chakra-ui/react";

const UserInfo = () => {
    const avatar = '/images/MS.webp'
    const username = 'Максим Ситников'

    return (
        <Container
            display='flex'
            flexDir='row'
            w='100%'
            gap={3}
            alignItems='center'
        >
            <Image
                src={avatar}
                maxWidth='100px'
                borderRadius="full"
            />
            <Heading as='h2' fontSize='3xl'>{username}</Heading>
        </Container>
    )
}

export default UserInfo