import React from 'react';
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';

const CountUped = () => {
    return (
        <div classname="bg-slate-400">
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  my-4 bg-orange-600 rounded-lg py-4'>

                <div className=' text-white text-center py-16  font-bold text-5xl bg-blue-500 rounded-full mx-16'>

                    <CountUp end={100} redraw={true}>
                        {({ countUpRef, start }) => (
                            <ReactVisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                        )}
                    </CountUp>+ <br />
                    <span className='text-3xl'>Our Clients </span>
                </div>
                <div className=' text-white text-center py-16  font-bold text-5xl bg-blue-500 rounded-full mx-16'>
                    <CountUp end={5000} redraw={true}>
                        {({ countUpRef, start }) => (
                            <ReactVisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                        )}
                    </CountUp>+ <br />
                    <span className='text-3xl'>Books </span>
                </div>
                <div className=' text-white text-center py-16  font-bold text-5xl bg-blue-500 rounded-full mx-16'>
                    <CountUp end={1200} redraw={true}>
                        {({ countUpRef, start }) => (
                            <ReactVisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                        )}
                    </CountUp>+ <br />
                    <span className='text-3xl'>Sells Book</span>
                </div>

            </div >
        </div>
    );
};

export default CountUped;