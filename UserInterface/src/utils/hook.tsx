import { useEffect } from "react";
import { Directory } from "./TypeManager";
import { buildFileTree } from "./Filetree";

export const useFiles=(id:string, callback:(dir:Directory)=>void)=>{
    useEffect(()=>{
        fetch('https://codesandbox.io/api/v1/sandboxes/'+id)
        .then(response=>response.json())
        .then(({data})=>{
            const rootDir = buildFileTree(data);
            callback(rootDir);
        })
    },[])
}