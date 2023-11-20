function Drawer({onClose,items = []}){
            return(
                <div className="overlay">
                <div   className="drawer d-flex flex-column ">
                <h2 className="d-flex justify-between mb-30">Корзина <img onClick={onClose} className="cu-p" src="/img/deleteitem.svg" 
                            alt="Close"/></h2>
    

          <div className="items">
                          
              {items.map((obj) =>(
               <div>
                 <div className="cartItem d-flex align-center">
                         
                 <div 
                 style={{backgroundImage:'url(/img/design1.jpg)'}} 
                 className="cartItemImg">
  
                 </div>
           
                    <div className="mr-20 flex">
                       <p className="mb-5">Унисекс дизайн X Ice Cream Hello Summer</p>
                       <b> 3.59$</b>
                    </div>
                    <img 
                    className="removeBtn" 
                    src="/img/deleteitem.svg" 
                    alt="Remove"/>
              </div>
              <div className="cartItem d-flex align-center mb-20 ">
                 
                 <div 
                 style={{backgroundImage:'url(/img/design2.jpg)'}} 
                 className="cartItemImg">
  
                 </div>
           
                    <div className="mr-20 flex">
                       <p className="mb-5">Унисекс дизайн X Beaching Not Teaching</p>
                       <b> 3.59$</b>
                    </div>
                    <img 
                    className="removeBtn" 
                    src="/img/deleteitem.svg" 
                    alt="Remove"/>
              </div>
              </div>
               ) )}    
                     
          </div>
              <div className="cartTotalBlock">
              <ul>
                <li className="d-flex">
                   <span>Итого</span>
                   <div></div>
                   <b>7.20$</b>
                </li>
                <li className="d-flex">
                   <span>Налог 5% :</span>
                   <div></div>
                   <b>0.36$</b>
                </li>
              </ul>
              <button className="greenButton">Оформить заказ <img src="/img/vector.svg" alt="Vector"/></button>
              </div>
              
             </div>
             </div>
            );
            }
            
            
export default Drawer;