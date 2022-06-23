import { useEffect, useState } from 'react';
import Contents from './components/contents';
import RelatedContents from './components/relatedContents';
import Header from './components/header';
import ShareButton from './components/buttons/shareButton';
import CommentBox from './components/commentBox';
import './App.css';
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure, ModalHeader, Text, Image, useMediaQuery } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Logo from './img/Logo.png'

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

const App = () => {
  const axios = require('axios');
  const [state, setState] = useState();
  const [post, setPost] = useState(false);
  // const [media, setMedia] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLargerThan550] = useMediaQuery('(min-width: 550px)')
  // const [display, setDisplay] = useState('block');

  let count = 0;

  useEffect(() => {
    axios.get('http://localhost:8000/trends')
      .then(res => {
        setState(res.data);
        setPost(true)
      })
  }, []);

  // useEffect(() => {
  //   console.log(window)
  //   if (window.innerWidth < 550) {
  //     setMedia(true)
  //   }
  // }, [window]);

  useEffect(() => {
    if (state) {
      const intersectionObserver = new IntersectionObserver(ShowModal)
      intersectionObserver.observe(document.querySelector('#modalshow'));
    }
  }, [state]);

  async function ShowModal() {
    count++ // increment count

    if (count > 2) {
      window.scrollTo(0, 0)

      // setTimeout(onOpen, 1000)
      await delay(1000);

      onOpen()
      // setDisplay('none')
    }
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
      setOpacity(0.4);
    }
    if (window.scrollY < 150) {
      setOpacity(1);
    }
  });

  return (
    <>

      <Header opacity={opacity} media={isLargerThan550} />
      <Contents data={state} post={post} media={isLargerThan550} />
      {/* <RelatedContents data={state} post={post} />; */}
      <Box h={'300px'} />

      {state &&
        <Box id={'modalshow'} h={'1px'}>
          {/* <Box id={'modalshow'} h={'1px'} display={display}> */}
        </Box>}


      <Modal onClose={onClose} size={'lg'} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>E aí, o quê achou?</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign={'center'}>
            <CommentBox />
            <Text className='lato-bold' marginTop={'25px'} fontSize={'22px'}>
              Compartihe!
            </Text>
            <Box m={'15px 0'} display={'flex'} justifyContent={"space-around"}>
              <Button _hover={{ opacity: "0.4" }}>
                <FaTwitter size={"35px"} />
              </Button>
              <Button _hover={{ opacity: "0.4" }}>
                <FaFacebook size={"35px"} />
              </Button>
              <Button _hover={{ opacity: "0.4" }}>
                <FaWhatsapp size={"35px"} />
              </Button>
            </Box>

            <Text className='lato-bold' marginTop={'25px'} fontSize={'22px'}>
              Veja mais conteúdos
            </Text>

            <RelatedContents data={state} post={post} />
          </ModalBody>
          <ModalFooter>
            <Text>
              <Image w={'95px'} src={Logo} />
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  );
}

export default App;
