import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom'
import CampsiteInfo from './CampsiteInfoComponent';
function RenderDirectoryItem({ campsite }) {
	return (
		<Card>
			<Link to={`/directory/${campsite.id}`}>
			<CardImg width="100%" src={campsite.image} alt={campsite.name} />
			<CardImgOverlay>
				<CardTitle className="card-img-overlay">{campsite.name}</CardTitle>
			</CardImgOverlay>
			</Link>
		</Card>
	);
}

function Directory(props) {
	// renderComments(comments)

	const directory = props.campsites.map((campsite) => {
		return (
			<div key={campsite.id} className="col-md-5 m-1">
				<RenderDirectoryItem campsite={campsite} onClick={props.onClick} />
			</div>
		);
	});

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<Breadcrumb>
						<BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
						<BreadcrumbItem active>Directory</BreadcrumbItem>
					</Breadcrumb>
					<h2>Directory</h2>
					<hr />
				</div>
			</div>
			<div className="row">{directory}</div>
			<CampsiteInfo campsite={props.selectedCampsite} />
		</div>
	);
}

export default Directory;
