import React from 'react';
import Image from 'next/image';
import { clients } from './clients';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';


SwiperCore.use([Navigation, Pagination]);

const Testimonials = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="m-auto text-center mb-8">
                    <h2 className="text-2xl font-bold md:text-4xl">What My Clients Say:</h2>
                </div>
                <Swiper
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={8}
                    autoplay={{ delay: 8000 }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                        },
                        1024: {
                            slidesPerView:3,
                        }
                    }}
                >
                    {clients.map((c, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <blockquote className="bg-gray-light p-8">
                                    <div className="flex items-center">
                                        <Image
                                            src={c.image}
                                            alt={c.alt}
                                            width={64}
                                            height={64}
                                            className="h-16 w-16 rounded-full object-cover"
                                        />
                                        <div className="ml-4 text-sm">
                                            <p className="font-semibold text-black">{c.name}</p>
                                            <p className="mt-1 text-black">{c.title}</p>
                                        </div>
                                    </div>
                                        <FontAwesomeIcon
                                            icon={faQuoteLeft}
                                        style={{ fontSize: 26, color: "#017AFF" }}
                                        className="mt-4"
                                        />
                                    <p className="relative text-gray-dark">
                                        {c.review}
                                    </p>
                                </blockquote>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;