import React, {useEffect, useState} from 'react'

const App = () => {
  const categories = [1, 2, 3, 4, 5]
  const [product, setProduct] = useState({name: '', price: 0, category_id: 1, description: ''})
  console.log(product);
  const HandleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData()
    data.append('product[name]', product.name)
    data.append('product[price]', product.price)
    data.append('product[category_id]', product.category_id)
    data.append('product[description]', product.description)
    data.append('product[product_picture]', e.target.product_picture.files[0])
    
    // useEffect(() => {
      fetch('http://localhost:3000/api/v1/products', {
        method: 'POST',
        body: data,
        headers: {
          // 'Content-Type':'multipart/form-data',
          'Authorization': "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2Nzc2OTA0MzR9.yr0Lg6QLlMBkhjHIstlUcYK9yh99wjhs4hZVwO5aonk"
        },
    })
    .then(resp=>{
      console.log(resp.json())
      setProduct({name: '', price: 0, category_id: 1, description: ''})
    }).
    catch((err) => console.log(err))
  // })
}

  return (
    <div>
      <h1>Product upload</h1>
      <form onSubmit={HandleSubmit} >
        <label className="" htmlFor='name' >Product Name</label>
        <br/>
        <input type ="text" value={product.name} onChange={(e)=>setProduct({...product, [e.target.name]: e.target.value})} placeholder="Product name" name ="name" id="name" on />
        <br/>
        <label className="" htmlFor='price' >Product Price</label>
        <br/>
        <input type ="number" value={product.price} placeholder="Product price" onChange={(e)=>setProduct({...product, [e.target.name]: e.target.value})}  name ="price" id="price"/>
        <br/>
        <label className="" htmlFor='product_picture' >Product Image</label>
        <br/>
        <input type="file" name='product_picture'  id='product_picture' placeholder='product picture'/>
        <br />
        <label className="" htmlFor='description' >Product Description</label>
        <br/>
        <textarea name='description' id='description' value={product.description} onChange={(e)=>setProduct({ ...product, [e.target.name]: e.target.value })}  placeholder='product description'> </textarea>
        <br />
        <select name='category_id' value={product.category_id} onChange={(e)=>setProduct({...product, [e.target.name]: e.target.value})}  id='category_id'>
          {categories.map((id) => <option key={id} value={id}>{id}</option>)}
        </select>
        <br/>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App