import { useQuery,useMutation } from "react-query";
import axios from "axios";

const fetchvideos=()=>{
    return axios.get("http://127.0.0.1:3003/videos");
}
const addVideos=(video)=>{
    return axios.post("http://127.0.0.1:3003/videos",video);
}

const removeVideo=(id)=>{
    console.log('idid',id);
    return axios.delete(`http://127.0.0.1:3003/videos/${id}`);
}




export const useVideoList = () => {

    return useQuery('videos' ,fetchvideos)
  
};


export const useAddVideos=()=>{
    return useMutation(addVideos)
};

export const useRemoveVideos=()=>{
    return useMutation(removeVideo);
}
