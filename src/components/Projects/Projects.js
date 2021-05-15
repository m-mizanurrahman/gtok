import React from 'react';
import review from '../../images/project-1/review.png'
import services from '../../images/project-1/services.png'
import banar from '../../images/project-1/banar.png'
import transport from '../../images/project-2/transport.png'
import search from '../../images/project-2/search.png'
import result from '../../images/project-2/result.png'
import home from '../../images/project-3/Home.png'
import member from '../../images/project-3/member.png'
import detail from '../../images/project-3/detail.png'


const Projects = () => {
    return (
        <div className="m-5">
            <div>
                <h1 className="text-center mt-5 mb-5 text-dark">Engange with Lets Gtok</h1>
            </div>
            <h6>Some Features of Lets Gtok: GTOK supports you share your thoughts and connect to those similar mindsets or experiences.</h6>
            <ul className="m-5">
                
                                    <li>Want to discuss sports, then do chat only with sports lovers</li>
                                    <li>Want to discuss food habits, then chat with food enthusiasts</li>
                                    <li>Want to discuss a business idea, then do chat only with passionate people
</li>
                                    <li>User can express his feelings without identity</li>
                                    <li>User can earn after with a number of followers and post</li>
                                </ul>
        </div>
    );
};

export default Projects;