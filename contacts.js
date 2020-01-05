function validateForm() {
	var uname=document.getElementById("name").value;
	
	var uphone=document.getElementById("phone").value;
	if (uname == "")
		{ alert("Please fill in all required fields");
			return false;
		} 
	if (uphone == "")
		{ alert("Please fill in all required fields");
			return false;
		}
	else {
		alert("Your submission has been received");
			return true;
	}
}