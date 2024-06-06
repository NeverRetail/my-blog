import React, { useState } from "react"
const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }

  return (
    <div class="form-container">
      <form
        action="https://getform.io/f/lbkmqdeb"
        method="POST"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">
          <input
            className="emailbox"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="someone@example.com"
          />
        </label>

        <button class="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
