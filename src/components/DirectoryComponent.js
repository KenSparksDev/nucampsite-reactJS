import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import CampsiteInfo from './CampsiteInfoComponent';

function RenderDirectoryItem({campsite, onClick}){
				return(
					<Card onClick={() => onClick(campsite.id)}>
						<CardImg width="100%" src={campsite.image} alt={campsite.name} />
						<CardImgOverlay >
							<CardTitle className="card-img-overlay">{campsite.name}</CardTitle>
						</CardImgOverlay>
					</Card>
				)
}

function Directory (props) {
	// renderComments(comments) 

		const directory = props.campsites.map((campsite) => {
			return (
				<div key={campsite.id} className="col-md-5 m-1">
				<RenderDirectoryItem campsite={campsite} onClick={props.onClick}/>
				</div>
			);
		});

		return (
			<div className="container">
				<div className="row">{directory}</div>
				<CampsiteInfo campsite={props.selectedCampsite} />
			</div>
		);
	}


export default Directory;
