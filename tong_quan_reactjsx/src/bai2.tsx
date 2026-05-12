export default function Bai2() {
  const danhSachSV = [
    {
      hoTen: "Đinh",
      namSinh: 2000,
    },
    {
      hoTen: "Văn",
      namSinh: 2001,
    },
    {
      hoTen: "Ngọc",
      namSinh: 2002,
    },
    {
      hoTen: "Toàn",
      namSinh: 2003,
    },
  ];
  return (
    <div className="boxDanhSachSV">
      <p>Danh sách sinh viên</p>
      <div className="danhSach">
        <table className="bang table table-bordered">
          <thead>
            <tr>
              <th>Họ tên</th>
              <th>Năm sinh</th>
            </tr>
          </thead>
          <tbody>
            {danhSachSV.map((e) => (
              <tr>
                <th>{e.hoTen}</th>
                <th>{e.namSinh}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
