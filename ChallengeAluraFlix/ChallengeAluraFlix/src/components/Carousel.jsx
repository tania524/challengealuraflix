import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
function Carousel({ color, listImage }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.7,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <Slider {...settings}>
      {listImage &&
        listImage.map(({ imagen, id, video }) => (
          <li key={id} className='cursor-pointer px-2'>
            <a href={video} target='_blank' rel='noreferrer'>
              <img
                className='border-2 rounded h-auto'
                style={{ borderColor: color }}
                src={imagen}
                alt={`Image ${id}`}
                width={350}
              />
            </a>
          </li>
        ))}
    </Slider>
  )
}

export default Carousel
