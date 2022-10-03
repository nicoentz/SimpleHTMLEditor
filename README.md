# SimpleHTMLEditor

Simple HTML editor (allowing bold, italic and underline formatting) without using the deprecated Document.execCommand() JS-API. The editor is written in vanilla JavaScript and does not need any external dependencies.

*How to use the editor*

Include simple_html_editor.css and simple_html_editor.js in your web page.

*Initialization*

SimpleHTMLEditor = new simple_html_editor("editor_element");

Make sure that "editor_element" is the id of a contenteditable div.

HTML content can be set by using SimpleHTMLEditor.set_html()-method.

HTML content can be retrieved by using SimpleHTMLEditor.get_html()-method.
