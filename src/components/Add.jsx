import { faCloudArrowUp, faFilm} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddVideoApi } from '../services/allAPi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setaddVideoStatus}) {  //de structring because we got props. full object ne avishyam illa so {} use cheyth key edkkm
    const [videoDetails , setVideoDetails] = useState({
      caption:"",
      ImageUrl:"",
      embededLink:""
    })
    console.log(videoDetails);
    
    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false)
      handleCancel()
    };
    const handleShow = () => setShow(true);


    const handleCancel =()=>{
      setVideoDetails({
        caption:"",
        ImageUrl:"",
        embededLink:""
      })

    }

    const handleAdd = async()=>{
      const {caption, ImageUrl, embededLink }=videoDetails

      if(!caption || !ImageUrl || !embededLink){
        toast.info('Please fill the form completely')
      }
      else{

        if(videoDetails.embededLink.startsWith('https://youtu.be/')){
          const embedL =`https://www.youtube.com/embed/${videoDetails.embededLink.slice(17,28)}`
          // setVideoDetails({...videoDetails,embededLink:embedL})
          
  
          const result = await AddVideoApi({...videoDetails,embededLink:embedL})
          console.log(result);
          if(result.status>=200 && result.status<300){
            toast.success('Video Uploaded Succesfully')
            handleClose()
            setaddVideoStatus(result.data)
          }
          else{
            toast.error('Something Went Wrong')
            handleClose()
          }
          
        } else{
          const embedL = `https://www.youtube.com/embed/${videoDetails.embededLink.slice(-11)}`
          // setVideoDetails({...videoDetails,embededLink:embedL})
  
          const result = await AddVideoApi({...videoDetails,embededLink:embedL})
          console.log(result);
          
          if(result.status>=200 && result.status<300){
            toast.success('Video Uploaded Succesfully')
            handleClose()
            setaddVideoStatus(result.data)
          }
          else{
            toast.error('Something Went Wrong')
            handleClose()
          }
        }

      }







    

      

    }
    // const getEmbededLink =(e)=>{
    //   const link = e.target.value
      // if(link.startsWith('https://youtu.be/')){
      //   const embedL =`https://www.youtube.com/embed/${link.slice(17,28)}`
      //   setVideoDetails({...videoDetails,embededLink:embedL})
      // } else{
      //   const embedL = `https://www.youtube.com/embed/${link.slice(-11)}`
      //   setVideoDetails({...videoDetails,embededLink:embedL})
      // }
    // }

    // https://youtu.be/IKpkXzMxTq0?si=c8MjmXytAK3oCwyj
    // "https://www.youtube.com/embed/IKpkXzMxTq0"
  return (
    <>
    <div className='d-flex'>
        <h5><span className='d-none d-md-inline'>Upload New Video</span></h5>
        <button className='btn pb-3' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} className='fs-5' /></button>
    </div>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title><FontAwesomeIcon icon={faFilm} className='text-warning' /> Upload Video</Modal.Title>
</Modal.Header>
<Modal.Body>Woohoo, you are reading this text in a modal!
    <form className='p-3 border border-dark rounded mt-3'>
        
    <div className="mb-3">
    <input type="text" value={videoDetails.caption} placeholder='Video Caption' className='form-control' onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})} />
    </div>
    <div className="mb-3">
    <input type="text" value={videoDetails.ImageUrl} placeholder='Video Image' className='form-control' onChange={(e)=>setVideoDetails({...videoDetails,ImageUrl:e.target.value})} />
    </div>
    <div className="mb-3">
    <input type="text" value={videoDetails.embededLink} placeholder='Video URL' className='form-control' onChange={(e)=>setVideoDetails({...videoDetails,embededLink:e.target.value})}/>
    </div>
    </form>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleCancel}>
    Cancel
  </Button>
  <Button variant="warning" onClick={handleAdd}>
    Upload
  </Button>
</Modal.Footer>
</Modal>
<ToastContainer position='top-center' theme='colored' autoClose={3000} />
</>

    
  )
}

export default Add