import style from '@/styles/content.module.css'
import Link from 'next/link';

export default function Cards (props) {

    const details = props.details
    const context = details.map(projectPoints => {
        return <li>{projectPoints}</li>;
    });

    if(props.tech=='web')
    {
        return (
            <div className={`card ${style.project_card}`}>
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <div className="card-text">
                        <ul>
                            {context}
                        </ul>
                    </div>
                    <Link href={props.link}><button className='btn btn-dark'>Visit Link</button></Link>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className={`card ${style.project_card}`}>
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <div className="card-text">
                        <ul>
                            {context}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}