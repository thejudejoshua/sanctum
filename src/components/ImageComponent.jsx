const ImageComponent = (props) => {
  return (
	  <img
		  src={props.src}
		  width={props.width}
		  alt={props.alt || ''}
	  />
  )
}

export default ImageComponent