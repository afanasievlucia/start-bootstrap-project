import Post from "./Post";
import { useState } from "react";

const Main = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Man must explore, and this is exploration at its greatest',
      subtitle: 'Problems look mighty small from 150 miles up',
      dayPost: 'September 24, 2021'
    },
    {
      id: 2,
      title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
      subtitle: '',
      dayPost: 'September 18, 2021'
    },
    {
      id: 3,
      title: "Science has not yet mastered prophecy",
      subtitle: 'We predict too much for the next year and yet far too little for the next ten.',
      dayPost: 'August 24, 2021'
    },
    {
      id: 1,
      title: 'Failure is not an option',
      subtitle: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
      dayPost: 'July 8, 2021'
    }
  ])

  return (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          {posts.map((post) => (
            <Post post={post}/>
          ))}
          <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main