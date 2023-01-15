import React, { useState, useEffect } from "react";
import "../css/Quorabox.css"

const QuoraBox = () => {

  const [product, setproduct] = useState([])

  useEffect(() => {
    fetchfun();
  }, [])

  const fetchfun = () => {
    fetch("https://api.airtable.com/v0/appI4XiGvLi3wuO6x/People?api_key=keyP6jfRgJBXZyqIz", {
      headers: {
        //"Accept":"application/json",
        "Authorization": "Bearer keyP6jfRgJBXZyqIz"
        // "Content-Type":"application/json"
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("res error");
        }
      })
      .then((data) => {
        console.log(data.records, "data");
        setproduct(data.records);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="quoraBox">
        {
          product.map((item) => {
            return (
              <>


                <h5>{Object.keys(item.fields).map((i) => {
                  console.log(item.fields[i], "re")
                  return (
                    <>
                      <div className="quoraBox__info">
                        <h4>{item.fields[i]}</h4>
                      </div>
                     
                    </>
                  )
                })}</h5>
               
              </>
            )
          })
        }
      </div>
    </>
  )
}
export default QuoraBox