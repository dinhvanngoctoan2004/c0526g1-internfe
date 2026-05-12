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
      <p>Danh Sach Sinh Viên</p>
      <div className="danhSach">
        {danhSachSV.map((e) => (
          <p>
            họ tên: {e.hoTen} | Năm Sinh: {e.namSinh}
          </p>
        ))}
      </div>
    </div>
  );
}
