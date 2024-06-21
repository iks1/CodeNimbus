### Overview

This is a subproject of a bigger project that I am working on, I am building it in `NodeJs` and `TypeScript` to test some things, the original project is being built in `Golang`

I have used `Monaco code editor` and `XtermJs` and `nodepty` to start pseudo terminals on backend. And a Websocket library `SocketIO` for synchronization and realtime updations of folder structures/ file updation on backend.

### Current project overview

the terminal is synchronized with my machine (through `xterm` and `nodepty`)
<img src="/docs/terminal.png" alt="terminal"/>

the ide is synchronized with backend ( `SocketIo` )
<img src="/docs/ide.png" alt="ide"/>

This is the current architecture representing starting of `websocket` and `requesting files`
<img src="/docs/design.png" alt=design>

Note: `nodepty` is not compatible on windows machine so I am using `WSL`, though some solutions are given 
     but not working in my case

<b>what I am working on right now? </b>

 - Custom file Tree structure so that I can add and delete file from user Interface
 - I was trying to create file on backend dynamically but `wsl` is not 
   allowing and at the same time I can not switch to windows since I am using `nodepty`
 - Instead of giving access to my machine I might launch Docker inside Kubernetes and 
   give access to the user.


