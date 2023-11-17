import './index.css'

const BannerCardItem = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails
  return (
    <>
      <li className={`card ${className}`}>
        <h1 className="title">{headerText}</h1>
        <p className="para">{description}</p>
        <button type="button" className="btn">
          Show more
        </button>
      </li>
    </>
  )
}
export default BannerCardItem
