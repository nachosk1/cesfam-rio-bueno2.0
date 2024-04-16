import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { imagesBanner } from '../../../constant';
import Picture from '../utils/Picture';

export default function Banner() {
    return (
        <section>
            <Swiper
                spaceBetween={5}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[40vh] md:h-[65vh] w-full"
            >
                {imagesBanner.map(({ id, image }) => (
                    <SwiperSlide className="h-[40vh] md:h-[65vh] w-full" key={id}>
                        <Picture
                            url={image}
                            alt={`Banner Image ${id}`}
                            style={'w-full h-[40vh] md:h-[65vh] object-center object-cover'}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
