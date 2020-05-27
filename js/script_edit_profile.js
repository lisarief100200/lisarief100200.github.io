const edit_profile = document.getElementById("validate_edit_profile").addEventListener("click", validateEdit)

function validateEdit(e){
    e.preventDefault();

    var username_user = document.getElementById("username").value;
    var password_user = document.getElementById("password").value;
    var name_user = document.getElementById("name").value;
    var class_user = document.getElementById("class").value;
    var level_user = document.getElementById("level").value;
    var rank_user = document.getElementById("rank").value;
    var email_user = document.getElementById("email").value;
    var address_user = document.getElementById("address").value;


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

    if(name_user == "") {
        M.toast({html: 'Character name cannot be blank, please fill your character name'
        });
        return false
    }

    if(class_user == "") {
        M.toast({html: 'Class cannot be blank, please fill your class'
        });
        return false
    }

    if(level_user == "") {
        M.toast({html: 'Level cannot be blank, please fill your level'
        });
        return false
    }

    if(rank_user == "") {
        M.toast({html: 'Rank cannot be blank, please fill your rank'
        });
        return false
    }

    if(address_user == "") {
        M.toast({html: 'Address cannot be blank, please fill your address'
        });
        return false
    }

    if(email_user == "") {
        M.toast({html: 'E-mail cannot be blank, please fill your e-mail'
        });
        return false
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_user))
    {
        window.setTimeout(function(){
            window.location.href="member_page.html"
        });
    }
    else{M.toast({html: 'Invalid email address'
    });
    return false
    }

}