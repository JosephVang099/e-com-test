// import { ShoppingCartOutlined } from '@mui/icons-material';
// import { Badge } from '@mui/material';
// import React from 'react'
// import { Link } from 'react-router-dom';
// import styled from 'styled-components'

// const Container = styled.div`
//     height: 80px;
//     background-color: #fcf1ed;
// `
// const Wrapper = styled.div`
//     padding: 10px 20px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// `;
// const Left = styled.div`
//     flex: 1;
//     display: flex;
//     align-items: center;
// `;
// const Center = styled.div`
//     flex: 1;
//     text-align: center;
// `;
// const Logo = styled.h1`
//     font-weight: bold;
// `;
// const Right = styled.div`
//     flex: 1;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
// `;
// const MenuItem = styled.div`
//     font-size: 14px;
//     cursor: pointer;
//     margin-left: 25px;
// `;



// const Navbar = () => {
//   return (
//     <Container>
//         <Wrapper>
//             <Left>
//             </Left>
//             <Center>
//                 <Logo>AZN BUZZIN ~_~</Logo>
//             </Center>
//             <Right>
//                 <MenuItem component={Link} to="/shop">SHOP</MenuItem>
//                 <MenuItem component={Link} to="/contact">CONTACT US</MenuItem>
//                 <MenuItem component={Link} to="/cart">
//                 <Badge badgeContent={0} color="primary">
//                     <ShoppingCartOutlined color="action" />
//                 </Badge>
//                 </MenuItem>
//             </Right>
//         </Wrapper>
//     </Container>
//   )
// }

// export default Navbar;



import React from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";


const Navbar = () => {
  return (
    <div className="navbar">
    <div className="links">
        <Link to="/" className='title'>AZN BUZZIN ~_~</Link>
        <Link to="/shop" aria-label='Leads to the product site'> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
            <ShoppingCart size={32} />
        </Link>
    </div>
  </div>
);
};
export default Navbar;