import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';;

export default function XacNhanXoa({
  tat,XacNhanXoa,tenSinhVien
}) {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial'  ,position:"fixed" ,
        background:"rgb(18, 19, 20,0.5)"
      }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xóa</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Bạn có chắc muốn xóa sinh viên {tenSinhVien}.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={()=>{
            tat()
          }} variant="secondary">Hủy</Button>
          <Button
            onClick={()=>{
              XacNhanXoa()
            }}
          variant="danger">Xóa</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
