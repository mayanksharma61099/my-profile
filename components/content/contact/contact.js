import ProfilePic from '@/components/image';
import style from '@/styles/content.module.css'
import ContactContent from './contact-content';

export default function ContactPage () {
    return (
        <div className='container'>
            <div className={`${style.outline} ${style.mobile_margin}`}>
                <div className='col-sm-12'>
                    <div className={style.content}>
                        <div className='row m-0'>
                            <div className= {`col-sm-4 ${style.profile_pic}`}> 
                                <ProfilePic />
                            </div>
                            <div className='col-sm-8'>
                                <div className='container'>
                                    <div className='tab-content'>
                                        <ContactContent />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}