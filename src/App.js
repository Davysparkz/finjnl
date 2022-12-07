import './App.css';
//import React, {useState} from 'react';
import dayjs from 'dayjs'
//import Datepicker from 'react-tailwindcss-datepicker';

function ProductCategoryRow({category}) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  )
}

function ProductRow({product}) {
  const name = product.stocked ? product.name : 
    <span style={{ color: 'red' }}>
      {product.name}
    </span>

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

function ProductTable({products}) {
  const rows = []  
  let lastCategory = null 

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      )
    }

    rows.push(
      <ProductRow 
        product={product}
        key={product.name} />
    )

    lastCategory = product.category
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )

}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  )
}

function FilterableProductTable({products}) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  )
}

const PRODUCTS = [
  {category: 'Fruits', price: '$1', stocked: true, name: 'Apple'},
  {category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit'},
  {category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit'},
  {category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach'},
  {category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin'},
  {category: 'Vegetables', price: '$1', stocked: true, name: 'Peas'}
]


function App() {
  // return (
  //   <div className="App">
  //     {/* <Calendar year={2022} month={"Dec"}></Calendar> */}
  //   </div>
  // );

 // return (
  //  <div className="App">	
   //   <FilterableProductTable products={PRODUCTS} />
    //</div>
  //)
	return (
		<div className="flex flex-col items-center mt-16">
		<h1 className="text-4xl text-center">
		Tailwind CSS makes styling React components easier!
		</h1>
		<button className="bg-black text-white p-2.5 w-fit mt-9">
		{/* Get Started */}
    {dayjs()}
		</button>

		</div>
	);

}

export default App;
