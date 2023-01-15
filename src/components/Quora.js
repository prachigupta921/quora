import React, { useEffect, useState } from "react";
import "../css/Quora.css"
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Button, Input } from "@material-ui/core";
import { ExpandMore, Link } from "@material-ui/icons";
import Modal from "react-modal";
import base from "../air/base";
import axios from "axios";

const Quora=()=>{

    const [IsmodalOpen, setIsModalOpen] = useState(false);
    const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  

    const handleQuestion = (e) => {
        e.preventDefault();

        console.log({input,inputUrl},"ii")
        //let data={input,inputUrl}
        let data=  {
          "fields": {
            "Name": input,
            "description":inputUrl
          }
        }
        console.log(data,"ou")

        fetch("https://api.airtable.com/v0/appI4XiGvLi3wuO6x/People",{
            method:"POST",
            headers:{
                //"Accept":"application/json",
                "Authorization":"Bearer keyP6jfRgJBXZyqIz",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then((res)=>{
            //console.log(res,"res")
            res.json().then((result)=>{
                console.log(result,"r");
                if(res.status == 200){
                  alert("success");
                }else alert("not")
            })
        })
        setIsModalOpen(false);
        setInput("");
        setInputUrl("");

      };

      
    return(
        <>
        <div className="qHeader">

      <div className="qHeader__icons">
        <div className="active qHeader__icon">
          <HomeIcon />
        </div>
        <div className="qHeader__icon">
          <FeaturedPlayListOutlinedIcon />
        </div>
        <div className="qHeader__icon">
          <AssignmentTurnedInOutlinedIcon />
        </div>
        <div className="qHeader__icon">
          <PeopleAltOutlinedIcon />
        </div>
        <div className="qHeader__icon">
          <NotificationsOutlinedIcon />
        </div>
      </div>

      <div className="qHeader__Rem">
      <div className="qHeader__input">
        <SearchIcon />
        <input type="text" placeholder="Search Quora" />
      </div>

      <LanguageIcon />
      <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>

      <Modal
          isOpen={IsmodalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
        >
            <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
           
            <div className="modal__scope">
              <PeopleAltOutlinedIcon />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className="modal__Field">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            <div className="modal__fieldLink">
              <Link />
              <input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type="text"
                placeholder="Optional: inclue a link that gives context"
              ></input>
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type="sumbit" onClick={handleQuestion} className="add">
              Add Question
            </button>
          </div>
        
        </Modal>
      </div>

      
        {/* {product.Name}
        {product.description} */}
      
        </div>
        </>
    )
}
export default Quora


