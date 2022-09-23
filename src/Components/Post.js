import React from 'react'

export default function Post({post, info}) {
    const {name:author} = info;
    return (
    <div>
        <h2>DAnh sacsh bai viet</h2>
        {post.map(({title,content}, index) =>{
            return (
                <div key={index}>
                    <h3>{title}</h3>
                    <p>Author: {author}</p>
                    <p>{content}</p>
                </div>
            );
        })}
    </div>
  )
}
