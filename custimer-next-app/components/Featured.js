"use client";
import Button from "./Button";
import Center from "./Center";
import styled from "styled-components";

const Bg = styled.div`
    background-color:#d28375;
    color: #FFF;
    padding: 50px 0;
`;
const Title = styled.h1`
    margin: 0;
    font-weight:normal;
    font-size:3rem;
    padding: 10px 0;
`;
const Desc = styled.p`
    color:#aaa;
    font-size: .8rem;
`;
const ColumnWrapper = styled.div`
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    gap: 40px;
    img{
        max-width: 100%;
    }
    align-items: center;
`;
const Column = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
`;
const ButtonsWrapper = styled.div`
    margin-top: 25px;
    display: flex;
    gap: 10px;
`;


export default function Featured() {
    return(
        <Bg>
            <Center>
                <ColumnWrapper>
                    <Column>
                        <div>
                            <Title>KMUTNB</Title>
                            <Desc style={{ color: "#fff" }}>
                                ยินดีต้อนรับเข้าสู่ ร้านสวัสดีการออนไลน์  KMUTNB เป็นเว็ปไซต์ที่นักศึกษาสามารถสั่งสินค้าเกี่ยวกับอุปกรณ์การเรียนและเครื่องแต่งกายต่างๆ
                                ทำให้นักศึกษาสามารถสั่งซื้อสินค้าได้สะดวกและรวดเร็วยิ่งขึ้น
                            </Desc>
                            <ButtonsWrapper>
                                <Button outline white size="m"> More</Button>
                                <Button primary size="l" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                                    <img src="\list 2.png" alt="categories icon" width="24" height="24" style={{ display: "inline-block", verticalAlign: "middle" }} />
                                    <span style={{ display: "inline-block", verticalAlign: "middle", marginLeft: "10px" }}>Shop by categories</span>
                                </Button>
                            </ButtonsWrapper>

                        </div>
                    </Column>
                    <Column>
                        <img src="https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png" alt="Product img"/>
                    </Column>
                 </ColumnWrapper>
            </Center>
        </Bg>
    )
    
}