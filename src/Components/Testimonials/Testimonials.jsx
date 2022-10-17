import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'

function Testimonials() {
    const Clients = [
        {
            img: profilePic1,
            review:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum dapibus est, sed sagittis ligula vestibulum quis. Fusce at leo volutpat risus venenatis cursus. Curabitur turpis nulla, lacinia et libero vitae, sagittis condimentum lorem. Sed ut eleifend erat. Cras ac vestibulum mauris. Maecenas faucibus eros turpis, at auctor nunc gravida in. Fusce rhoncus feugiat tellus in tincidunt. Integer luctus sed est ac consequat. Quisque lobortis malesuada massa at placerat. Nulla facilisi."
        },
        {
            img: profilePic2,
            review:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum dapibus est, sed sagittis ligula vestibulum quis. Fusce at leo volutpat risus venenatis cursus. Curabitur turpis nulla, lacinia et libero vitae, sagittis condimentum lorem. Sed ut eleifend erat. Cras ac vestibulum mauris. Maecenas faucibus eros turpis, at auctor nunc gravida in. Fusce rhoncus feugiat tellus in tincidunt. Integer luctus sed est ac consequat. Quisque lobortis malesuada massa at placerat. Nulla facilisi."
        },
        {
            img: profilePic3,
            review:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum dapibus est, sed sagittis ligula vestibulum quis. Fusce at leo volutpat risus venenatis cursus. Curabitur turpis nulla, lacinia et libero vitae, sagittis condimentum lorem. Sed ut eleifend erat. Cras ac vestibulum mauris. Maecenas faucibus eros turpis, at auctor nunc gravida in. Fusce rhoncus feugiat tellus in tincidunt. Integer luctus sed est ac consequat. Quisque lobortis malesuada massa at placerat. Nulla facilisi."
        },
        {
            img: profilePic4,
            review:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum dapibus est, sed sagittis ligula vestibulum quis. Fusce at leo volutpat risus venenatis cursus. Curabitur turpis nulla, lacinia et libero vitae, sagittis condimentum lorem. Sed ut eleifend erat. Cras ac vestibulum mauris. Maecenas faucibus eros turpis, at auctor nunc gravida in. Fusce rhoncus feugiat tellus in tincidunt. Integer luctus sed est ac consequat. Quisque lobortis malesuada massa at placerat. Nulla facilisi."
        },
    ]
    return (
        <div className="t-wrapper">
            <div className="t-heading">
                <span>Client always get </span>
                <span> Exceptional work</span>
                <span> from me...</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>
            
            {/* slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{clickable: true}}

            >
                {Clients.map((client, index) =>{
                    return(
                        <SwiperSlide key={index}>
                            <div className="testimonials">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Testimonials