
function Container(props) {
  return (
    <div className={`max-w-screen-xl	m-auto px-3 ${props.className}`}>{props.children}</div>
  )
}

export default Container