import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Videocard from './Videocard';
import { addCategoryApi, addVideoToCatergoryApi, deleteCategoryApi, getCategoryApi } from '../services/allAPi';
import { toast } from 'react-toastify';
import { json } from 'react-router-dom';

function Catergory(videoStatus) {
    const [show, setShow] = useState(false);
    
    const [categoryN ,setCategory]=useState("")
    console.log(categoryN);

    const [addCategoryStatus, setCategoryStatus] = useState({})

    const [allCategory, setAllCategory]= useState([])

    const [deleteStatus, setDeleteStatus]= useState([])

    const [videoCategoryStatus , setVideoCategoryStatus] =useState({})

    const handleCancel = ()=>{
      setCategory("")
    }

    const handleClose = () => {setShow(false);
      handleCancel()
    }
    const handleShow = () => setShow(true);

    const handleAdd = async()=>{
      if(categoryN){
        const reqBody ={
          category:categoryN,
          fullvideos:[]
  
        }
        const result = await addCategoryApi(reqBody)
        console.log(result);
        if(result.status>=200 && result.status<300){
          toast.success('category added successfully')
          handleClose()
          setCategoryStatus(result.data)
        }
        else{
          toast.error('something went wrong')
        }
      }
      else{
        toast.info('please add category name')
      }

      
    }

    const getCategory = async()=>{
      const result = await getCategoryApi()
      setAllCategory(result.data);
      
    }
    console.log(allCategory);

    const handleDelete =async(id)=>{
      const result = await deleteCategoryApi(id)
      console.log(result);
      
      if(result.status>=200 && result.status<300){
        setDeleteStatus(result.data);

      }

      
      
    }
    
    const ondrag = (e)=>{
      e.preventDefault() //prevent the data lose

    }
    const VideoDrop = async(e , categoryDetails)=>{
      console.log(categoryDetails);

      const videoDetails =JSON.parse(e.dataTransfer.getData("videoDetails"))
      console.log(videoDetails);


      if(categoryDetails.fullvideos.find((item)=>item.id == videoDetails.id)){
        toast.error('video already present')
      }
      else{
        categoryDetails.fullvideos.push(videoDetails)
        console.log(categoryDetails);


      const result = await addVideoToCatergoryApi(categoryDetails.id, categoryDetails)
      if(result.status >= 200 && result.status < 300){
        toast.success('video added successfully')
        setVideoCategoryStatus(result.data)
      }
      else{
        toast.error('something went wrong')
      }
    }
      


      // const result = await addVideoToCatergoryApi
      // categoryDetails.id
      
    }

    const videoDrag =(e,video,category)=>{
      console.log(video);
      console.log(category);

      const dataShare ={
        category,
        video
      }

      e.dataTransfer.setData("datashare",JSON.stringify(dataShare))
      
      
    }






    


    useEffect(()=>{
      getCategory()

    },[addCategoryStatus, deleteStatus,videoCategoryStatus, videoStatus])

    
  return (
    <>
    <div>
        <h5>Category</h5>
        <button onClick={handleShow} className='btn btn-warning w-100 mt-3'>Add Category </button>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='p-3 border corder-secondary border-1 rounded'>
                <input type="text" placeholder='Category Name' className='form-control' value={categoryN} onChange={(e)=>setCategory(e.target.value)}/>
            </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>





  { allCategory?.length>0 &&

  allCategory.map((item)=>(
    <div className='mt-3 border border-secondary rounded p-3' droppable onDragOver={(e)=>ondrag(e)} onDrop={(e)=>VideoDrop(e, item)} >
    <div className='d-flex justify-content-between '>
        <h5>{item?.category}</h5>
       <button className=' btn btn-danger' onClick={()=>handleDelete(item?.id)}> <FontAwesomeIcon icon={faTrash} /></button>
    </div>
  { item?.fullvideos?.length>0 &&
  item?.fullvideos?.map((video)=>(
    <div draggable onDragStart={(e)=>videoDrag(e,video,item)}>
    <Videocard video={video} isPresent={true} />
</div>

  ))
}

</div>

  ))
  

  }
    </div>

    </>
  )
}

export default Catergory