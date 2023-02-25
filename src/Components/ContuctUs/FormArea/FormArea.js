import React from "react";
import { useForm } from "react-hook-form";
import "./FormArea.css";

function FormArea() {
  const { register, handleSubmit,reset,  formState: { errors } } = useForm();

  //handle ContactForm
  const onSubmit = data =>{
    console.log(data);
    reset();
  } ;

  
  return (
    <>
      <div className="form_area">
        <form  onSubmit={handleSubmit(onSubmit)}>
          <div className="visitor_info">
            <div className="namef">
              <input required type="text" placeholder="Name *" {...register("name")} />
            </div>

            <div className="emailf">
              <input required type="email" placeholder="Email * "  {...register("email")} />
            </div>
          </div>

          <div className="subject">
            <input type="text" placeholder="Subject *"  {...register("subject")} />
          </div>

          <div className="meassage">
            <textarea
              name=""
              id=""
              cols=""
              rows=""
              {...register("message")}
              required
              placeholder="Please describe what you need."
            ></textarea>
          </div>

          <div className="submit_btn">
            <button>Send Message</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormArea;
