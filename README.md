# VSCode-terminal-interaction
Let's build an extension to customize VSCode-terminal interaction

## why 
I got inspired by [ this video](https://www.youtube.com/watch?v=rbu7Zu5X1zI&t=159s) from `3b1b` youtube channel  and how he manages his interactive workflow with some custom sublime plugin.
I decided to make my own version with a VSCode Extension.

## workflow
The user simply selects some text or moves the curser to a line and press `shif+Enter` the extension will copy the `line/seletion` in a integrated terminal (last used terminal). 

 > Note:
 if the current line is a comment it will call some special function  
  `run_line_at({fileName},{lineNumber})`  
 you should implement it yourself 😅

### default shortcuts
* shift+Enter -> newIntegratedIpython (o),
* ctrl+n -> new ipython teminal

### packaging
to make an installable `.vsix` extension file
1. install `vsce` globally with npm
2. run `vsce package`

### TODOs
  [ ] Be smarter at terminal selection.
  [ ] Draft some python tools as a template for custom `run_section_at`.
  [ ] find ways to interact with external terminals.
  [ ] add other command (run_util_here, run_current_section) 
