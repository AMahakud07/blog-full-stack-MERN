// import '../App.css';


export default function Post({title,summary,cover,content,createdAt}){
return (
    <div className='post'>
        <div className='image'>
        <img src='https://beebom.com/wp-content/uploads/2023/06/Diablo-4.jpg?resize=706%2C486&quality=75&strip=all' alt=''></img>
        </div>
        <div className='text'>
          <h2>{title}</h2>
          <p className='info'>
            <a className='author'>Abhishek mahakud</a>
            <time>{createdAt}</time>
          </p>
          <p className='summary'>{summary}</p>
        </div>
      </div>
)
}