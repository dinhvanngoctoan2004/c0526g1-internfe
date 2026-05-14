
// class componan buổi 3 ngày 13/5
// bài 1
let danhSachSV=[
    {
        
        hoTen:"Toàn",
        namSinh: 2004,
        gioiTinh:'Nam'
    },
    {
        
        hoTen:"Ngọc",
        namSinh: 2003,
        gioiTinh:'Nữ'
    },
    {
    
        hoTen:"Văn",
        namSinh: 2002,
        gioiTinh:'Nam'
    },
    {
      
        hoTen:"Đinh",
        namSinh: 2001,
        gioiTinh:'Nam'
    },
]

export const layData =()=>{
    return [...danhSachSV];
}

// bài 2 //////////////////////////////////////
const toDoList=[{
    noidung:"asdf;lj"
}];
// lấy danh sách
export const LayDanhSachToDoList=()=>{
    console.log("trả về thành công")
    return [...toDoList];
    
}
// thêm toDoList
export const themToDoList=(item)=>{
    toDoList.push(item);
    console.log("thêm thành công")
    console.log(toDoList);
    
}
// xóa toDoList
export const xoaToDoList=(index)=>{
    console.log("xóa thành công");
    
    toDoList.splice(index,1);
}

// bài 3 //////////////////////

const danhSachTaiKhoan=[
    {
        email:"toan",
        matKhau:"123"
    },
    {
        email:"van",
        matKhau:"123456"
    },
]

let taiKhoanHienTai ={
    email:"Chưa đăng nhập",
    matKhau:""
}

export const kiemTraTaiKhoan=()=>{
    console.log("dã kiểm tra tài khoản");
    return taiKhoanHienTai;
}

export const dangNhap =(email, matKhau)=>{
    console.log("dang nhap");
    for(let item of danhSachTaiKhoan){
        
        if(email=== item.email){
            if(matKhau===item.matKhau){
                const data ={
                    email:item.email,
                    matKhau:item.matKhau
                }
                taiKhoanHienTai= data;
                console.log("đăng nhập thành công");
                
                return "tc"
            }
            else {
                console.log("sai mật khẩu");
                
                return "sai mật khẩu"
            }
        }
    }
    console.log("email không tồn tại");
    
    return "email không tồn tại"
}
export const dangXuat=()=>{
    const data ={
        email:"Chưa đăng nhập",
        matKhau:""
    }
    console.log("đã đăng xuất");
    
    taiKhoanHienTai=data;
}

//  buổi 4 hook ///////////////////////////////

// {
//         id:3,
//         hoTen:"Đinh",
//         namSinh: 2001,
//         gioiTinh:'Nam'
//     },

export const loadDanhSachSV=()=>{
    return [...danhSachSV];
}

export const themSinhVien=(id,HoTen,NamSinh,gioiTinh)=>{
    const newData={
        id:id,
        hoTen:HoTen,
        namSinh:NamSinh,
        gioiTinh:gioiTinh
    }
    danhSachSV.push(newData);
    console.log("dã thêm sinh viên");
    
}

export const xoaDanhSachSinhVien=(id)=>{
    console.log("đã vào xóa");
    danhSachSV.splice(id,1);
    
    
}

