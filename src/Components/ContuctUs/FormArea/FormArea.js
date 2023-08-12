import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { baseUrl } from "../../../hooks/url";
import "./FormArea.css";

function FormArea() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const [sending, setSending] = useState(false);

	//handle ContactForm
	const onSubmit = (data) => {
		// console.log(data);
		setSending(true);

		//Send to Backend
		const formUrl = `${baseUrl}/api/queries/store`;
		fetch(formUrl, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				// console.log(result);
				toast.success(result.message);
				reset();
				setSending(false);
			});
	};

	return (
		<>
			<div className="form_area">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="visitor_info">
						<div className="namef">
							<input
								required
								type="text"
								placeholder="Name *"
								{...register("name")}
							/>
						</div>

						<div className="emailf">
							<input
								required
								type="email"
								placeholder="Email * "
								{...register("email")}
							/>
						</div>
					</div>

					<div className="visitor_info">
						<div className="subject me-3">
							<input
								required
								type="tel"
								placeholder="Phone *"
								{...register("phone")}
							/>
						</div>

						<div className="subject">
							<input
								required
								type="text"
								placeholder="Subject *"
								{...register("subject")}
							/>
						</div>
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
						<button type="submit" disabled={sending}>
							{sending ? "Sending..." : "Send Message"}{" "}
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default FormArea;
