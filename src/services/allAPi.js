import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//add video
export const AddVideoApi =async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/allvideos`,reqBody)
}

//get all videos
export const getVideosApi = async()=>{
    return await commonApi('GET',`${serverUrl}/allvideos`)
}

//add video history
export const addVideoHistoryApi = async(reqBody)=>{
    return await commonApi ('POST',`${serverUrl}/history`,reqBody)
}

//api to get video from history

 export const getAllvideoHistoryApi = async()=>{
    return await commonApi ('GET',`${serverUrl}/history`)
 }

 //api to delete a video from all videos

 export const deleteVideosApi = async(id)=>{
    return await commonApi ('DELETE',`${serverUrl}/allvideos/${id}`)
 }

 //api to delete video from history 

 export const deleteVideoHistoryApi = async(id)=>{   //id= path parameter
    return await commonApi ('DELETE',`${serverUrl}/history/${id}`)  //return = response
 }

 //catogory

 export const addCategoryApi = async(reqBody)=>{
    return await commonApi ('POST',`${serverUrl}/category`,reqBody)
 }


 //api to get category

 export const getCategoryApi = async()=>{
    return await commonApi ('GET',`${serverUrl}/category`)
 }

 //api to delete category

 export const deleteCategoryApi = async(id)=>{
    return await commonApi ('DELETE',`${serverUrl}/category/${id}`)
 }


 export const addVideoToCatergoryApi = async(id, reqBody)=>{
   return await commonApi ('PUT', `${serverUrl}/category/${id}`,reqBody)
 }