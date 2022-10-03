class simple_html_editor {

	constructor(element) {
		this.editor = document.getElementById(element);
		let parent_node = this.editor.parentNode;
		
		this.toolbar = document.createElement("div");
		this.toolbar.setAttribute("id", "simple_html_editor_toolbar");

		parent_node.insertBefore(this.toolbar, this.editor);
		
		this.toolbar.innerHTML = '<div class="shet_button" data-action="bold"><b>B</b></div><div class="shet_button" data-action="italic"><i>I</i></div><div class="shet_button" data-action="underline"><u>U</u></div>';
		
		// get buttons
		var editor_buttons = document.querySelectorAll('.shet_button');
		
		let object_reference = this;

		editor_buttons.forEach(function (button, index) {
			button.removeEventListener("click", null);
			button.addEventListener("click", function(){
				let button_action = this.getAttribute("data-action");
  				object_reference.format(button_action);
			});
		});
	}
	
	set_format(styleProperty, setString, unsetString) {
		var selection = getSelection();
		let parent_element = selection.baseNode.parentElement;
		var range;
		
		if (((parent_element.tagName != "SPAN")) || (parent_element.innerHTML != selection.toString()) ) {
			if (selection.rangeCount) {
            	range = selection.getRangeAt(0);
            	
            	let new_node = document.createElement("span");
            	new_node.style[styleProperty] = setString;
            	
				new_node.innerHTML = selection.toString();
				range.deleteContents();
            	range.insertNode(new_node);
            	
				window.getSelection().removeAllRanges();
        	}
		} else {
			let parent_element = selection.baseNode.parentElement;
			
			if (parent_element.style[styleProperty] != setString) {
				parent_element.style[styleProperty] = setString;
			} else {
				parent_element.style[styleProperty] = unsetString;
			}
		}
	}
	
	format(format_action) {
		if (format_action == "bold") { 
			this.set_format("fontWeight", "bold", "normal");
		} else if (format_action == "italic") {
			this.set_format("fontStyle", "italic", "normal");
		} else if (format_action == "underline") {
			this.set_format("textDecoration", "underline", "none");
		}
	}
	
	set_html(html) {
		this.editor.innerHTML = html;
	}
	
	get_html() {
		return this.editor.innerHTML;
	}
	
}
