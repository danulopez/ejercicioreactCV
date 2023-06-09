import PropTypes from 'prop-types';

const About = ({ about }) => {
return (
<>
<ul>
{about.map((element, i) => {
return <li key={i}>{element.info}</li>;
})}
</ul>
</>
);
};

About.propTypes = {
about: PropTypes.array.isRequired,
};

export default About;