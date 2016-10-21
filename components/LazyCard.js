import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import autoBind from 'react-auto-bind'
import shallowCompare from 'react-addons-shallow-compare'

export default class LazyCard extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      image: props.lazyLoad ? props.defaultImage : (props.defaultImage || props.image)
    }

    autoBind(this)
  }

  componentDidMount () {
    if (this.props.autoLoad) this.load()
  }

  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  load () {
    const {image} = this.props
    if (image && this.state.image !== image) {
      const img = new Image()
      img.src = image
      img.onload = () => {
        this.setState({
          image
        })
      }
    }
  }

  render () {
    const {width, image, attributes, children, title, className} = this.props

    const style = {}

    if (width) style.width = width
    if (this.state.image) style.backgroundImage = `url('${this.state.image}')`

    const mainClass = classNames('rs-img', className, {
      'rs-loaded': this.state.image === image
    })

    return (
      <div
        className={mainClass}
        style={style}
        title={title}
        {...attributes}
      >{children}</div>
    )
  }
}

LazyCard.propTypes = {
  className: PropTypes.string,

  // additional attributes for the root node
  attributes: PropTypes.object,

  // should the component automatically lazy Load
  autoLoad: PropTypes.bool,

  // width of slide component
  width: PropTypes.number,

  // url of the main image
  image: PropTypes.string,

  // url of placeholder image
  defaultImage: PropTypes.string,

  // title for the image
  // serves similar to alt attribute for image
  // only for the purpose of SEO
  title: PropTypes.string,

  lazyLoad: PropTypes.bool,

  children: PropTypes.oneOfType([
    PropTypes.array, PropTypes.object
  ])
}

LazyCard.defaultProps = {
  title: '',
  attributes: {},
  autoLoad: false,
  lazyLoad: true
}
