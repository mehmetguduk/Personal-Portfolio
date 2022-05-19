import React from "react"

export default function Contact() {

    /*const [formData, setFormData] = React.useState({
        name: "a",
        email: "b",
        subject: "c",
        message: "d"
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
                    type="text"

                    id="contact-name"
                    name="name"
                />
                <input
                    type="email"

                    id="contact-email"
                    name="email"
                />
                <input
                    type="text"

                    id="contact-subject"
                    name="subject"
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

