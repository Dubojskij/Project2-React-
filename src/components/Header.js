function Header(props){
    return(
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
        <img width={70} height={70} src="/img/logo1.png"/>
        <div>
           <h3 className="text-uppercase">Design Shop</h3>
           <p className="opacity-5">Магазин лучших дизайнов!</p>
  
        </div>
        </div>
       <div>
       <ul className="d-flex">
          <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img width={18} height={18} src="/img/card.svg"/>
            <span>7.20$</span>
          </li>
          <li>
        <img width={18} height={18} src="/img/user.svg"/>
        </li>
        </ul>
        
       </div>
       </header>
    );
    }
    
    
    export default Header;