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
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="emailbox"
            type="email"
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
