import { Editor } from "@monaco-editor/react"
import  styled  from "@emotion/styled";
import { File } from "../../utils/TypeManager";


export const Editors = ({selectedFile}:
  {
    selectedFile: File | undefined;
  }
)=>{
   
   if(!selectedFile) return null;

   const code=selectedFile.content;
   let language=selectedFile.name.split('.').pop()
   if(language==="js" || language === "jsx")
      language="javascript";
   else if(language==="ts" || language === "tsx")
      language="typescript"

   
    return(
         <Div>
           <Editor
            height="100vh"
            language={language}
            value={code}
            theme="vs-dark"
           />
         </Div>
    )
}

const Div = styled.div`
  width: calc(100% - 300px);
  margin: 0;
  font-size: 16px;
`