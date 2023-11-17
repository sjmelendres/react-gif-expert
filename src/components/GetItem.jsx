/* eslint-disable react/prop-types */

export const GetItem = ({title,url}) => {
  return (
	<div className="card">
		<img src={url} alt={title}/>
		<p>{title}</p>
	</div>
  )
}
