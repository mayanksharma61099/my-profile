import style from '@/styles/content.module.css'
import HomeContent from './home-content';
import ProfilePic from '@/components/image';

export default function AllContents ()
{
    return (
        <div className={`container`}>
            <div className={`${style.mobile_margin} ${style.outline}`}>
                <div className={`col-sm-12`}>
                    <div className={`${style.content}`}>
                        <div className='row'>
                            <div className= {`col-sm-4`}>
                                <ProfilePic />
                            </div>
                            <div className='col-sm-8'>
                                <div className='container'>
                                    <div className='tab-content'>
                                        <HomeContent />
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