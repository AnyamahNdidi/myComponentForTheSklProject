import styled from "styled-components"

export const PlatformCode = styled.div`
   
  width:86%;
  height:380px;
  display:flex;
  padding-top:10px;

    @media screen and (max-width:900px){
      width: 100%;
      display:flex;
      flex-direction:column; 
      height:auto;
      }
      
    @media screen and (max-width:320px){
      width:100%;
      height:auto;
      display:flex;
      flex-direction:column;
    
      
    }

`

export const PlatformCode1 = styled.div`
  width:57%;
  height:370px;

  @media screen and (max-width:900px){
    width:100%;
   
    height:auto;
    
    }
    
  @media screen and (max-width:320px){
    width:100%;
    height:auto;
   
  }

`

export const PlatformCode2 = styled.div`
   width:43%;
  height:450px;   
  font-weight:bold;
  display:flex;
  flex-direction:column;

  h1{
    font-size:25px;
    font-weight:bold;
  }
 
  @media screen and (max-width:900px){
    width:100%;
   
    height:auto;

    h1{
      font-size:25px;
    }
  }
  @media screen and (max-width:320px){
    width:100%;
    height:auto;
    
    h1{
      font-size:25px;
    }
  }

`


