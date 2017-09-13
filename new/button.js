function previewHTML(){
	preview.document.write(document.getElementsByTagName('TEXTAREA')[0].value); 
	preview.document.close(); 
	preview.focus();
}
function clearIframe(){
	window.document.form1.code.value='';
	preview.document.write (document.getElementsByTagName ('TEXTAREA')[0].value); 
	preview.document.close(); 
	preview.focus();
}
function openNewWindow(){
	javascript: win=window.open('', '', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=550'); 
	win.document.write(window.document.form1.code.value); 
	return false;
}