import React from "react";
import '../App.css'
import {kiemTraTaiKhoan , dangNhap , dangXuat } from '../server/server'

export class Bai3Class extends React.Component{

    constructor(props){
        super(props)
        this.inputEmail= React.createRef();
        this.inputMatKhau= React.createRef();
        this.state={
        taiKhoanHienTai:{
            email:"Chưa đăng nhập",
            matKhau:""
        },
        noiDungloi:"ádfsadf",
        hienLoi:false,

                
        }
        
    }

    checkDN=()=>{
        this.setState({
            taiKhoanHienTai:kiemTraTaiKhoan()
        })
    }

    componentDidMount(){
        this.checkDN()
    }

    xuLyDangNhap=()=>{
        
        const email= this.inputEmail.current?.value;
        const matKhau= this.inputMatKhau.current?.value;
        const req= dangNhap(email,matKhau);
        if(req==="tc"){
            this.checkDN();
            this.setState({
                hienLoi:false,
                noiDungloi:""
            })
        }else{
            this.setState({
                hienLoi:true,
                noiDungloi:req
            })
        }

    }
    xuLyDangXuat=()=>{
        dangXuat();
        this.checkDN();
    }



    render(){
        return<>
        <div className="card">
            <div className="card-body">
                tên tài khoản hiện tại : <strong>{this.state.taiKhoanHienTai?.email}</strong>.
                
            </div>
        </div>
        <div className="Bai3Class_boxDN" >
            
           <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">email</label>
  <input ref={this.inputEmail} type="text" class="form-control" id="formGroupExampleInput" placeholder="email của bạn"/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Mật khẩu</label>
  <input ref={this.inputMatKhau} type="password" class="form-control" id="formGroupExampleInput2" placeholder="nhập mật khẩu của bạn"/>
</div>
<div className="Bai3Class_boxButton">
        <button
onClick={()=>{
    this.xuLyDangNhap();
}}
className="btn btn-primary " >Đăng nhập</button>
<button
onClick={()=>{
    this.xuLyDangXuat()
}}
className="btn btn-danger" >Đăng xuất</button>
</div>

  {
    this.state.hienLoi && <p show={this.state.hienLoi} className="Bai3Class_baoLoi" >{this.state.noiDungloi}</p>
  }
  

        </div>
        
                
        </>
    }
}