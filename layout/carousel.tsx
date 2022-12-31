import React from 'react'

type Props = {
    id: string;
    imgs?: string[];
    className?: string;
}

export default function Carousel(props: Props) {
    const images = props.imgs || ['https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg', 'https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg'];
    const imgs = images.map(
        (image) => {
            return {url: image, className: 'carousel-item'}
        }
    )
    imgs[0].className = imgs[0].className + " active"
    const id = props.id;
    
  return (
    <div id={id} className={`carousel slide ${props.className}`}>
        <div className="carousel-inner">
            {imgs.map(
                (img, index) => {
                    return (
                        <div className={img.className} key={index}>
                            <img src={img.url} className="d-block w-100" alt="..."/>
                        </div>
                    )
                }
            )}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}
