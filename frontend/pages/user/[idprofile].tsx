import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LayoutBasis1 from "src/Layouts/LayoutBasis1";
import Mainlayout from 'src/Layouts/Mainlayout';
import { PostItem } from 'src/components';




function PersonalProfile() {
    const { idprofile } = useRouter().query;

    React.useEffect(() => { 
        async function FetchAPi(){
            try {
                
            } catch (error) {
                
            }
        }
        
    }, [idprofile])

    const { data: session, status } = useSession()
    return (
        <>
            <Mainlayout>
                <div className=' w-full bg-blue-100'>
                    <div className='flex items-center justify-between py-5 px-2'>
                        <div className="flex justify-end ">

                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='h-32 w-32 bg-red-500 rounded-full overflow-hidden'>
                                {/*  Image Profile */}
                                <LazyLoadImage className='w-full h-full object-contain object-center' src={session?.user?.image as string} />
                            </div>
                            <h3 className='text-black font-bold'>{session?.user?.name as string} </h3>
                        </div>
                        <div onClick={() => {

                        }} className="flex justify-end">
                            <p
                                className="cursor-pointer md:flex hidden bg-blue-600 text-white hover:font-medium  border-[2px] border-[#D4D4D4] px-3 py-2 rounded-md items-center justify-center"
                            >Follow</p>
                        </div>
                    </div>

                </div>
                <h3 className='text-black my-7'>Recently Updated</h3>

            </Mainlayout>
        </>
    )
}

export default PersonalProfile