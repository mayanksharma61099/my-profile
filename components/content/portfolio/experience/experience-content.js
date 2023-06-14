import style from '@/styles/content.module.css'
import React from 'react';

export default function ExperienceContent (props) {

    const myRes = props.work
    const listItems = myRes.map(myWork => {
        return <li>{myWork}</li>;
    });

    return (
        <div className= {`container ${style.experience}`} style={{marginTop: '7%'}}>
            <div className="col-sm-12">
                <div className="row">
                    <div className={`col-sm-9 ${style.experience_content}`}>
                        <h5 style={{marginLeft: '5%'}}>{props.position}</h5>
                        <p style={{marginLeft: '5%'}}>{props.company}</p>
                    </div>
                    <div className="col-sm-3">
                        <p style={{fontSize:'15px'}}>{props.dateRange}</p>
                    </div>
                    <ul>
                            <li style={{marginLeft: '8%'}}>{listItems}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}