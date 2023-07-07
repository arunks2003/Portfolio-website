import { useEffect, useState } from 'react'
import AnimatedLetters from '../Animatedletters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faNode, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setletterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setletterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <><div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15}></AnimatedLetters>
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ratione, odit, facere, qui ea saepe repellendus aut rerum optio pariatur minus non? Consequuntur tempore praesentium rerum, in atque voluptatibus ipsa!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam omnis accusamus incidunt iusto eum quia molestiae possimus deserunt commodi ut vitae voluptatem, expedita, iure quasi dolor animi sapiente porro assumenda.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum expedita laudantium quod autem dolorum doloribus est fugit nemo! Cumque doloremque tempore itaque distinctio architecto explicabo quaerat molestias saepe quis fugiat.</p>
            </div>
            {/* now the right part */}
            <div className='stage-cube-cont'>
                <div className="cubeSpinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faNodeJs} color='green'></FontAwesomeIcon>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'></FontAwesomeIcon>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'></FontAwesomeIcon>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'></FontAwesomeIcon>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'></FontAwesomeIcon>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
            <Loader type='pacman' />
        </>

    )
}

export default About