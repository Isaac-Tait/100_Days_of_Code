/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/

import React from "react"
import productsData from "./vschoolProducts"
import Product from "./Product"

function App() {
    const gear = productsData.map(gear => <Product key={gear.id} name={gear.name} price={gear.price} description={gear.description} />)
  return (
    <div>
        {gear}
    </div>
  )
}

export default App