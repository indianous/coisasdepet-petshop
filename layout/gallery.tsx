import React from 'react'

interface Props {
  id: string
  imgs: string[]
  className?: string
}

export default function Gallery (props: Props): JSX.Element {
  console.log(props.imgs)
  const images = props.imgs
  const imgs = images.map(
    (image: string) => {
      return { url: image, className: 'carousel-item' }
    }
  )
  imgs[0].className = imgs[0].className + ' active'
  const id = props.id

  return (
    <>
    <div id={id} className="carousel slide">
      <div className="carousel-outer">
        <ul className="carousel-inner">
              {
                  imgs.map(
                    (img, index) => {
                      return <li key={index} className={img.className}>
                              <img className='d-block w-100' src={img.url} alt="..." />
                          </li>
                    }
                  )
              }
        </ul>
        <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <ul className="carousel-indicator d-flex list-unstyled">
      {
        imgs.map(
          (img, index) => {
            return <li
            key={index}
            data-bs-target={`#${id}`}
            data-bs-slide-to={index}
            aria-label={`Slide ${index}`}
            className="">
              <img src={img.url} className="w-100" alt={`Image ${index}`} />
            </li>
          }
        )
      }
    </ul>
    </>
  )
}
