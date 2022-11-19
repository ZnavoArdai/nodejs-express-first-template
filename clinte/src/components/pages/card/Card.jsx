
const Card = ({item}) => {
  return (
<div class="card" >
  <div class="card-body">
    <h5 class="card-title"> {item.id}{item.name}</h5>
  </div>
</div>
  )
}

export default Card