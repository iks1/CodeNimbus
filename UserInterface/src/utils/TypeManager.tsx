export enum Type{
    FILE,
    DIRECTORY,
    DUMMY
}

interface CommonProps{
    id:string;
    type:Type;
    name:string;
    parentId:string|undefined;
    depth:number;
}

export interface File extends CommonProps{
    content:string;
}

export interface Directory extends CommonProps{
    files: File[];
    dirs: Directory[];
}