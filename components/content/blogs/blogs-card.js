import style from '@/styles/content.module.css'
import Link from 'next/link';

export default function BlogsCards (props) {

    return (
        <div className={`card ${style.project_card}`}>
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <Link href={`${props.blog_page}`}><button className='btn btn-dark'>Read More</button></Link>
            </div>
        </div>
    );
}