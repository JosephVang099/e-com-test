import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #023c1b;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bolder;



    @media screen and (min-width: 375px){
    height: 20px;
    font-size: 12px;
    * {
    overflow-x: hidden;
  }
  }
`;

const Announcement = () => {
  return (
    <Container>
      ! ! ! SUPER SOJU DEAL ! ! !
    </Container>
  )
}

export default Announcement;
