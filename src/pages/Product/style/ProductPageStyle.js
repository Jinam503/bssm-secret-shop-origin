import styled from "styled-components";

export const ItemsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const AddToCartButton = styled.button`
  width: fit-content;
  height: fit-content;

  padding: 25px;

  font-size: 16px;

  outline: none;

  background-color: #8d8c9a;
  border: none;
  border-radius: 8px;
  color: white;

  cursor: pointer;

  transition: ease-out 0.25s;

  &:hover {
    transform: scale(1.05);
  }
`;
export const TitleDiv = styled.div`
  margin-bottom: 50px;
`;
export const BoldText = styled.p`
  font-size: ${(props) => (props.size ? props.size : "14px")};
  font-weight: 1000;
`;
export const LightText = styled.p`
  font-size: ${(props) => (props.size ? props.size : "14px")};
`;
export const ItemStock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  height: 50px;
`;
export const Item = styled.div`
  display: flex;
  background-color: white;
  padding: 10px;
  width: 100%;
  align-items: center;
  border-top: ${(props) => (props.index === 0 ? "1px solid #cccccc" : "")};
  border-bottom: 1px solid #cccccc;

  &:hover {
    background-color: #eeeeee;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  margin-bottom: 150px;
  width: 100%;
  gap: 50px;
`;
export const CategoryDiv = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
`;
export const CategoryItem = styled.div`
  height: ${(props) => (props.isSelected ? "60px" : "50px")};
  display: flex;
  align-items: center;
  border-top: ${(props) => (props.index === 0 ? "1px solid #dddddd" : "")};
  border-bottom: 1px solid #dddddd;
  padding-left: 10px;
  box-shadow: 30px;

  transition: ease-out 0.25s;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "#dddddd" : "")};
`;

export const AdvertiseDiv = styled.div`
  min-height: 150px;
  padding: 20px 0 20px 10px;
  justify-content: center;
  background-color: #d0f1ff;
  width: 100%;
  margin-bottom: 20px;
`;

export const AdverTiseItem = styled.div`
  margin-top: 10px;
`;
