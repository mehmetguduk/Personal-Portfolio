// ***** VARIABLES *****

const JOB = document.querySelector("#job");
const BACK_TO_TOP = document.querySelector(".back-to-top")
const FORM = document.querySelector(".contact-form");
const FORM_NAME = document.querySelector("#contact-name");
const FORM_EMAIL = document.querySelector("#contact-email");
const FORM_SUBJECT = document.querySelector("#contact-subject");
const FORM_MESSAGE = document.querySelector("#contact-message");
const FORM_ERROR = document.querySelector(".form-error");
const SUBMIT_BUTTON = document.querySelector(".form-submit");

// ***** WHILE STARTING *****

JOB.innerHTML = "< Web Developer & Designer />"

// ***** FORM CONTROL AND SUBMIT EVENT *****

SUBMIT_BUTTON.addEventListener("click", function (event) {
    event.preventDefault();
    FORM_ERROR.innerHTML = "";
    var errormessage = "";

    if (FORM_NAME.value === "" || FORM_EMAIL.value === "" || FORM_SUBJECT.value === "" || FORM_MESSAGE.value === "") {
        errormessage = '<p>"Please complete the form."</p>';
    }
    else if (IS_NUMERIC(FORM_NAME.value) === true) {
        errormessage = '<p>"Please enter a correct name."</p>';
    }
    else if (FORM_NAME.value.length < 3) {
        errormessage = '<p>"Name can not be that short."</p>';
    }
    else if (IS_EMAIL(FORM_EMAIL.value) === false) {
        errormessage = '<p>"Please enter a correct email."</p>';
    }
    else if (FORM_SUBJECT.value.length < 3) {
        errormessage = '<p>"Subject can not be that short."</p>';
    }
    else if (FORM_MESSAGE.value.length < 20) {
        errormessage = '<p>"Message can not be that short."</p>';
    }

    if (errormessage === "") {
        FORM.submit();
        FORM_ERROR.innerHTML = '<p style="color: #28a745">"Your message has been sent."</p>';
        FORM_NAME.value = "";
        FORM_EMAIL.value = "";
        FORM_SUBJECT.value = "";
        FORM_MESSAGE.value = "";
        setTimeout(() => {
            FORM_ERROR.innerHTML = ""
        }, 5000);
    }
    else {
        FORM_ERROR.innerHTML = errormessage;
    }
})

function IS_EMAIL(email) {
    var pattern = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
    return pattern.test(email);
}

function IS_NUMERIC(text) {
    return !isNaN(parseFloat(text)) && isFinite(text);
}

// ***** BACK_TO_TOP DISPLAY AND EVENT *****

window.addEventListener("scroll", function (event) {
    if (this.scrollY > 100) {
        BACK_TO_TOP.style.display = "block";
    }
    else {
        BACK_TO_TOP.style.display = "none";
    }
});

BACK_TO_TOP.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
});