# vscode-terminal-interaction
Let's build an extension to customize vscode-terminal interaction

## why 
I got inspired by [ this video](https://www.youtube.com/watch?v=rbu7Zu5X1zI&t=159s) from `3b1b` youtube channel  and how he manages his interactive workflow with some custom sublime plugin.
I decided to make my own version with a VSCode Extension.
## workflow

The user simply selects some text or moves the curser to a line and the extension will copy the `line/section` in a integrated terminal (last used terminal). 

 > Note:
 if the current line is a comment it will call some special function  
  `run_section_at({fileName},{lineNumber})`  
 you should implement it yourself 😅

### TODOs
  [ ] Be smarter on terminal selection  
  [ ] Draft some python tools as a template for custom `run_section_at`