import React, { useContext } from "react";
import { ResumeContext } from "../../../contexts/ResumeContext";
import "./Contact.css";
import "../Section/Section.css";

export function Contact() {
	const {
		basics: { email, phone, website, location: { city, timeZone, region } },
	} = useContext(ResumeContext);

	return (
		<div className="section">
			<div className="title-container">
				<div className="title">Contact</div>
			</div>
			<div className="contact-container">
				<div className="contact-detail">{phone}</div>
				<div className="contact-detail">{email}</div>
				<div className="contact-detail">{city}, {region}</div>
				<div className="contact-detail">
					<a href={website}>{website}</a>
				</div>
				<div className="contact-detail">{timeZone}</div>
			</div>
		</div>
	);
}
