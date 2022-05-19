import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import contact from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section className='py-10' style={{
            background: `url(${contact})`
        }}>
            <h3 className='text-xl text-primary font-bold text-center py-2'>Contact Us</h3>
            <h2 className='text-3xl text-white text-center py-4'>Make an appointment Today</h2>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-md	" />
                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-md	" />
                <textarea className="textarea w-full max-w-md" placeholder="Your massage"></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default ContactUs;