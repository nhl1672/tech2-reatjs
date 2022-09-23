import React from 'react'
import Post from './Post';

export default function MemberInfo(props) {
    const {info, images} = props;
    const {name, email, phone} = info;
    const imageJsx = images.map(({link,width,height,alt},index) => {
        const attribute = {
            src: link,
        }
        if(width!==undefined){
            attribute.width = width;
        }
        if(height!==undefined){
            attribute.height = height;
        }
        if(alt!==undefined){
            attribute.alt = alt;
        }
        return (
        <p key={index}>
            <img src={link} width={width} height={height}></img>
            </p>
        )
    })
  return (
    <div style={{margin:'3%'}}>
        <h2>Thong tin ca nhan</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone:{phone}</p>
        <h2>Hình ảnh</h2>
        {imageJsx}
        <Post {...props}/>
    </div>
  )
}
