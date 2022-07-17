import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

export default function Dash() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const navigate=useNavigate()

  const formData = new FormData();

  function handleName(e) {
    setName(e.target.value);
  }

  function handleFile(e) {
    setFile(e.target.files[0]);
  }

  function handleClick(){

    
    formData.append("file", file);
    formData.append("name", name);
    formData.append("id", localStorage.getItem('_id'));

    fetch('http://localhost:5000/create-product',{
      method:'POST',
      headers:{
        // 'content-type':'multipart/form-data'
      },
      body:formData
    })
  }

  const [data,setData]=useState([])
  function handleLoadProducts(){
    fetch('http://localhost:5000/get-products').then(res=>res.json()).then(res=>{
      setData(res.data)
    })
  }

  function handleLogout(){
    localStorage.clear()
    navigate('/') 
  }

  return (
    <div>
      <form>
        <div style={{ padding: 20, marginTop: 20, marginBottom: 10 }}>
          <label>Product Name</label>
          <input type="text" name="name" value={name} onChange={handleName} />
        </div>

        <div style={{ padding: 20, marginBottom: 10 }}>
          <label>Product Name</label>
          <input type="file" onChange={handleFile} />
        </div>
      </form>
      <div style={{ padding: 20, marginBottom: 10 }}>
          <button onClick={handleClick}>CREATE PRODUCT</button>
        </div>

        <div style={{ padding: 20, marginBottom: 10 }}>
          <button onClick={handleLoadProducts}>Load Products</button>
        </div>

        <div style={{ padding: 20, marginBottom: 10 }}>
          <button onClick={handleLogout}>Logout</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Owner</th>
              <th>Product Name</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {
              data?data.map(product=>{
                return(
                  <>
                    <tr>
                    <td>
                        {product.owner.email}
                    </td>

                      <td>
                        {product.name}
                      </td>
                      <td>
                       <img src={product.image} width={100} height={100}/>
                      </td>
                    </tr>
                  </>
                )
              }):''
            }
          </tbody>
        </table>
    </div>
  )
}
