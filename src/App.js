import React from 'react';
import Headers from './components/Header';
import { Outlet } from 'react-router-dom';

/**
 * 
 * Header
 *   - logo
 *   - nav items
 * Body
 *   - search
 *   - RestaurantContainer
 *    - RestaurantCard 
 *      - img
 *      - star ratings
 *      - cuisine
 *      - delivery place
 * Footer
 *    link
 *    address
 *    copyright
 *    contact
 */


const App = () => {
  return (
    <div className='App'>
      <Headers/>
      <Outlet />
    </div>
  )
}

export default App;