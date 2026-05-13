import React, { useRef } from "react";
import '../App.css'
import {LayDanhSachToDoList , themToDoList , xoaToDoList} from '../server/server'

export class Bai2Class extends React.Component{
    

      constructor(props) {
        super(props);
        this.input= React.createRef();
        this.state = {
        toDoList: [],

            };
        }

      componentDidMount() {
        this.setState({
          toDoList: [...LayDanhSachToDoList()],
        });
      }
      them =()=>{
            
            const newdata ={
                noidung:this.input.current?.value
            }
            themToDoList(newdata);
            this.setState({
          toDoList: [...LayDanhSachToDoList()],
        });
        this.input.current.value="";

        }
        xoa=(index)=>{
            xoaToDoList(index);
            this.setState({
          toDoList: [...LayDanhSachToDoList()],
        });
        }
    
    render(){
        
         

        return<>
            <div className="Bai2Class_boxCha" >
                <h2 className="Bai2Class_h2">To do List</h2>
                <div className="Bai2Class_boxIput">
                    <input
                       ref={this.input}
                    className="Bai2Class_input" type="text"/>
                    <button
                        onClick={()=>{
                            this.them()
                        }}
                    className="Bai2Class_button">Thêm</button>
                </div>
                <div className="Bai2Class_boxToDo">
                    {this.state.toDoList?.map((e,index)=>(
                        <div className="Bai2Class_boxTT" >
                        <p className="Bai2Class_p">{e.noidung}</p>
                        <button
                            onClick={()=>{
                                this.xoa(index)
                            }}
                        type="button" class="btn-close" aria-label="Close"></button>
                    </div>
                    ))}
                    
                    
                </div>
                
            </div>
        </>
    }
}