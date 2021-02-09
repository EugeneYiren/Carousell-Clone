import PropTypes, { InferProps } from 'prop-types'
import clsx from 'clsx'

import styles from './inputGroup.module.css'

const InputGroup = ({
  name,
  value,
  onChange,
  type,
  placeholder,
  className,
  ...props
}): InferProps<typeof InputGroup.propTypes> => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={clsx(className, styles.inputWrapper)}
      {...props}
    />
  )
}

export default InputGroup

InputGroup.defaultProps = {
  type: 'text',
  placeholder: null,
  className: null,
}

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
}
