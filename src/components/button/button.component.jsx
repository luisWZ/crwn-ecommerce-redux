import './button.styles.scss'

const Button = ({ children, isBlue, ...otherProps }) => (
  <button className={`button ${isBlue && 'is-blue'}`} {...otherProps}>{children}</button>
)

export default Button
