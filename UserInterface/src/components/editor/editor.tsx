import { Editor } from "@monaco-editor/react"
import  styled  from "@emotion/styled";

export const Editors = ()=>{

    const language = "javascript";
    const code = "const func=()=>{ console.log()}";
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
`