const register = document.getElementById("validate_register").addEventListener("click", validateRegister)

function validateRegister(e){
    e.preventDefault();

    var username_user = document.getElementById("username").value;
    var password_user = document.getElementById("password").value;
    var password2_user = document.getElementById("password2").value;
    var ktp_user = document.getElementById("ktp").value;
    var address_user = document.getElementById("address").value;
    var country = document.getElementById("select-country").value;
    var tele_user = document.getElementById("input-phone-tele").value;


    if(username_user == "") {
        M.toast({html: 'Username cannot be blank, please fill your username'
        });
        return false
    }

    if(password_user == "") {
        M.toast({html: 'Password cannot be blank, please fill your password'
        });
        return false
    }
    
    if(password_user.length < 8 && password_user.length !== 0) {
        M.toast({html: 'Minimum password length is 8'
        });
    }

    if(password_user.length > 20) {
        M.toast({html: 'Maximum password length is 20'
        });
    }

    if(password2_user == "") {
        M.toast({html: 'Confirm password cannot be blank, please fill your password again'
        });
        return false
    }

    if(password_user !== password2_user) {
        M.toast({html: 'Passwords do not match'
        });
        return false
    }

    if(address_user == "") {
        M.toast({html: 'Address cannot be blank, please fill your address'
        });
        return false
    }

    if(country == "ID" && tele_user.indexOf("+62") == -1){
        M.toast({html: 'Wrong country code, try again'
        });
        return false
    }

    if(country == "PH" && tele_user.indexOf("+63") == -1){
        M.toast({html: 'Wrong country code, try again'
        });
        return false
    }

    if(country == "SG" && tele_user.indexOf("+65") == -1){
        M.toast({html: 'Wrong country code, try again'
        });
        return false
    }

    if(country == "TH" && tele_user.indexOf("+66") == -1){
        M.toast({html: 'Wrong country code, try again'
        });
        return false
    }

    if(ktp_user == "") {
        M.toast({html: 'ID Card cannot be blank, please upload your ID Card'
        });
        return false
    }

    else{
        checkPass(password_user)
    }

}

function checkPass(password_user){
    var strength = 0;
    if (password_user.match(/[a-z]+/)) {
        strength += 1;
    }

    if (password_user.match(/[A-Z]+/)) {
        strength += 1;
    }

    if (password_user.match(/[0-9]+/)) {
        strength += 1;
    }

    if (password_user.match(/[$@#&!]+/)) {
        strength += 1;
    }

    switch (strength) {
        case 0:
          break;
    
        case 1:
            M.toast({html: 'Your password is very weak, try again'
        });
          break;
    
        case 2:
            M.toast({html: 'Your password is weak, try again'
        });
          break;
    
        case 3:
            M.toast({html: 'Your password is strong'
        });
            window.setTimeout(function(){
            window.location.href="member_page.html"
        });
          break;
    
        case 4:
            M.toast({html: 'Your password is very strong'
        });
            window.setTimeout(function(){
            window.location.href="member_page.html"
        });
          break;
      }
}

function randomPassword(length) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    random_pass.row_password.value = pass;
}