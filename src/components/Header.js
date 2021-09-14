import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
    const onClick = (e) => {
        console.log(e)
    }
    
    return (
        <header className='header'>
            <h1 style={{ color: '#494949', textAlign: 'center'}}>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

Header.deafaultProps = {
    title: 'Meeting Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired

}

export default Header
