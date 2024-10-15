import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { addVideoToCatergoryApi, getVideosApi } from '../services/allAPi'


function Allvideos({addVideoStatus,setVideoStatus}) {

    
    const [allvideos , setAllVideos] = useState([])
    const [deleteVideoStatus, setDeleteVideoStatus] = useState({})

    //side effect

    const getAllVideo = async()=>{
        const result = await getVideosApi()
        // console.log(result);
        setAllVideos(result.data);
        
    }
    console.log(allvideos);

    const ondrop =(e)=>{
        e.preventDefault()
    }

    const VideoDrop = async(e)=>{
        const {category , video}=JSON.parse(e.dataTransfer.getData("datashare"))
        console.log(category,video);

        const newArray = category.fullvideos.filter((item)=>item.id!= video.id)
        const newCategory= {
            category:category.category,
            fullvideos:newArray,
            id:category.id
        }
        const result = await addVideoToCatergoryApi(category.id,newCategory)
        console.log(result);
        if(result.status>=200 && result.status<300){ 
            setVideoStatus(result.data)

        }

        
        
    }

    

// to handle side effect
    useEffect(()=>{
        getAllVideo()
    },[addVideoStatus ,deleteVideoStatus])  // []-useEffect is called when the component render to the browser
    

  return (
    <div droppable onDragOver={(e)=>ondrop(e)} onDrop={(e)=>VideoDrop(e)}>
        <h4>Allvideos</h4>
        {  allvideos.length>0?
      <div className="container">
            <div className="row">

            {allvideos.map((item)=>(

             <div className="col-md-3">
                <Videocard video={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
                </div>
                ))
            }
            </div>
        </div>
        :

        <div className='container'>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <img src="https://live-mmb-public.s3.ap-south-1.amazonaws.com/assets/img/empty-cart.png" alt="no image" className='w-100' />
                    <h5 className='text-warning text-center'>No Video Added Yet</h5>
                </div>
                <div className="col-md-4"></div>
            </div>

        </div>
        }
        </div>

       

        
  )
}

export default Allvideos