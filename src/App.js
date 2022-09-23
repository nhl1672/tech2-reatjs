import logo from './logo.svg';
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './Components/Footer';
import Content from './Components/Content';
import Header from './Components/Header';
import MemberInfo from './Components/MemberInfo';
import Products from './Components/Products';
import ProductItem from './Components/ProductItem';
import Counter from './Components/Counter';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
// const product = {
//   id : 1,
//   name : "IP 14",
//   price: 1500,
//   status:false,
//   createAt: "16-09-2022"
// }
// const getProduct = ({id, name, price, status, createAt}) =>{
//   return (
//     <>
//     <p>ID: {id}</p>
//     <p>Name: {name}</p>
//     <p>Price: {price}</p>
//     <p>Status: {status?'Active':'Inactive'}</p>
//     <p>Created At: {createAt}</p>
//     </>
//   );
  // Toán tử 3 ngôi 
//   return (
//     <>
//       {
//         status 
//         ? 
//         <>
//           <p>ID: {id}</p>
//           <p>Name: {name}</p>
//           <p>Price: {price}</p>
//           <p>Status: Active</p>
//           <p>Created At: {createAt}</p>
//         </>
//         : 
//         null
//       }
//     </>
//   );
// }
// return (
//   <>
//     <h2>Thông tin sản phẩm</h2>
//     {getProduct(product)}
//   </>
// )
// const products = [
  // {
  //   id: 1,
  //   name: "San pham 1",
  //   price: 1500,
  //   status: true
  // },
  // {
  //   id: 2,
  //   name: "San pham 2",
  //   price: 1500,
  //   status: true
  // },
  // {
  //   id: 3,
  //   name: "San pham 3",
  //   price: 1500,
  //   status: true
  // },
  // {
  //   id: 4,
  //   name: "San pham 4",
  //   price: 1500,
  //   status: false
  // },
  // {
  //   id: 5,
  //   name: "San pham 5",
  //   price: 1500,
  //   status: false
  // }
// ]
// let productList;
// if(products.length){
//   productList = products.map(({id, name, price, status}, index) => {
//     return(
//       <tr key={id}>
//       <td>{index + 1}</td>
//       <td>{name}</td>
//       <td>{price.toLocaleString()}</td>
//       <td>
//         {status ? (
//           <button className="btn btn-success">Active</button>
//         ) : (
//           <button className='btn btn-warning'>Inactive</button>
//         )}
//       </td>
//       </tr>
//     )
// })}
// else{
//   productList = 
//       <tr>
//         <td colSpan={4}><div className="alert alert-info text-center">Khong co san pham nao</div></td>
//       </tr>
//   }
  


// const productFor = [];
// products.forEach(({id, name, price, status}) => {
//   const productJsx = 
//   <React.Fragment key={id}>
//   <p>ID: {id}</p>
//   <p>Name: {name}</p>
//   <p>Price: {price}</p>
//   <p>Status: {status?'Active':'Inactive'}</p>
//   </React.Fragment>

//   productFor.push(productJsx)
// });
// return(
//   <>
//   <div className='container'>
//     <h2 className='tex-center'>Danh sach san pham</h2>
//     <table className='table table-bordered'>
//       <thead>
//         <tr>
//           <th with="5%">STT</th>
//           <th>Name</th>
//           <th>Price</th>
//           <th>Status</th>
//         </tr>
//       </thead>
//       <tbody>{productList}</tbody>
//     </table>
//   </div>
//   </>
// )
const content = {
  title: 'Bai viet 1',
  detail: ' Noi dung 1',
  author: 'Hai Long'
}
const member = {
  info:{
    name:'Long',
    email:'nhlong1672@gmail.com',
    phone:'0347747040'
  },
  images:[
    {
      link: 'https://picsum.photos/500/300',
      width: 400,
      height: 300
    },
    {
      link: 'https://picsum.photos/400/300',
      width: 400,
      height: 400
    },
    {
      link: 'https://picsum.photos/500/200',
      width: 500,
      height: 300,
      alt:'tét'
    }
  ],
  post:[
    {
      title:'Bai viet 1',
      content:'Noi dung 1'
    },
    {
      title:'Bai viet 2',
      content:'Noi dung 1'
    },
    {
      title:'Bai viet 3',
      content:'Noi dung 1'
    }
  ]
}
const {info, images} = member;
const product = ["sản phẩm 1","sản phẩm 1","sản phẩm 1"];
return(
  <>
{/* <Header title="Header 01" hotline="0347737040"></Header>
<Content title={content.title} detail={content.detail} author={content.author}></Content>
<MemberInfo {...member}/>
<Products>
  {Products.map((product, index) =>{
  <ProductItem key={index} name={product}/>
})}
</Products> */}
<Counter start={1} step={1}></Counter>
</> 
)}

export default App;
