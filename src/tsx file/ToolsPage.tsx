import { Popover } from 'antd';
const ToolsPage = () => {
    const htmlC = (
        <div className='popContent'>
            <p>The standard language used to create and structure content on the web.</p>
            <p className='popLine'> It uses tags to define elements like headings, paragraphs, images,</p>
            <p className='popLine'>and links, forming the backbone of every webpage.</p>
        </div>)
    const htmlT = (
        <div className='popTitle'>
            Html
        </div>)


    const gitC = (
        <div className='popContent'>
            <p>A platform for hosting and managing code. It helps developers track changes,</p>
            <p className='popLine'>collaborate on projects, and share their work with others using version control.</p>
            <p className='popLine'></p>
        </div>)
    const gitT = (
        <div className='popTitle'>
            GitHub
        </div>)


    const cssC = (
        <div className='popContent'>
            <p> A stylesheet language used to style the layout and appearance of web pages.</p>
            <p className='popLine'> It controls things like colors, fonts, spacing, and positioning </p>
            <p className='popLine'>to make websites look visually appealing.</p>
        </div>)
    const cssT = (
        <div className='popTitle'>
            CSS
        </div>)



    const vscodeC = (
        <div className='popContent'>
            <p>A lightweight, customizable code editor with support for multiple languages, </p>
            <p className='popLine'>extensions, and built-in features like IntelliSense, version control,</p>
            <p className='popLine'>and debugging tools. Ideal for both beginner and advanced developers.</p>
        </div>
    );
    const vscodeT = (
        <div className='popTitle'>
            VS-code
        </div>
    )
    const antdC = (
        <div className='popContent'>
            <p>A React UI framework used for building modern, responsive web applications.</p>
            <p className='popLine'>It provides pre-built, customizable components like buttons, forms, and tables, </p>
            <p className='popLine'>helping developers create consistent and visually appealing designs quickly.</p>
        </div>)
    const antdT = (
        <div className='popTitle'>
            Antd
        </div>)


    return (
        <div id="big" style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: 'Grenze Gotisch', color: 'aliceblue', fontSize: '9rem', height: '25%', width: '100%', display: 'flex', justifyContent: 'center' }} className="color-change-text">
                <span style={{ fontFamily: 'Math', color: 'aliceblue', fontSize: '10rem', letterSpacing: "-15px" }} className="color-change-text">
                    T</span>
                ools
            </div>
            <div id="p" style={{
                fontFamily: 'Grenze Gotisch', color: 'aliceblue', fontSize: '2.5rem',
                // paddingLeft: '15px', 
                height: '70%', width: '100%',
                display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>
                <div id="1" style={{ height: "50%", width: '80%', display: 'flex', flexDirection: 'row', paddingTop: '10%', justifyContent: 'center', gap: '3%' }}>
                    <Popover content={htmlC} title={htmlT}>
                        <img src="html-5.svg" className="img fadeIn" />
                    </Popover>
                    <Popover content={gitC} title={gitT}>
                        <img src="github-color.svg" className="img fadeIn" style={{ width: '28%' }} />
                    </Popover>
                    <Popover content={cssC} title={cssT}>
                        <img src="css3-logo.svg" className="img fadeIn" style={{ width: '35%' }} />
                    </Popover>
                </div>
                <div id="2" style={{
                    height: "50%", width: '80%', display: 'flex', flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '5%'
                }}>
                    <Popover content={vscodeC} title={vscodeT}>
                        <img src="vs-code.svg" className="img fadeIn" />
                    </Popover>
                    <Popover content={antdC} title={antdT}>
                        <img src="antdLogo.png" className="imgPng fadeIn" />
                    </Popover>

                </div>
            </div>
        </div>
    )
}
export default ToolsPage