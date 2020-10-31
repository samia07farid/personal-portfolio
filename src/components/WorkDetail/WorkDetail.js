import React from 'react';
import './WorkDetail.css'
import { UncontrolledCollapse, Button } from 'reactstrap';

const WorkDetail = ({ work }) => {
    const { name, description, image, github, website, feature1, feature2, feature3 } = work;

    return (
        <div className="col-md-4 mb-5">
            <div class="card" style={{ width: '18rem' }}>
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <a href={github} class="btn social-btn">GitHub</a>
                    <a href={website} class="btn social-btn ml-3">Website</a>
                </div>
            </div>
        </div >
    );
};

export default WorkDetail;