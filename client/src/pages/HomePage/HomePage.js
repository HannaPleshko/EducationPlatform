import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import style from './style.module.scss'

function HomePage() {
    return (
        <>
            <Header></Header>

            <div className={style.preview}>
                <div className={style.previewContent}>
                    <p className={style.textPlatform}>E-COURSE PLATFORM</p>
                    <h1>Learning and
                        teaching online,
                        made easy.</h1>
                    <p className={style.textAdditional}>Any subject, in any language, on any device, for all ages!</p>
                    <div className={style.btn} >About platform</div>
                    <div className={style.statictics}>
                        <p className={style.studentsCount}><span className={style.lightning}></span>600 <span>+</span></p>
                        <p className={style.students}>Students</p>
                    </div>
                </div>
                <div className={style.manImg}></div>
            </div>

            <div className={style.learnBlock}>
                <div className={style.learnBlockWidth}>
                    <div className={style.learnImg}></div>
                    <div className={style.learnBlockContent}>
                        <h2>Learn a language in a playful way</h2>
                        <p>Make learning programming languages more fun with mini-games</p>
                        <div className={style.wrapperIcons}>
                            <div className={style.sprint}></div>
                            <div className={style.tasks}></div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={style.knowledgeBlock}>
                <div className={style.knowledgeBlockContent}>
                    <h2>Increase your knowledge</h2>
                    <p>Traditional and new effective approaches to learning languages</p>
                    <div className={style.bookBtn}>Textbook →</div>
                </div>
                <div className={style.knowledgeImg}></div>
            </div>

            <div className={style.watchStatisticsBlock}>
            <div className={style.watchStatisticsWidth}>
            <div className={style.staticticsImg}></div>
            <div className={style.watchStatisticsBlockContent}>
                    <h2>Watch your progress every day</h2>
                    <p>Save statistics on your achievements and mistakes</p>
                    <div className={style.bookBtn}>Statistics →</div>
                </div>
            </div>
            </div>

            <Footer></Footer>

        </>
    )
}

export default HomePage