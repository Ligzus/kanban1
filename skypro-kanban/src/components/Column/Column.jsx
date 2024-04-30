import Card from "../Card/Card";

const Column = ({ title, cardList }) => {
    return (
        <div className="main__column">
              <div className="column__title">
                <p>{title}</p>
              </div>
              <div className="cards">
                {cardList.map((card) => (
                <Card 
                  key={card.id}
                  category={card.category} 
                  title={card.title}
                  date={new Date().toLocaleString()}
                  status={card.status}
                />))}                
              </div>
            </div>
    )
}

export default Column;