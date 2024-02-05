import React, { useState } from 'react'
import { MenuList } from '../Pizzaweb/helpers/PizzaMenuList'
import MenuItem from '../Pizzaweb/helpers/PizzaMenuItem'
import "../../styles/pizzaCss/PizzaMenu.css"
import { Link } from 'react-router-dom'
import PizzaNav from './PizzaNav'
import { useEffect } from 'react'

function Menu() {

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant'
  });

  const [filteredFood, setFilteredFood] = useState(MenuList);

  const handleFilter = (filterType) => {

    let changeFilter = document.querySelectorAll('.pizza-filter'),j;
    for(j=0;j<changeFilter.length;j++){
      changeFilter[j].classList.remove('active')
    }

    document.getElementById(filterType).classList.add('active')
    

    if(filterType != 'all'){
      const filtered = MenuList.filter(MenuList => MenuList.type === filterType);
      setFilteredFood(filtered);
    }
    else{
      setFilteredFood([...MenuList]);
    }
  };
  
  return (<>
  <PizzaNav/>
    <div className='pizza-menu'>
        <h1 className='menuTitle'>Our Menu</h1>

        <div className='pizza-filter-buttons'>
          <button className='pizza-filter active' id='all' onClick={() => handleFilter('all')}>All</button>
          <button className='pizza-filter' id='pizza' onClick={() => handleFilter('pizza')}>Pizza</button>
          <button className='pizza-filter' id='side' onClick={() => handleFilter('side')}>Sides</button>
        </div>

        <div className='menuList'>
            {filteredFood.map((menuItem, key) => {
              return (
                <MenuItem 
                key={key} 
                data={menuItem} />
                )})}
        </div>

        <Link to='/pizzaweb/cart'>
        <button className='floatBttn2'>
        <i className="fa-sharp fa-solid fa-cart-shopping"></i>
        </button>
        </Link>
    </div>
   </>
  )
}

export default Menu