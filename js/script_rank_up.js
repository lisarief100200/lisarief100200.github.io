const rank_up = document.getElementById("validate_rank_up").addEventListener("click", validateRankup)

function validateRankup(e){
    e.preventDefault();

    var name_user = document.getElementById("name").value;
    var level_user = document.getElementById("level").value;
    var photo = document.getElementById("photo-chara").value;

    if(name_user == "") {
        M.toast({html: 'Character name cannot be blank'
        });
        return false
    }

    if(level_user == "") {
        M.toast({html: 'Level cannot be blank'
        });
        return false
    }

    if(photo == "") {
        M.toast({html: 'Upload screenshot of your chara'
        });
        return false
    }

    else{
        window.setTimeout(function(){
            window.location.href="member_page.html"
        });
    }
}
