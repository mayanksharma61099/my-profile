import Image from "next/image";
import Link from "next/link";
import style from '@/styles/content.module.css';

export default function ContactDetails (props) {
    return (
        <div className='col-sm-12'>
                    <div className='row'>
                        <div className='col-sm-2' style={{textAlign:'right'}}>
                            <Link href={props.link}><Image src={props.image} width={50} height={50}/></Link>
                        </div>
                        <div className='col-sm-10'>
                            <h6 style={{marginTop: '2%'}}><Link href={props.link} className={style.contact}> {props.name} </Link></h6>
                        </div>
                    </div>
                </div>
    );
}