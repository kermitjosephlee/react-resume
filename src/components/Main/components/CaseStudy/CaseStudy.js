import React from "react";
import ReactMarkdown from "react-markdown";
import "../Section/Section.css";
import "./CaseStudy.css";
import { resume } from "../../../common";

export function CaseStudy() {
	const paginationCaseStudy = resume.caseStudy[0].paginatationCaseStudy;
	return (
		<div className="section">
			<div className="title-container">
				<div className="title">Case Study</div>
			</div>
			<div className="case-study">
				<ReactMarkdown
					className="pagination-markdown"
					source={paginationCaseStudy}
				/>
			</div>
		</div>
	);
}
