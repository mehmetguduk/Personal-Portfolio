import React from "react"

export default function Contact() {

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



    return (
        <section id="contact">
            <h2 class="section-title">CONTAC<span>T</span></h2>
            <form
                class="contact-form"
                data-netlify="true"
                name="contact"
                netlify netlify-honeypot="bot-field"
            >
                <p class="form-error"></p>
                <input
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={formChangeHandler}
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
                    value={formData.email}
                    onChange={formChangeHandler}
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                    spellCheck="false"
                    required
                />
                <input
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={formChangeHandler}
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
                    value={formData.message}
                    onChange={formChangeHandler}
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

