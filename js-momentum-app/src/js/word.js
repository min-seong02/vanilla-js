const words = [
    {
      word:"opening ⭐",
      meaning:"공석,결원"
    },
    {
      word:"applicant ⭐⭐",
      meaning:"지원자,신청자" 
    },
    {
      word:"requirement ⭐⭐", 
      meaning:"필요조건,요건" 
    },
    {
      word:"meet ⭐⭐",
      meaning:"(필요,요구 등을)만족시키다"
    },
    {
      word:"qualified ⭐⭐",
      meaning:"자격있는,적격의"
    },
    {
      word:"candidate ⭐⭐",
      meaning:"후보자,지원자"
    },
    {
      word:"confidence ⭐",
      meaning:"확신,자신"
    },
    {
      word:"highly ⭐⭐",
      meaning:"매우, 대단히"
    },
    {
      word:"professional ⭐⭐",
      meaning:"전문적인,직업의"
    },
    {
      word:"interview ⭐⭐",
      meaning:"면접"
    }
  ];
  const word = document.querySelector("#vocabulary div:nth-child(2)");
  const meaning = document.querySelector("#vocabulary div:last-child");
  const todayWords = words[Math.floor(Math.random() * words.length)];

  word.innerText = todayWords.word;
  meaning.innerText = todayWords.meaning;
  









