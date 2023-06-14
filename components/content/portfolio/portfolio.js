import style from '@/styles/content.module.css'
import PortfolioContent from './portfolio-content';
import ProfilePic from '@/components/image';

export default function PortfolioPage () {
    return (
        <div className= {`container`}>
            <div className={style.outline}>
                <div className='col-sm-12'>
                    <div className={style.content}>
                        <div className='row'>
                            <div className='col-sm-3'>
                                <ProfilePic />
                            </div>
                            <div className='col-sm-9'>
                                <div className='tab-content'>
                                    <PortfolioContent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}