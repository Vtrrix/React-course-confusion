import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
	if (dish != null) {
		return (
			<Card>
				<CardImg top src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		);
	} else {
		return <div></div>;
	}
}

const DishdetailComponent = (props) => {
	var comments = <div></div>;
	if (props.selected) {
		comments = props.selected.comments.map((comment) => (
			<div key={comment.id}>
				<p>{comment.comment}</p>
				<p>
					--{comment.author} ,{" "}
					{new Intl.DateTimeFormat("en-US", {
						year: "numeric",
						month: "short",
						day: "2-digit",
					}).format(new Date(Date.parse(comment.date)))}
				</p>
			</div>
		));
	}

	return (
		<div className="row my-3">
			<div className="col-8 col-md-5">
				<RenderDish dish={props.selected} />
			</div>
			<div className=".col-4 col-md-7">
				{props.selected ? <h3>Comments</h3> : <div></div>}
				<div>{comments}</div>
			</div>
		</div>
	);
};

export default DishdetailComponent;
