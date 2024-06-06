import React, { useState } from "react"
import Modal from "./Modal" // Import the Modal component

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
  })
  const [status, setStatus] = useState("") // State to track form submission status
  const [showModal, setShowModal] = useState(false) // State to control modal visibility

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const form = new FormData()
    form.append("email", formData.email)

    fetch("https://getform.io/f/lbkmqdeb", {
      method: "POST",
      body: form,
    })
      .then(response => {
        if (response.ok) {
          setStatus("SUCCESS")
          setFormData({ email: "" }) // Clear form
        } else {
          setStatus("ERROR")
        }
        setShowModal(true) // Show modal
      })
      .catch(error => {
        console.error("Form submission error:", error)
        setStatus("ERROR")
        setShowModal(true) // Show modal
      })
  }

  const closeModal = () => {
    setShowModal(false)
    setStatus("")
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input
          className="emailbox"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="someone@example.com"
          required
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
      <Modal show={showModal} onClose={closeModal}>
        {status === "SUCCESS" && (
          <p className="success-message">Thank you for signing up!</p>
        )}
        {status === "ERROR" && (
          <p className="error-message">
            There was an error submitting your email. Please try again.
          </p>
        )}
      </Modal>
    </div>
  )
}

export default Form
