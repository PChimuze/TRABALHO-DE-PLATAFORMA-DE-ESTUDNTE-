import { Header } from "../components/header";
import styled, { keyframes } from 'styled-components';
import video from '../../public/video.mp4'
import { Footer } from "./footer";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const StyledMain = styled.main`
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; 
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; 
  z-index: -1; 
`;

const Content = styled.div`
  text-align: center;
  color: white; 
  animation: ${fadeIn} 1s ease-out; 
`;

export const Home = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <VideoBackground autoPlay muted loop>
          <source src={video} type="video/mp4" />
          {}
        </VideoBackground>
        <Content>
          <h1 className="text-4xl font-bold mb-4">Bem vindo à plataforma do estudante</h1>
          <p className="text-lg">Aqui você encontra recursos para estudantes.</p>
        </Content>
      </StyledMain>
      <Footer />
    </>
  );
};
