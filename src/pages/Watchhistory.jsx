import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { deleteVideoHistoryApi, getAllvideoHistoryApi } from '../services/allAPi';

function Watchhistory() {
  const [deleteStatus, setDeleteStatus]=useState(false)
  const [allHisVideos, setAllHisVideos]=useState([])



  const getAllHistoryVideos = async()=>{
    const result = await getAllvideoHistoryApi()
    setAllHisVideos(result.data);
    
  }
  console.log(allHisVideos);

  const handleDelete = async(id)=>{
    const result = await deleteVideoHistoryApi(id)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setDeleteStatus(true)
    }
    
  }
  
  useEffect(()=>{
    getAllHistoryVideos()
    setDeleteStatus(false)

  },[deleteStatus])


  return (
    <div>
      <div className="d-flex mt-5">
        <h5>Watch History</h5>
        <Link to={'/home'} style={{textDecoration:'none'}} className='ms-auto'><h5 className='me-2'><FontAwesomeIcon icon={faHouse} className='me-2' /><span className='d-none d-md-inline'>Back Home</span></h5></Link>

      </div>
      <div className='container-fluid'>
      <div className='row'>
        <div className="col-md-1"></div>
        <div className="col-md-10 p-3 table-responsive">

        {allHisVideos?.length>0?
        <Table className='table mt-5'>
       <thead>
          <tr>
            <th>SL NO</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allHisVideos?.map((item,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{item?.Caption}</td>
            <td>{item?.url}</td>
            <td>{item?.time}</td>
            <td><button onClick={()=>handleDelete(item?.id)} className='btn btn-danger'> <FontAwesomeIcon icon={faTrash}/></button></td>
          </tr>
          ))
            }
        </tbody>
      </Table>
      :
      
      <h4 className='text-warning'>No Watch History</h4>
    }
      </div>
      <div className="col-md-1"></div>
      </div>
      </div>
    </div>
  )
}

export default Watchhistory