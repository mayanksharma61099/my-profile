import style from '@/styles/content.module.css'

export default function EducationContent (props) {

    const course = props.learning
    const listLearnings = course.map(myLearnings => {
        return <li>{myLearnings}</li>;
    });

    return (
        <div className= {`container ${style.experience}`} style={{marginTop: '7%'}}>
            <div className="col-sm-12">
                <div className="row">
                    <div className={`col-sm-9 ${style.experience_content}`}>
                        <h5 style={{marginLeft: '5%'}}>{props.course} | {props.date}</h5>
                        <p style={{marginLeft: '5%'}}>{props.university}</p>
                    </div>
                    <div className="col-sm-3">
                        <p style={{fontSize:'15px'}}> ( GPA: {props.GPA})</p>
                    </div>
                    <ul>
                            <li style={{marginLeft: '8%'}}>{listLearnings}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}