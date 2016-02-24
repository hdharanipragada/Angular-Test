/*function fnNameValidation() {
    var span = document.getElementById('glynameicon');
    var div = document.getElementById('formname');
    var mspan = document.getElementById('helptext1');
    var msg = "Name should only have alphabets";
    var npattern = /^[a-zA-Z]+$/;
    var ninput = document.getElementById('Name').value;
    if ((ninput).match(npattern)) {
        div.setAttribute('class', 'has-success has-feedback');
        span.setAttribute('class', 'glyphicon glyphicon-ok form-control-feedback');
        mspan.innerText = "";
    } else {
        div.setAttribute('class', 'has-error has-feedback');
        span.setAttribute('class', 'glyphicon glyphicon-remove form-control-feedback');
        mspan.setAttribute('class', 'help-block');
        mspan.innerText = msg;
    }
}

function fnPasswordValidation() {
    var span = document.getElementById('glypwdicon');
    var div = document.getElementById('formpassword');
    var mspan = document.getElementById('helptext3');
    var msg = "passowrd should have atleast 6 characters";
    var ppattern = /^[a-zA-Z0-9]+$/;
    var pinput = document.getElementById('password').value;
    if ((pinput).match(ppattern)) {
        div.setAttribute('class', 'has-success has-feedback');
        span.setAttribute('class', 'glyphicon glyphicon-ok form-control-feedback');
        mspan.innerText = "";
    } else {
        div.setAttribute('class', 'has-error has-feedback');
        span.setAttribute('class', 'glyphicon glyphicon-remove form-control-feedback');
        mspan.setAttribute('class', 'help-block');
        mspan.innerText = msg;
    }
}
*/