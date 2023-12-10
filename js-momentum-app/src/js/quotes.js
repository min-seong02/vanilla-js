const quotes = [
    {
      quote: "웃을 수 있을 때 언제든 웃어라. 공짜 보약이다",
      author: "Lord Byron",
      link: "https://ko.wikipedia.org/wiki/%EB%B0%94%EC%9D%B4%EB%9F%B0_%EA%B2%BD"
    },
    {
      quote: "얼굴이 계속 햇빛을 향하도록 하라. 그러면 당신의 그림자를 볼 수 없다.",
      author: "Helen Keller",
      link: "https://ko.wikipedia.org/wiki/%ED%97%AC%EB%A0%8C_%EC%BC%88%EB%9F%AC"
    },
    {
      quote: "인류에게는 정말로 효과적인 무기가 하나있다. 바로 웃음이다.",
      author: "Mark Twain",
      link: "https://ko.wikipedia.org/wiki/%EB%A7%88%ED%81%AC_%ED%8A%B8%EC%9B%A8%EC%9D%B8"
    },
    {
      quote: "천재는 거대한 인내일 뿐이다.",
      author: "Buffon",
      link: "https://ko.wikipedia.org/wiki/%EC%9E%94%EB%A3%A8%EC%9D%B4%EC%A7%80_%EB%B6%80%ED%8F%B0"
    },
    {
      quote: "천재란 자신에게 주어진 일을 하는 재능 있는 사람일 뿐이다.",
      author: "Thomas A. Edison",
      link: "https://ko.wikipedia.org/wiki/%ED%86%A0%EB%A8%B8%EC%8A%A4_%EC%97%90%EB%94%94%EC%8A%A8"
    },
    {
      quote: "남을 위해 사는 삶만이 가치 있는 삶이다",
      author: "Albert Einstein",
      link: "https://ko.wikipedia.org/wiki/%EC%95%8C%EB%B2%A0%EB%A5%B4%ED%8A%B8_%EC%95%84%EC%9D%B8%EC%8A%88%ED%83%80%EC%9D%B8"
    },
    {
      quote: "한 번만 살지만 제대로 하면 한 번이면 충분하다",
      author: "Mae West",
      link: "https://ko.wikipedia.org/wiki/%EB%A9%94%EC%9D%B4_%EC%9B%A8%EC%8A%A4%ED%8A%B8"
    },
    {
      quote: "사랑하지 않는 사람과는 절대 여행을 가지 마라",
      author: "Hemmingway",
      link: "https://ko.wikipedia.org/wiki/%EC%96%B4%EB%8B%88%EC%8A%A4%ED%8A%B8_%ED%97%A4%EB%B0%8D%EC%9B%A8%EC%9D%B4"
    },
    {
      quote: "우리는 산만함을 위해 방황하지만, 충족을 위해 여행한다",
      author: "Hilaire Belloc",
      link: "https://ko.wikipedia.org/wiki/%ED%9E%90%EB%A0%88%EC%96%B4_%EB%B2%A8%EB%9F%AD"
    },
    {
      quote: "성공한 사람이 아니라 가치있는 사람이 되기 위해 힘쓰라.",
      author: "Albert Einstein",
      link: "https://ko.wikipedia.org/wiki/%EC%95%8C%EB%B2%A0%EB%A5%B4%ED%8A%B8_%EC%95%84%EC%9D%B8%EC%8A%88%ED%83%80%EC%9D%B8"
    },
    {
      quote: "교육의 위대한 목표는 앎이 아니라 행동이다",
      author: "Herbert Spencer",
      link: "https://ko.wikipedia.org/wiki/%ED%97%88%EB%B2%84%ED%8A%B8_%EC%8A%A4%ED%8E%9C%EC%84%9C"
    },
    {
      quote: "젊음을 과소평가할 때 나이는 어리석고 부주의한 것이 되고만다.",
      author: "J. K. Rowling",
      link: "https://ko.wikipedia.org/wiki/J._K._%EB%A1%A4%EB%A7%81"
    },
  ];
  
  const quote = document.querySelector("#quote div:first-child");
  const author = document.querySelector("#quote div:nth-child(2)");
  const link = document.querySelector("#quote a");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
  link.setAttribute("href", `${todaysQuote.link}`);