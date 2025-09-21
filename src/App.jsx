import { useState,useEffect } from 'react';
import { getNews } from './api';
import './App.css'
import Content from './components/content'
import Newscard from './components/Newscard';
import Navbar from './components/navbar'
import Sidebar from './components/Sidebar';
import Footer from './components/footer';

function App() {
 const [news,setNews]= useState(null); 

 useEffect(() => {
   getNews().then((res)=> setNews(res.articles))
 
 }, [])
 
  return (
    <>
      <Navbar/>
      <Content/>
    {news ? news.map((e)=> <Newscard title={e.title} date={e.publishedAt} url={e.url} author={e.author} description={e.description} image={e.urlToImage} /> ):  <p>No News Data</p>}
    {/* {news ? news.map((e)=> <Sidebar title={e.title} date={e.publishedAt} url={e.url} author={e.author} description={e.description} image={e.urlToImage} /> ):  <p>No News Data</p>} */}
    
      <Sidebar />
     <Footer/>
    </>
  )
}

export default App
