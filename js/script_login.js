const login = document.getElementById("validate_login").addEventListener("click", validateLogin)

function validateLogin(e){
    e.preventDefault();

    var username_user = document.getElementById("username").value;
    var password_user = document.getElementById("password").value;
    var security_user = document.getElementById("security").value;

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

    if(security_user != "7") {
        M.toast({html: 'Answer the security question correctly!'
        });
        return false
    }

    else{
        M.toast({html: 'Login successful, go to Member Page. Please wait. . .'
    });

        window.setTimeout(function(){
            window.location.href="member_page.html"
        });
    }
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }