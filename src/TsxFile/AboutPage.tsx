

const About = () => {
    return (
        <div id="big" style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: 'Grenze Gotisch', color: 'aliceblue', fontSize: '9rem', height: '30%', width: '100%', display: 'flex', justifyContent: 'center' }} className="color-change-text">
                About Me
            </div>
            <div id="p" style={{
                fontFamily: 'Grenze Gotisch', color: 'aliceblue', fontSize: '2.5rem', paddingLeft: '15px', height: '70%', width: '80%',
                display: 'flex', flexDirection: 'column', marginLeft: '80px'
            }}>
                {/* <span className="type type-set-1"> Despite Majoring in Chinese, I always had a strong interest in iT related field. </span>  */}
                {/* span เป็นการเน้นคำพิเศษในบรรทัดไม่ให้ขึ้นบรรทัดใหม่หรือแบ่งกลายเป็นบล็อค */}
                <div className="type type-set-1"> Hi i'm jirat, Despite Majoring in Chinese, I always had a strong interest in iT related field. </div> 
                <div className="type type-set-2"> After graduation, I focused my time on learning front-end development</div>
                <div className="type type-set-3"> and became experience in react-vite framework</div>
                <div className="type type-set-4">but I'm not limited to it, as I always open to learn a new thing </div>
                <div className="type type-set-5">to expand my skill set.</div>
                {/* <pre className="type type-set-x"> Despite Majoring in Chinese, I always had a strong interest in iT related field.
                    After graduation, I focused my time on learning front-end development and
                    became experience in react-vite framework, but I'm not limited to it, 
                    as I always open to learn a new thing to expand my skill set.
                </pre> */}
            </div>
        </div>
    )
}
export default About