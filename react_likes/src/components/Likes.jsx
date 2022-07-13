const Likes = (props) => {
return (
  <div className="buttons">
    <button onClick={() => props.addLike()} className="plus">+</button>
    <button onClick={() => props.removeLike()} className="minus">-</button>
  </div>
)
}

export default Likes