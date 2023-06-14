import style from '@/styles/content.module.css'
import About from './about-content';
import ProfilePic from '@/components/image';

export default function AboutContent () {
    return (
        <div className='container'>
            <div className={style.outline}>
                <div className='col-sm-12'>
                    <div className={style.content}>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <ProfilePic />
                            </div>
                            <div className='col-sm-8'>
                                <div className='tab-content'>
                                    <About />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}