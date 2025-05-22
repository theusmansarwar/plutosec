import React, { useState } from "react";
import "./Comments.css"; // Styling for the comment section
import { commentAdd } from "@/DAL/create";
import { formatDate } from "@/utils/Formatedate";
import { toast, ToastContainer } from "react-toastify";

const Comments = ({ blogId, comments = [] }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  }); 

  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (isSubmitted) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: e.target.value.trim() ? "" : prevErrors[e.target.name],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Validate form
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    if (!formData.comment.trim()) errors.comment = "Comment cannot be empty.";

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const payload = {
      blogId,
      name: formData.name,
      email: formData.email,
      comment: formData.comment,
    };

      const response = await commentAdd(payload);

      if (response.status === 201) {
        setAlertType("success");
       toast.success(response?.message || "Comment submitted successfully");
        setFormData({ name: "", email: "", comment: "" });
        setIsSubmitted(false);

        
      } else {
        setAlertType("error");
        setAlertMessage(response.message || "Failed to post comment.");
      }
   
  };

  return (
    <div className="comment-container">

      <div className="comment-form">
        <h2>Leave a Comment</h2>
        <form onSubmit={handleSubmit}>
           {formErrors.name && <span className="error-message">{formErrors.name}</span>}
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
          />
         
{formErrors.email && <span className="error-message">{formErrors.email}</span>}
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          
{formErrors.comment && <span className="error-message">{formErrors.comment}</span>}
          <textarea
            name="comment"
            placeholder="Write your comment..."
            value={formData.comment}
            onChange={handleChange}
          />

          
          

          <button type="submit">Submit Comment</button>
        </form>
      </div>

      <div className="comment-list">
        <h3 className="text-xl font-bold mb-2">Comments ({comments.length})</h3>
        <div className="comment-area-list">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment._id} className="comment">
                <p>{comment.comment}</p>
                <small>
                  <span>
                    By <strong>{comment.name || "Anonymous"}</strong>
                  </span>{" "}
                  <span>{formatDate(comment.createdAt)}</span>
                </small>
              </div>
            ))
          ) : (
            <p className="no-comments">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    
    </div>
  );
};

export default Comments;
