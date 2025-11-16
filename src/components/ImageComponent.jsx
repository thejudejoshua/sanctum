const ImageComponent = (props) => {
  return (
	  <img
		  src={props.src}
		  width={props.width || ''}
		  alt={props.alt || ''}
		  className={props.className}
	  />
  )
}

export default ImageComponent