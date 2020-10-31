import React, { useState } from 'react';
import { Spring } from 'react-spring/renderprops';
import projectInfo from '../../fakedata/projectInfo';
import Navbar from '../Navbar/Navbar';
import WorkDetail from '../WorkDetail/WorkDetail';


const Work = () => {
    const [work, setWork] = useState(projectInfo);

    return (
        <div>
            <Navbar />
            <Spring
                from={{ opacity: 0, marginTop: -800 }}
                to={{ opacity: 1, marginTop: 0 }}
            >
                {props => (
                    <div style={props}>
                        <div className="d-flex justify-content-center">
                            <div className="container-md row mt-5">
                                {
                                    work.map(work => <WorkDetail key={work.key} work={work} ></WorkDetail>)
                                }
                            </div>
                        </div>
                    </div>
                )}
            </Spring>

        </div>
    );
};

export default Work;