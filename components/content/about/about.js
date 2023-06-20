import style from '@/styles/content.module.css'
import About from './about-content';
import ProfilePic from '@/components/image';

export default function AboutContent () {
    return (
        <div className='container'>
            <div className={`${style.mobile_margin} ${style.outline}`}>
                <div className='col-sm-12'>
                    <div className={style.content}>
                        <div className='row m-0'>
                            <div className= {`col-sm-4 ${style.profile_pic}`}> 
                                <ProfilePic />
                            </div>
                            <div className='col-sm-8'>
                                <div className='container'>
                                    <div className='tab-content'>
                                        <About />
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