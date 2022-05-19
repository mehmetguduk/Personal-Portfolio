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
            <form name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <label htmlFor="name">Name</label> <br />
                    <input type="text" id="name" name="name" required />
                </p>
                <p>
                    <label htmlFor="email">Email</label> <br />
                    <input type="email" id="email" name="email" required />
                </p>
                <p>
                    <label htmlFor="message">Message</label> <br />
                    <textarea id="message" name="message" required></textarea>
                </p>
                <p>
                    <input type="submit" value="Submit message" />
                </p>
            </form>
        </section>
    )
}

