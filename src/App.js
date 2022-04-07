import React,{useState} from 'react';
import SearchBar from './SearchBar';
import Headline from './Headline';

function News()
{
  let [value,setValue] = useState("");
  let [search,setSearch] = useState("tesla");
  
  async function f1()
  {
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=d570890f88784334ba8bee2d323a46b6`);
    let result = await response.json();
    let finalResult = result.articles.map((a) => { return (<><div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" src={a.urlToImage} alt="ImageLoading.."/>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{a.title}</div>
      <p class="text-gray-700 text-base">
        {a.description}
      </p>
      <a class  = "font-bold"href={a.url}>Read more</a>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div>
  </div>
  </>)})
  setValue(finalResult);
  }
  f1();
  return(<><div><SearchBar/></div>
  <div><Headline/></div>
  <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">{value}</div></>)
}










export default News;
