import PropTypes from 'prop-types';
import './SectionHeader.css'; // We'll create this CSS file

const SectionHeader = ({ title, subtitle, className, variant = 'default' }) => {
  return (
    <div className={`section-header ${className} ${variant}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'light', 'dark', 'accent'])
};

export default SectionHeader;