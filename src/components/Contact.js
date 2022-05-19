import React from "react"

export default function Contact() {
    /* 
        const [formData, setFormData] = React.useState({
            name: "",
            email: "",
            subject: "",
            message: ""
        })
    
        function formChangeHandler(event) {
            const { name, value } = event.target;
            setFormData((prevFormData) => {
                return ({
                    ...prevFormData,
                    [name]: [value]
                })
            })
        }
    
    */


    return (
        <section id="contact">
            <h2 class="section-title">CONTAC<span>T</span></h2>
            <form
                class="contact-form"
                name="contact"
                method="post"
            >
                <p class="form-error"></p>
                <input
                    id="contact-name"
                    name="name"

                    type="text"
                    placeholder="Name"
                    autoComplete="off"
                    spellCheck="false"
                    required
                    minLength="2"
                />
                <input
                    id="contact-email"
                    name="email"

                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                    spellCheck="false"
                    required
                />
                <input
                    id="contact-subject"
                    name="subject"

                    type="text"
                    placeholder="Subject"
                    autoComplete="off"
                    spellCheck="false"
                    required
                    minLength="2"
                />
                <textarea
                    id="contact-message"
                    name="message"

                    placeholder="Message"
                    autoComplete="off"
                    spellCheck="false"
                    required
                    minLength="20"
                />
                <button
                    class="form-submit"
                    type="submit">
                    Submit <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
            </form>
        </section>
    )
}

