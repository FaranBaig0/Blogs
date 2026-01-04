export const getNews = async()=>{
    const response= await fetch('https://newsapi.org/v2/top-headlines?country=us&pageSize=6&page=1&category=business&apiKey=3935f35adab046eb909052a6c6e06839' ,{method:"GET"});
    return await response.json();
    
}