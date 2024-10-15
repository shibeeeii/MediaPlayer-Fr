import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryApi } from '../services/allAPi';
import { deleteVideosApi } from '../services/allAPi';


function Videocard({video, setDeleteVideoStatus,isPresent}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{
    setShow(true);
    const time = new Date()
    console.log(time);
    let formatedDate = new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
    console.log(formatedDate);
    
    

    const reqBody ={
      Caption:video?.caption,
      url:video?.embededLink,
      time:formatedDate



    }

    const result = await addVideoHistoryApi(reqBody)
    console.log(result);
    
    

  } 

  const handleDelete = async(id)=>{
    const result = await deleteVideosApi(id)
    console.log(result);
    if (result.status>=200 && result.status<300){
      setDeleteVideoStatus(result.data)
    }
  }

  const videoDrag = (e, video)=>{
    console.log(video);
    e.dataTransfer.setData("videoDetails",JSON.stringify(video))
    
  }
  return (
    <>
        <Card className='mt-5' style={{ width: '100%' }} draggable onDrag={(e)=>videoDrag(e ,video)}>
      { !isPresent && <Card.Img onClick={handleShow} variant="top" src={video?.ImageUrl} className='w-100' height={'300px'} />}
      <Card.Body className='d-flex justify-content-between'>
        <Card.Title>{video?.caption}</Card.Title>
        
        { !isPresent && <Button onClick={()=>handleDelete(video?.id)}  variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>}  
        {/* callback function because arguiment */}
      </Card.Body>
    </Card>


<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="393" src={`${video?.embededLink}?autoplay=1`} title="Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Videocard