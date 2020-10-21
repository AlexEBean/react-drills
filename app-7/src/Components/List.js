import React, {Component} from 'react'
import Todo from "./Todo"

const List = (props) => {
    const list = props.toDoList.map((e, i) => {
        return <Todo key = {i} task = {e}/>
    })
    return <div>{list}</div>
}

export default List