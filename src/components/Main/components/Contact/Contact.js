import React from "react";
import "./Contact.css";
import "../Section/Section.css";

export function Contact({ basics }) {
	const { phone, website } = basics;

	return (
		<div className="section">
			<div className="title-container">
				<div className="title">Contact</div>
			</div>
			<div className="contact-container">
				<div className="contact-detail">{phone}</div>
				<div className="contact-detail">kermitjosephlee-at-gmail.com</div>
				<div className="contact-detail">
					<a href={website}>{website}</a>
				</div>
			</div>
		</div>
	);
}
