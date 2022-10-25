import './App.css';

function Header(props) {
    return (
      <>
        <div className='flex shopping-card'>
          <div onClick={()=> props.handleShow(false)}><b>Shopping Cart App</b></div>
          <div onClick={()=> props.handleShow(true)}>
              <b>Cart</b>
              <sup> {props.count} </sup>
          </div>
        </div>
       </>
  
    );
  }
  
  export default Header;