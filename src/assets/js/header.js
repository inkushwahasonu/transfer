function headerjs() {
  alert("This is sign-up page.");
}
// --------------form validation
function validation() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  let conpass = document.getElementById("conpass").value;
  let mobileNumber = document.getElementById("mobileNumber").value;
  let email = document.getElementById("email").value;

  if (user == "") {
    document.getElementById("username").innerHTML =
      " ** Please fill the username field.";
    return false;
  }
  if (user.length <= 2 || user.length >= 20) {
    document.getElementById("username").innerHTML =
      "** username should be mor than 2 or less than 20 charectors.";
    return false;
  }
  if (!isNaN(user)) {
    document.getElementById("username").innerHTML =
      "** Please use only charestors in this fields.";
    return false;
  }

  // ------password
  if (pass == "") {
    document.getElementById("passwords").innerHTML =
      " ** Please fill the password field";
    return false;
  }
  if (pass.length <= 5 || pass.length >= 20) {
    document.getElementById("passwords").innerHTML =
      " ** password should be more 5 or less than 20 charectors.";
    return false;
  }

  // -------confirm password

  if (conpass == "") {
    document.getElementById("confrmpass").innerHTML =
      " ** Please fill the confirm pass.";
    return false;
  }
  if (pass != conpass) {
    document.getElementById("confrmpass").innerHTML =
      " ** password not mached.";
    return false;
  }

  //-------contect number

  if (mobileNumber == "") {
    document.getElementById("mobileno").innerHTML =
      " ** Please fill your contect number.";
    return false;
  }
  if (isNaN(mobileNumber)) {
    document.getElementById("mobileno").innerHTML = " Enter only numbers.";
    return false;
  }
  if (mobileNumber.length != 10) {
    document.getElementById("mobileno").innerHTML =
      "** use only 10 digit contect numbers";
    return false;
  }

  // -------email--

  if (email == "") {
    document.getElementById("emailids").innerHTML =
      " ** Please fill your email field.";
    return false;
  }
  if (email.indexOf("@") <= 0) {
    document.getElementById("emailids").innerHTML = " ** @ invalid position.";
    return false;
  }

  if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    document.getElementById("emailids").innerHTML = " ** . invalid position.";
    return false;
  }
}
