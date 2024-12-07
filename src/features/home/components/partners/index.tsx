import Image from "next/image"

const Partners = () => {
    return (
        <div className="my-12 bg-primaryBlack-800 bg-opacity-[0.4] py-16" id="partners">
            <div className="flex flex-col items-center gap-6">
                <h2 className="md:text-5xl text-3xl font-bold">Our <span className="text-sky-500">Partners</span></h2>
            </div>
            <div className="space-y-6">
                <div className="flex flex-col items-center px-2">
                    <div className="flex justify-center items-center flex-col my-4">
                        <p className="lg:text-xl text-lg">Sponsorship</p>
                    </div>
                    <Image src="/assets/partners/sponsor.png" alt="sponsor" width="200" height="200" className="lg:w-[400px] w-[200px]" />
                </div>
                <div className="flex flex-col items-center px-2">
                    <div className="flex justify-center items-center flex-col my-4">
                        <p className="lg:text-xl text-lg">Media Partners</p>
                    </div>
                    <Image src="/assets/partners/media.png" alt="media" width="200" height="200" className="lg:w-[600px] w-[600px]" />
                </div>
            </div>
        </div>
    )
}
export default Partners