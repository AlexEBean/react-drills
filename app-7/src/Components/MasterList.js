import React from 'react';
import ToDo from "./ToDo"


const MasterList = (props) => {

      return (
        <div>
          {props.toDoList.map((element, index, array) => {
             return <ToDo item = {element} key = {index}/>
          }
        )}
        </div>

      )
    
}
  


export default MasterList