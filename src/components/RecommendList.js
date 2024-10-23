const RecommendList = (props)=>{
    return (
        <div>
            <ul>
            {props?.cards?.map(recCard=>
              <li key={recCard.card.info.id}>{recCard.card.info.name}</li>
            )}
            </ul>
            
        </div>
    )
}


export default RecommendList;