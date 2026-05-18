import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';;

export default function ConfirmDeletion({
  close,confirm,nameStudent
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
          <Modal.Title>confirm deletion</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you want to delete the student? {nameStudent}.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={()=>{
            close()
          }} variant="secondary">Hủy</Button>
          <Button
            onClick={()=>{
              confirm()
            }}
          variant="danger">Delete</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
