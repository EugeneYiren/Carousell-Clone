import Button from '@material-ui/core/Button'
import PropTypes, { InferProps } from 'prop-types'

const ButtonComponent = ({
  children,
  ...props
}): InferProps<typeof ButtonComponent.propTypes> => {
  return (
    <Button variant="contained" disableFocusRipple {...props}>
      {children}
    </Button>
  )
}

export default ButtonComponent

ButtonComponent.defaultProps = {}

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
}
