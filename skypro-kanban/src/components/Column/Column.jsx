import Card from "../Card/Card";
import { Cards, ColumnTitle, ColumnTitleText, MainColumn } from "./Column.styled";

const Column = ({ title, cardList }) => {
    return (
        <MainColumn>

          <ColumnTitle>
            <ColumnTitleText>{title}</ColumnTitleText>
          </ColumnTitle> 

          <Cards>
            {cardList.map((card) => (
              <Card 
                key={card.id}
                id={card.id}
                topic={card.topic} 
                title={card.title}
                date={new Date().toLocaleDateString()}
                status={card.status}
              />))}   
          </Cards>             
         
        </MainColumn>
    )
}

export default Column;