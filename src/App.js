import React from "react";

const App = () => {
  return (
    <>
    <div className='home-page header'>
      <h3>Lambda Eats</h3>
      <button className='home-page home-link'>Home</button>
      <button className='home-page help-link'>Help</button>
    </div>
      
      <div className='home-page intro'>
        <img src='https://img.freepik.com/free-photo/quinoa-mushrooms-lettuce-red-cabbage-spinach-cucumbers-tomatoes-bowl-buddha-dark-top-view_127032-1963.jpg?size=626&ext=jpg'></img>
      <button className='pizzaBtn'>Pizza?</button>
      </div>

      <section className='restaurants'>
        <h4>Food delivered in Gotham city</h4>
        <div className='restaurants-section'>
          <div className='mcdonalds'>
            <img src='https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/images/1_Pub_Desktop_McDeliveryGeneric_HomePage_1168x520.jpg?$Publication_One_Column_Desktop$'></img>
            <h5>McDonalds</h5>
            <p>$ - American - Fast Food - Burgers</p>
            <span>20-35 Mins</span> <span>$5.99 Delivery Fee</span>
          </div>
          <div className='sweetgreen'>
            <img src='https://media.nbclosangeles.com/2019/09/sweetgreengreensday.jpg?quality=85&strip=all&resize=850%2C478'></img>
            <h5>Sweet Green</h5>
            <p>$ - Healthy - Salads</p>
            <span>30-45 Mins</span> <span>$4.99 Delivery Fee</span>
          </div>
          <div className='starbucks'>
            <img src='https://cdn.vox-cdn.com/thumbor/bSoWzne8VZvz8tavhebsL7DNik0=/0x0:5860x4008/1200x800/filters:focal(3243x1967:4179x2903)/cdn.vox-cdn.com/uploads/chorus_image/image/67132574/shutterstock_1410002591.0.jpg'></img>
            <h5>Starbucks</h5>
            <p>$ - Cafe - Coffee & Tea - Breakfast & Brunch</p>
            <span>10-20 Mins</span> <span>$3.99 Delivery Fee</span>
          </div>
        </div>
      </section>
    </>
  );
};
export default App;
