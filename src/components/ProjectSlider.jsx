// Slider for project media supporting mixed images and videos with accessibility labels.
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function ProjectSlider({ slides = [], title }) {
  const [enlarged, setEnlarged] = useState(null)
  const media = slides && slides.length > 0 ? slides : [{ type: 'placeholder', src: '', alt: 'No media available' }]

  return (
    <>
      {/* Mobile: simple horizontal scroller to guarantee visibility on small screens */}
      <div className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-3 pb-3 -mx-2 px-2">
        {media.map((slide, idx) => (
          <div
            key={slide.src || slide.alt || idx}
            className="snap-center w-[calc(100%-32px)] flex-shrink-0 rounded-2xl overflow-hidden border border-primary/10 shadow-glow bg-white"
            style={{ minHeight: '260px' }}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/5 via-white to-primary/5 flex items-center justify-center" style={{ minHeight: '240px' }}>
              {slide.type === 'video' ? (
                <video
                  className="w-full h-full object-contain"
                  controls
                  preload="metadata"
                  playsInline
                  poster={slide.poster || ''}
                >
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : slide.type === 'placeholder' ? (
                <p className="text-sm text-slate-500">No media available</p>
              ) : (
                <img
                  src={slide.src}
                  alt={slide.alt || `${title} slide`}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className="w-full h-full object-contain cursor-zoom-in"
                  style={{ minHeight: '240px' }}
                  onClick={() => setEnlarged(slide)}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop / tablet: Swiper slider */}
      <Swiper
        aria-label={`${title} media slider`}
        modules={[Navigation, Pagination, A11y, Keyboard]}
        spaceBetween={12}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        autoHeight
        observer
        observeParents
        observeSlideChildren
        className="hidden md:block h-full min-h-[260px] rounded-2xl overflow-hidden border border-primary/10 shadow-glow bg-white"
        style={{ width: '100%', minHeight: '260px' }}
      >
        {media.map((slide, idx) => (
          <SwiperSlide key={slide.src || slide.alt} className="bg-white flex">
            <div
              className="w-full h-full bg-gradient-to-br from-primary/5 via-white to-primary/5 flex items-center justify-center"
              style={{ minHeight: '240px' }}
            >
              {slide.type === 'video' ? (
                <video
                  className="w-full h-full object-contain"
                  controls
                  preload="metadata"
                  playsInline
                  poster={slide.poster || ''}
                >
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : slide.type === 'placeholder' ? (
                <p className="text-sm text-slate-500">No media available</p>
              ) : (
                <img
                  src={slide.src}
                  alt={slide.alt || `${title} slide`}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className="w-full h-full object-contain cursor-zoom-in"
                  style={{ minHeight: '240px' }}
                  onClick={() => setEnlarged(slide)}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox for enlarged images */}
      {enlarged && enlarged.type !== 'placeholder' ? (
        <div
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} enlarged media`}
          onClick={() => setEnlarged(null)}
        >
          <button
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/80 text-slate-800 font-bold"
            aria-label="Close enlarged media"
            onClick={() => setEnlarged(null)}
          >
            ×
          </button>
          {enlarged.type === 'video' ? (
            <video className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl" controls autoPlay muted>
              <source src={enlarged.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={enlarged.src}
              alt={enlarged.alt || `${title} enlarged`}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl object-contain"
            />
          )}
        </div>
      ) : null}
    </>
  )
}

export default ProjectSlider
