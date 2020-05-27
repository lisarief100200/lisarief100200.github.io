const job_form = document.getElementById("validate_job_form").addEventListener("click", validateJob)

function validateJob(e){
    e.preventDefault();

    var job_name_user = document.getElementById("job_name").value;
    var job_desc_user = document.getElementById("job_desc").value;
    var due_user = document.getElementById("due").value;
    var min_rank_user = document.getElementById("min_rank").value;

    if(job_name_user == "") {
        M.toast({html: 'Job Name cannot be blank'
        });
        return false
    }

    if(job_desc_user == "") {
        M.toast({html: 'Job Description cannot be blank'
        });
        return false
    }

    if(due_user == "") {
        M.toast({html: 'Due Date cannot be blank'
        });
        return false
    }

    if(min_rank_user == "") {
        M.toast({html: 'Minimum Rank cannot be blank'
        });
        return false
    }

    if(min_rank_user == 0) {
        M.toast({html: 'Minimum Rank cannot be blank'
        });
        return false
    }

    if(document.getElementById("exp").value == 0) {
        M.toast({html: 'EXP cannot be blank'
        });
        return false
    }

    if(document.getElementById("coin").value == 0) {
        M.toast({html: 'Coin cannot be blank'
        });
        return false
    }

    if(document.getElementById("gp").value == 0) {
        M.toast({html: 'Guild Point cannot be blank'
        });
        return false
    }

    else{
        window.setTimeout(function(){
            window.location.href="member_page.html"
        });
    }
}
