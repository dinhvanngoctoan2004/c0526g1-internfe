import React from "react";
import { layData } from "../server/server.js";

class Bai1Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      danhSachSV: [],
    };
  }

  componentDidMount() {
    this.setState({
      danhSachSV: [...layData()],
    });
  }

  render() {
    return (
      <>
        <table style={{
          width:"500px",
          
        }} className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {this.state.danhSachSV?.map((e,index)=>(
              <tr>
              <th scope="row">{index+1}</th>
              <td>{e.hoTen}</td>
              <td>{e.namSinh}</td>
              <td>{e.gioiTinh}</td>
            </tr>
            ) )}
          </tbody>
        </table>
      </>
    );
  }
}
export default Bai1Class;
