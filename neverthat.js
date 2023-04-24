const contents = [
      {
        summary: "thisisneverthat® <br>  × Public Release", 
        detail:"Public Release는 DJ이자 디자이너로 알려진 Eugene Whang의 레코드 레이블로, 2009년부터 LP, EP, 리믹스 등 27여개의 다양한 음반을 선보여왔습니다. ", 
        date: "02. 08. 2023."
      },

      {
        summary: "thisisneverthat® 2023 Sunglasses Collection", 
        detail:"Available In-store 3/17(Fri.) 12pm KST and Online 3/17(Fri.) 10am KST", 
        date: "03. 14. 2023."
      },   
       {
        summary: "Champion® × thisisneverthat®", 
        detail:"Available 3/24(Fri.) 12pm KST and Online 3/24(Fri.) 10am KST JP In-store and Online 3/24(Fri.) 12pm JST", 
        date: "03. 20. 2023."
      },
      {
        summary: "thisisneverthat® × NO COFFEE™", 
        detail:"NO COFFEE는 “Life with good coffee”를 테마로 커피의 라이프 스타일을 제안합니다.NO COFFEE, NO LIFE의 라이프 스타일을 담은 디스이즈네버댓과 노 커피의 캡슐 컬렉션을 만나보세요.", 
        date: "03. 14. 2022."
      },
      {
        summary: "thisisneverthat® <br>  × Grateful Dead", 
        detail:"그레이트풀 데드 특유의 자유로운 아이덴티티와 디스이즈네버댓의 빈티지한 감도가 조합된 매력적인 상품을 지금 바로 만나보세요.", 
        date: "10. 19. 2022."
      },
   
      {
        summary: "BlackEyePatch × thisisneverthat®", 
        detail:"디스이즈네버댓 x 블랙아이패치 협업 컬렉션은 코치 재킷과 후디, 웜업 팬츠, 티셔츠, 버킷햇 등으로 구성되어 있습니다. ", 
        date: "10. 03. 2022"
      },
   

]

const summaryTag = document.querySelector("section.contents h1.summary")
const dateTag = document.querySelector("section.contents h2.date")
const detailTag = document.querySelector("section.contents p")

const mainImg = document.querySelector("figure.images img")

const leftButton = document.querySelector("img.arrow-left")
const rightButton = document.querySelector("img.arrow-right")

let currentNumber = 1;

leftButton.addEventListener("click", function(){
    console.log(currentNumber);

    currentNumber--;
    if(currentNumber < 1){
      currentNumber = 6;
    }

    dateTag.innerHTML = currentNumber;
    mainImg.src = `image${currentNumber}.svg`;

    summaryTag.innerHTML = contents[currentNumber-1].summary;
    detailTag.innerHTML = contents[currentNumber-1].detail;
    dateTag.innerHTML = contents[currentNumber-1].date;
})

rightButton.addEventListener("click", function(){
    console.log(currentNumber);

    currentNumber++;
    if(currentNumber > 6){
      currentNumber = 1;
    }

    dateTag.innerHTML = currentNumber;
    mainImg.src = `image${currentNumber}.svg`;

    summaryTag.innerHTML = contents[currentNumber-1].summary;
    detailTag.innerHTML = contents[currentNumber-1].detail;
    dateTag.innerHTML = contents[currentNumber-1].date;
})