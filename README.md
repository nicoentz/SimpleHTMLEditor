# SimpleHTMLEditor

Simple HTML editor (allowing bold, italic and underline formatting) without using the deprecated Document.execCommand() JS-API.

*How to use the editor*

Include simple_html_editor.css and simple_html_editor.js in your web page.

*Initialization*

MessageEditor = new simple_html_editor(<id of editor element>);

Make sure that the editor element is a contenteditable div.

HTML content can be set by using MessageEditor.set_html()-method.

HTML content can be retrieved by using Message.get_html()-method.
